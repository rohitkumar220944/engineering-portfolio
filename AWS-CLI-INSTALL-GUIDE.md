# 🚨 AWS CLI Installation Required

## Issue Found
The S3 configuration script failed because **AWS CLI is not installed** on your local machine.

## 📥 Install AWS CLI (Choose One Option)

### Option 1: Windows Installer (Recommended)
1. Download from: https://aws.amazon.com/cli/
2. Run the installer
3. Restart PowerShell
4. Run: `aws --version` to verify

### Option 2: Using Windows Package Manager
```powershell
# If you have winget installed
winget install Amazon.AWSCLI
```

### Option 3: Using Chocolatey
```powershell
# If you have Chocolatey installed
choco install awscli
```

## ⚙️ Configure AWS CLI After Installation
```powershell
# Configure your credentials
aws configure

# You'll need:
# - AWS Access Key ID (from your IAM user)
# - AWS Secret Access Key (from your IAM user)
# - Default region: us-east-1
# - Default output format: json
```

## 🚀 Alternative: Use AWS Console (No CLI needed)

If you prefer not to install AWS CLI, you can fix the S3 configuration manually:

### Step 1: Go to S3 Console
1. Open https://console.aws.amazon.com/s3/
2. Click on bucket `rohitaarav.me`

### Step 2: Enable Static Website Hosting
1. Go to **Properties** tab
2. Scroll to **Static website hosting**
3. Click **Edit**
4. Select **Enable**
5. Index document: `index.html`
6. Error document: `404.html`
7. Click **Save changes**

### Step 3: Fix Bucket Ownership (Critical)
1. Go to **Permissions** tab
2. Scroll to **Object Ownership**
3. Click **Edit**
4. Select **Bucket owner enforced**
5. Click **Save changes**

### Step 4: Verify Public Access Block
1. Still in **Permissions** tab
2. **Block public access** should show:
   - ❌ Block all public access: **OFF**
   - ❌ Block public access to buckets and objects granted through new access control lists (ACLs): **OFF**
   - ❌ Block public access to buckets and objects granted through any access control lists (ACLs): **OFF**
   - ❌ Block public access to buckets and objects granted through new public bucket or access point policies: **OFF**
   - ❌ Block public access to buckets and objects granted through any public bucket or access point policies: **OFF**

### Step 5: Verify Bucket Policy
1. Still in **Permissions** tab
2. **Bucket policy** should contain:
```json
{
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
}
```

## 🧪 Test Your Website
After making these changes, test your website:
**http://rohitaarav.me.s3-website-us-east-1.amazonaws.com**

## 💡 Quick Check Commands (After AWS CLI Install)
```powershell
# Check if website hosting is enabled
aws s3api get-bucket-website --bucket rohitaarav.me

# Check bucket ownership
aws s3api get-bucket-ownership-controls --bucket rohitaarav.me

# Test access to your site
curl -I http://rohitaarav.me.s3-website-us-east-1.amazonaws.com
```

---

**Choose your preferred method**: Install AWS CLI for automation, or use AWS Console for manual configuration!