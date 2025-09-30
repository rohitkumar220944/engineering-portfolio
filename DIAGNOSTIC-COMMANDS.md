# 🔍 AWS CLI Commands to Diagnose Website Access Issues

## 🚨 **Issue**: Website not opening on other devices
**URL**: http://rohitaarav.me.s3-website-us-east-1.amazonaws.com

## 📋 **Diagnostic Commands** (Run these in order)

### 1. **Check if Static Website Hosting is Enabled**
```bash
aws s3api get-bucket-website --bucket rohitaarav.me
```
**Expected Output**: Should show index document and error document configuration
**If Error**: "NoSuchWebsiteConfiguration" means static hosting is NOT enabled

### 2. **Verify Bucket Policy (Public Access)**
```bash
aws s3api get-bucket-policy --bucket rohitaarav.me
```
**Expected Output**: Should show policy allowing public read access
**If Error**: "NoSuchBucketPolicy" means no public access policy

### 3. **Check Public Access Block Settings**
```bash
aws s3api get-public-access-block --bucket rohitaarav.me
```
**Expected Output**: All should be `false` for website to work
```json
{
    "PublicAccessBlockConfiguration": {
        "BlockPublicAcls": false,
        "IgnorePublicAcls": false,
        "BlockPublicPolicy": false,
        "RestrictPublicBuckets": false
    }
}
```

### 4. **Check Bucket Location/Region**
```bash
aws s3api get-bucket-location --bucket rohitaarav.me
```
**Expected Output**: Should be `us-east-1` or `null` (which means us-east-1)

### 5. **Test Object Access Directly**
```bash
aws s3api head-object --bucket rohitaarav.me --key index.html
```
**Expected Output**: Should show metadata without errors

### 6. **Check if Files Exist in Bucket**
```bash
aws s3 ls s3://rohitaarav.me/ --human-readable
```
**Expected Output**: Should list index.html, 404.html, and _next/ directory

### 7. **Test Website URL from AWS CLI**
```bash
curl -I http://rohitaarav.me.s3-website-us-east-1.amazonaws.com
```
**Expected Output**: HTTP/1.1 200 OK

### 8. **Check Bucket ACL Settings**
```bash
aws s3api get-bucket-acl --bucket rohitaarav.me
```

### 9. **Check Object Ownership Controls**
```bash
aws s3api get-bucket-ownership-controls --bucket rohitaarav.me
```
**Expected Output**: Should show `BucketOwnerEnforced` for modern setup

### 10. **Test Specific Object Access**
```bash
curl -I https://rohitaarav.me.s3.amazonaws.com/index.html
```
**Expected Output**: Should return 200 or 403 (403 means policy issue)

## 🔧 **Common Fixes Based on Results**

### If Static Website Hosting is NOT Enabled:
```bash
aws s3 website s3://rohitaarav.me --index-document index.html --error-document 404.html
```

### If No Bucket Policy (Public Access):
```bash
aws s3api put-bucket-policy --bucket rohitaarav.me --policy '{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::rohitaarav.me/*"
    }
  ]
}'
```

### If Public Access is Blocked:
```bash
aws s3api put-public-access-block --bucket rohitaarav.me --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
```

### If ACL Issues (Disable ACLs):
```bash
aws s3api put-bucket-ownership-controls --bucket rohitaarav.me --ownership-controls Rules='[{ObjectOwnership=BucketOwnerEnforced}]'
```

## 🌐 **Network Testing Commands**

### Test from Different Networks:
```bash
# Test DNS resolution
nslookup rohitaarav.me.s3-website-us-east-1.amazonaws.com

# Test connectivity
ping rohitaarav.me.s3-website-us-east-1.amazonaws.com

# Test HTTP response
curl -v http://rohitaarav.me.s3-website-us-east-1.amazonaws.com
```

## 📱 **Device-Specific Issues**

### Check if it's a Network/Firewall Issue:
1. **Corporate/School Network**: May block S3 websites
2. **Mobile Data vs WiFi**: Try both connections
3. **Browser Cache**: Clear browser cache on other devices
4. **DNS Issues**: Try accessing from different networks

### Alternative URLs to Test:
```bash
# Direct S3 object access (should return 403 if policy is wrong)
curl -I https://rohitaarav.me.s3.amazonaws.com/index.html

# Alternative S3 website URL format
curl -I http://rohitaarav.me.s3-website.us-east-1.amazonaws.com
```

## 🔍 **Quick Diagnostic Script**
```bash
#!/bin/bash
echo "=== S3 Website Diagnostics ==="
echo "1. Testing website hosting configuration..."
aws s3api get-bucket-website --bucket rohitaarav.me

echo -e "\n2. Testing bucket policy..."
aws s3api get-bucket-policy --bucket rohitaarav.me

echo -e "\n3. Testing public access blocks..."
aws s3api get-public-access-block --bucket rohitaarav.me

echo -e "\n4. Testing website URL..."
curl -I http://rohitaarav.me.s3-website-us-east-1.amazonaws.com

echo -e "\n5. Listing bucket contents..."
aws s3 ls s3://rohitaarav.me/ --human-readable
```

## 🆘 **Most Common Issues:**

1. **403 Forbidden**: Bucket policy not allowing public access
2. **404 Not Found**: Static website hosting not enabled
3. **Connection Timeout**: Network/firewall blocking access
4. **Works on one device only**: Browser cache or network restrictions

---

**Run these commands and share the output to identify the exact issue!**