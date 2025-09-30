# 🔒 HTTPS Setup for Portfolio Website

This guide will help you set up HTTPS for your portfolio website using AWS CloudFront and SSL certificates.

## 🚨 Current Issue
Your website shows as "Not secure" because it's served over HTTP instead of HTTPS. S3 static website hosting only supports HTTP by default.

## ✅ Solution
Set up CloudFront (AWS CDN) with an SSL certificate to serve your website over HTTPS.

## 🛠️ Quick Setup

### Option 1: Automated Setup (Recommended)
Run the setup script in your project directory:

**Windows (PowerShell):**
```powershell
.\setup-https.ps1
```

**Linux/Mac (Bash):**
```bash
chmod +x setup-https.sh
./setup-https.sh
```

### Option 2: Manual Setup via AWS Console

1. **Create SSL Certificate:**
   - Go to AWS Certificate Manager (ACM) in `us-east-1` region
   - Request a public certificate for `rohitaarav.me` and `www.rohitaarav.me`
   - Use DNS validation

2. **Create CloudFront Distribution:**
   - Origin Domain: `rohitaarav.me.s3-website-us-east-1.amazonaws.com`
   - Viewer Protocol Policy: "Redirect HTTP to HTTPS"
   - Alternate Domain Names: `rohitaarav.me`, `www.rohitaarav.me`
   - SSL Certificate: Select your ACM certificate

3. **Update DNS:**
   - Create Route53 hosted zone for `rohitaarav.me`
   - Create A records pointing to CloudFront distribution
   - Update nameservers at your domain registrar

## 📋 What Gets Created

- ✅ SSL Certificate for your domain
- ✅ CloudFront distribution with HTTPS enabled
- ✅ Route53 hosted zone and DNS records
- ✅ Automatic HTTP to HTTPS redirects
- ✅ Error page redirects for SPA routing

## 🎯 Expected Results

**Before (HTTP - Not Secure):**
```
❌ http://rohitaarav.me.s3-website-us-east-1.amazonaws.com
🚨 "Not secure" warning in browser
```

**After (HTTPS - Secure):**
```
✅ https://rohitaarav.me
🔒 Secure padlock icon in browser
🚀 Fast loading via CloudFront CDN
```

## ⏱️ Timeline

- **Immediate:** CloudFront distribution created
- **10-15 minutes:** SSL certificate validation
- **15-30 minutes:** CloudFront deployment complete
- **Up to 48 hours:** Full DNS propagation

## 🔍 Checking Status

```bash
# Check CloudFormation stack status
aws cloudformation describe-stacks --stack-name rohitaarav-me-https-stack --region us-east-1

# Check SSL certificate status
aws acm list-certificates --region us-east-1

# Check CloudFront distribution status
aws cloudfront list-distributions --query "DistributionList.Items[?Aliases.Items[0]=='rohitaarav.me']"
```

## 🚀 Deployment Updates

After HTTPS is set up, your GitHub Actions will automatically:
1. Deploy to S3 bucket
2. Invalidate CloudFront cache
3. Your HTTPS site updates immediately

## 💰 Cost Estimation

- **CloudFront:** ~$0.085 per GB (first 10 TB/month)
- **Route53:** $0.50 per hosted zone per month
- **SSL Certificate:** Free with AWS Certificate Manager
- **Typical small website:** ~$1-5 per month

## 🆘 Troubleshooting

**Problem:** Certificate validation pending
- **Solution:** Check DNS records in Route53, may need to add CNAME manually

**Problem:** CloudFront shows "distribution not found"
- **Solution:** Wait 15-30 minutes for deployment, check AWS console

**Problem:** Website still shows HTTP
- **Solution:** Clear browser cache, wait for DNS propagation

**Problem:** 404 errors on refresh
- **Solution:** CloudFormation template includes error page redirects for SPA

## 📞 Need Help?

If you encounter issues:
1. Check AWS CloudFormation console for detailed error messages
2. Verify your AWS credentials have necessary permissions
3. Ensure you're running commands in the correct AWS region (us-east-1)

---

**🎉 Once complete, your portfolio will be accessible at:**
- **https://rohitaarav.me** (secure)
- **https://www.rohitaarav.me** (secure)

Both will show the secure padlock icon! 🔒