# Setup script for HTTPS with CloudFront and SSL Certificate
# Run this script to set up HTTPS for your portfolio website

Write-Host "🚀 Setting up HTTPS for rohitaarav.me..." -ForegroundColor Green

# Check if AWS CLI is configured
try {
    aws sts get-caller-identity | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "AWS CLI not configured"
    }
} catch {
    Write-Host "❌ AWS CLI not configured. Please run 'aws configure' first." -ForegroundColor Red
    exit 1
}

# Variables
$DOMAIN_NAME = "rohitaarav.me"
$STACK_NAME = "rohitaarav-me-https-stack"
$REGION = "us-east-1"  # SSL certificates for CloudFront must be in us-east-1

Write-Host "📋 Domain: $DOMAIN_NAME" -ForegroundColor Cyan
Write-Host "📋 Stack: $STACK_NAME" -ForegroundColor Cyan
Write-Host "📋 Region: $REGION" -ForegroundColor Cyan

# Deploy CloudFormation stack
Write-Host "🔧 Deploying CloudFormation stack..." -ForegroundColor Yellow
aws cloudformation deploy `
    --template-file .aws/cloudfront-ssl.yml `
    --stack-name $STACK_NAME `
    --parameter-overrides `
        DomainName=$DOMAIN_NAME `
        S3BucketName=$DOMAIN_NAME `
    --capabilities CAPABILITY_IAM `
    --region $REGION

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ CloudFormation stack deployed successfully!" -ForegroundColor Green
    
    # Get outputs
    Write-Host "📊 Getting stack outputs..." -ForegroundColor Cyan
    aws cloudformation describe-stacks `
        --stack-name $STACK_NAME `
        --region $REGION `
        --query 'Stacks[0].Outputs[*].[OutputKey,OutputValue]' `
        --output table
    
    Write-Host ""
    Write-Host "🎉 Setup complete! Here's what was created:" -ForegroundColor Green
    Write-Host "   • SSL Certificate for $DOMAIN_NAME"
    Write-Host "   • CloudFront distribution with HTTPS"
    Write-Host "   • Route53 hosted zone and DNS records"
    Write-Host ""
    Write-Host "📝 Next steps:" -ForegroundColor Yellow
    Write-Host "   1. Update your domain's nameservers to point to Route53"
    Write-Host "   2. Wait for DNS propagation (up to 48 hours)"
    Write-Host "   3. Your website will be available at https://$DOMAIN_NAME"
    Write-Host ""
    Write-Host "🔍 To check status:" -ForegroundColor Cyan
    Write-Host "   aws cloudformation describe-stacks --stack-name $STACK_NAME --region $REGION"
} else {
    Write-Host "❌ CloudFormation deployment failed!" -ForegroundColor Red
    exit 1
}