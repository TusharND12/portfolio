# 🚀 Enable GitHub Pages - Step by Step

Your portfolio is ready to deploy! Follow these steps to make it live.

## 📋 Steps to Enable GitHub Pages

### 1️⃣ Open Your Repository
Go to: **https://github.com/TusharND12/portfolio**

### 2️⃣ Go to Settings
- Click on the **Settings** tab (top menu bar of your repository)

### 3️⃣ Navigate to Pages
- Scroll down in the left sidebar
- Click on **Pages** (under "Code and automation" section)

### 4️⃣ Configure Source
- Under **Source**, you'll see a dropdown
- Select: **GitHub Actions** ⚡
  - **NOT** "Deploy from a branch"
  - **NOT** "Deploy from a tag"

### 5️⃣ Save
- The page will automatically save your selection
- You don't need to click any "Save" button

## 🎯 What Happens Next?

Once you enable GitHub Actions as the source:

1. ✅ GitHub will automatically trigger the deployment workflow
2. ⏳ The build will start (takes 2-5 minutes)
3. 🚀 Your site will be deployed to: **https://tusharnd12.github.io/portfolio/**

## 🔍 Check Deployment Progress

### Monitor the Build:
1. Go to the **Actions** tab in your repository
2. Click on the workflow run "Deploy to GitHub Pages"
3. You'll see the build progress in real-time
4. Wait for the green checkmark ✅ = Success!

### If Build Fails:
- Check the error logs in the Actions tab
- Most common issues:
  - Missing dependencies (check package.json)
  - Build errors in Next.js
  - Configuration issues

## ✅ Quick Checklist

Before enabling, make sure:
- ✅ All code is pushed to `main` branch
- ✅ `.github/workflows/deploy.yml` exists
- ✅ `public/.nojekyll` file exists
- ✅ `next.config.mjs` has GitHub Pages configuration
- ✅ No uncommitted changes

**You've already done all of these! ✅**

## 📍 Your Live Site URL

Once deployed:
- **URL**: https://tusharnd12.github.io/portfolio/
- **First deployment**: Takes 2-5 minutes
- **Future deployments**: Auto-deploys on every push to `main`

## 🔄 Future Updates

After the first deployment, updates are automatic:

```bash
# Make changes to your code
git add .
git commit -m "Update portfolio"
git push origin main
```

That's it! GitHub Actions will automatically rebuild and redeploy.

## ⚠️ Important Reminders

### API Routes Won't Work
Since GitHub Pages is static hosting:
- ❌ Contact form submission
- ❌ Chat API
- ❌ Email service

All frontend features work fine:
- ✅ All components and pages
- ✅ 3D graphics (Universe mode)
- ✅ Animations and interactions
- ✅ All visual features

### Need Full Functionality?
Deploy to **Vercel** instead:
- Free tier available
- Full Next.js support
- API routes work
- Auto-deploy from GitHub
- Visit: https://vercel.com

## 🆘 Need Help?

If something doesn't work:
1. Check the **Actions** tab for error logs
2. Verify **Settings** → **Pages** is set to GitHub Actions
3. Make sure all changes are pushed to `main`
4. Wait a few minutes and refresh

## 🎉 You're Almost There!

**Now go to your repository and enable GitHub Pages!**

👉 **https://github.com/TusharND12/portfolio/settings/pages**

Choose **GitHub Actions** as the source, and you're done! 🚀

---

*Your portfolio will be live in minutes!*

