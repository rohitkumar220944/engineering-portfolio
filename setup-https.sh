#!/bin/bash

# Setup script for HTTPS with CloudFront and SSL Certificate
# Run this script to set up HTTPS for your portfolio website

echo "🚀 Setting up HTTPS for rohitaarav.me..."

# Check if AWS CLI is configured
if ! aws sts get-caller-identity > /dev/null 2>&1; then
    echo "❌ AWS CLI not configured. Please run 'aws configure' first."
    exit 1
fi

# Variables
DOMAIN_NAME="rohitaarav.me"
STACK_NAME="rohitaarav-me-https-stack"
REGION="us-east-1"  # SSL certificates for CloudFront must be in us-east-1

echo "📋 Domain: $DOMAIN_NAME"
echo "📋 Stack: $STACK_NAME"
echo "📋 Region: $REGION"

# Deploy CloudFormation stack
echo "🔧 Deploying CloudFormation stack..."
aws cloudformation deploy \
    --template-file .aws/cloudfront-ssl.yml \
    --stack-name $STACK_NAME \
    --parameter-overrides \
        DomainName=$DOMAIN_NAME \
        S3BucketName=$DOMAIN_NAME \
    --capabilities CAPABILITY_IAM \
    --region $REGION

if [ $? -eq 0 ]; then
    echo "✅ CloudFormation stack deployed successfully!"
    
    # Get outputs
    echo "📊 Getting stack outputs..."
    aws cloudformation describe-stacks \
        --stack-name $STACK_NAME \
        --region $REGION \
        --query 'Stacks[0].Outputs[*].[OutputKey,OutputValue]' \
        --output table
    
    echo ""
    echo "🎉 Setup complete! Here's what was created:"
    echo "   • SSL Certificate for $DOMAIN_NAME"
    echo "   • CloudFront distribution with HTTPS"
    echo "   • Route53 hosted zone and DNS records"
    echo ""
    echo "📝 Next steps:"
    echo "   1. Update your domain's nameservers to point to Route53"
    echo "   2. Wait for DNS propagation (up to 48 hours)"
    echo "   3. Your website will be available at https://$DOMAIN_NAME"
    echo ""
    echo "🔍 To check status:"
    echo "   aws cloudformation describe-stacks --stack-name $STACK_NAME --region $REGION"
else
    echo "❌ CloudFormation deployment failed!"
    exit 1
fi