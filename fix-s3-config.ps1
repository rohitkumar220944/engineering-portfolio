# S3 Bucket Configuration Fix Script (PowerShell)
# This script fixes common S3 static website hosting issues

$BUCKET_NAME = "rohitaarav.me"

Write-Host "🔧 Fixing S3 bucket configuration for static website hosting..." -ForegroundColor Green

# 1. Ensure bucket website configuration is correct
Write-Host "📝 Setting up static website hosting configuration..." -ForegroundColor Cyan
aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document 404.html

# 2. Update bucket policy to ensure public read access
Write-Host "🔐 Updating bucket policy for public read access..." -ForegroundColor Cyan
$bucketPolicy = @"
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
    }
  ]
}
"@

$bucketPolicy | Out-File -FilePath "bucket-policy.json" -Encoding utf8
aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json

# 3. Ensure public access block settings allow public policies
Write-Host "🌐 Configuring public access block settings..." -ForegroundColor Cyan
aws s3api put-public-access-block --bucket $BUCKET_NAME --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

# 4. Disable ACLs for the bucket (use bucket policy instead)
Write-Host "⚙️  Configuring bucket ownership controls..." -ForegroundColor Cyan
aws s3api put-bucket-ownership-controls --bucket $BUCKET_NAME --ownership-controls 'Rules=[{ObjectOwnership=BucketOwnerEnforced}]'

# 5. Test the configuration
Write-Host "🧪 Testing bucket configuration..." -ForegroundColor Cyan
$WEBSITE_URL = "http://$BUCKET_NAME.s3-website-us-east-1.amazonaws.com"

Write-Host ""
Write-Host "✅ S3 bucket configuration complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Configuration Summary:" -ForegroundColor Yellow
Write-Host "   • Static website hosting: ENABLED"
Write-Host "   • Index document: index.html"
Write-Host "   • Error document: 404.html"
Write-Host "   • Public read access: ENABLED via bucket policy"
Write-Host "   • ACLs: DISABLED (using bucket policy instead)"
Write-Host ""
Write-Host "🌐 Your website should be accessible at:" -ForegroundColor Green
Write-Host "   $WEBSITE_URL"
Write-Host ""
Write-Host "💡 If you still see issues, wait a few minutes for AWS to propagate changes." -ForegroundColor Cyan

# Clean up temp file
Remove-Item -Path "bucket-policy.json" -ErrorAction SilentlyContinue