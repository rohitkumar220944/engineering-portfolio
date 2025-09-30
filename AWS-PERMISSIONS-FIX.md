# 🔧 AWS Permissions Fix Guide - Simplified S3 Deployment

## 🚨 Current Issue
Your GitHub Actions deployment was failing with CloudFront permission errors, but **you don't need CloudFront for a basic portfolio website!**

## ✅ Simplified Solution - S3 Only

### What You Need (Minimal Permissions)

**Step 1: Open AWS IAM Console**
1. Go to [AWS IAM Console](https://console.aws.amazon.com/iam/)
2. Navigate to **Users** → **rohitportfolio**

**Step 2: Attach S3-Only Policy**
1. Click **Add permissions** → **Attach policies directly**
2. Click **Create policy**
3. Choose **JSON** tab
4. Copy and paste the contents from `.aws/iam-policy.json` in your project
5. Click **Next** → **Next**
6. Name: `S3-Portfolio-Deployment-Policy`
7. Click **Create policy**
8. Go back to user and attach this new policy

**Alternative - Use AWS Managed Policy:**
Instead of custom policy, you can simply attach:
- `AmazonS3FullAccess` (if you want to keep it simple)

## 🎯 What This Gives You

✅ **Fast Deployment**: Direct to S3, no CDN complexity  
✅ **Cost Effective**: Only S3 costs (~$0.50/month)  
✅ **Simple Setup**: No CloudFront, SSL certificates, or DNS complexity  
✅ **Perfect for Portfolio**: More than adequate for a personal website  

## 🚀 Your Website URL

After deployment, your portfolio will be available at:
```
http://rohitaarav.me.s3-website-us-east-1.amazonaws.com
```

## 📋 Simplified IAM Permissions

The new policy only includes:
| Permission | Purpose |
|------------|---------|
| `s3:GetObject` | Download files |
| `s3:PutObject` | Upload new files |
| `s3:DeleteObject` | Remove old files |
| `s3:ListBucket` | List bucket contents |
| `s3:*BucketWebsite` | Configure static website hosting |

## 🔍 Test Your Setup

```bash
# Check S3 permissions
aws s3 ls s3://rohitaarav.me

# Test deployment
git add .
git commit -m "Simplified S3-only deployment"
git push origin main
```

## � Why This is Better for You

**Before (Complex):**
- S3 + CloudFront + Route53 + SSL certificates
- Multiple AWS services to manage
- Complex permissions
- Higher costs

**Now (Simple):**
- Just S3 static website hosting
- Single service to manage  
- Minimal permissions
- Lowest cost

## 🆘 Still Having Issues?

**Permission denied errors:**
- Make sure the IAM policy is attached to the `rohitportfolio` user
- Wait 5-10 minutes for IAM changes to take effect

**Deployment fails:**
- Check that the S3 bucket `rohitaarav.me` exists
- Verify bucket is configured for static website hosting

---

**🎯 Result:** Clean, simple deployment that just works! Your portfolio website will be live and accessible within minutes of pushing code. No complicated CDN setup needed for a personal portfolio.