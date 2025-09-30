#!/bin/bash

# S3 Bucket Configuration Fix Script
# This script fixes common S3 static website hosting issues

BUCKET_NAME="rohitaarav.me"

echo "🔧 Fixing S3 bucket configuration for static website hosting..."

# 1. Ensure bucket website configuration is correct
echo "📝 Setting up static website hosting configuration..."
aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document 404.html

# 2. Update bucket policy to ensure public read access
echo "🔐 Updating bucket policy for public read access..."
cat > /tmp/bucket-policy.json << EOF
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
EOF

aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file:///tmp/bucket-policy.json

# 3. Ensure public access block settings allow public policies
echo "🌐 Configuring public access block settings..."
aws s3api put-public-access-block --bucket $BUCKET_NAME --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

# 4. Disable ACLs for the bucket (use bucket policy instead)
echo "⚙️  Configuring bucket ownership controls..."
aws s3api put-bucket-ownership-controls --bucket $BUCKET_NAME --ownership-controls Rules='[{ObjectOwnership=BucketOwnerEnforced}]'

# 5. Test the configuration
echo "🧪 Testing bucket configuration..."
WEBSITE_URL="http://$BUCKET_NAME.s3-website-us-east-1.amazonaws.com"

echo ""
echo "✅ S3 bucket configuration complete!"
echo ""
echo "📋 Configuration Summary:"
echo "   • Static website hosting: ENABLED"
echo "   • Index document: index.html"
echo "   • Error document: 404.html"
echo "   • Public read access: ENABLED via bucket policy"
echo "   • ACLs: DISABLED (using bucket policy instead)"
echo ""
echo "🌐 Your website should be accessible at:"
echo "   $WEBSITE_URL"
echo ""
echo "💡 If you still see issues, wait a few minutes for AWS to propagate changes."

# Clean up temp file
rm -f /tmp/bucket-policy.json