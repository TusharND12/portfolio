# GitHub Pages Deployment Guide

This guide will help you deploy your Next.js portfolio to GitHub Pages.

## ⚠️ Important Limitations

**GitHub Pages is a static hosting service**, which means:

1. **API Routes Won't Work**: Your contact form (`/api/contact`), chat API (`/api/chat`), and other API endpoints will **NOT function** on GitHub Pages. These require a server.

2. **Solutions for Contact Form**:
   - Use a third-party service like [Formspree](https://formspree.io/), [Netlify Forms](https://www.netlify.com/products/forms/), or [EmailJS](https://www.emailjs.com/)
   - Set up a separate backend service (e.g., Vercel Serverless Functions, AWS Lambda)
   - Or temporarily disable the contact form submission

3. **Email Functionality**: The email service (`emailService.ts`) requires server-side Node.js, so it won't work on GitHub Pages.

## ✅ What Works on GitHub Pages

- All frontend components and pages
- Static content and assets
- Client-side JavaScript and React
- Animations and interactive UI
- 3D graphics (Three.js/React Three Fiber)
- All visual features

## 📋 Deployment Steps

### Step 1: Push Code to GitHub

1. If you haven't already, initialize git and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when you push to `main`

### Step 3: Configure Repository Name (if needed)

If your repository is **NOT** named `YOUR_USERNAME.github.io`, you need to configure the base path.

**Option A: If repo is `username.github.io`** (root domain):
- No changes needed - the current config works as-is

**Option B: If repo has a different name** (subdirectory):
- Add `basePath` to `next.config.mjs`:
  ```javascript
  basePath: '/REPO_NAME',
  ```
- Update the GitHub Actions workflow if needed

### Step 4: Test the Build Locally (Optional)

Before deploying, test the static export:

```bash
npm run build
```

This will create an `out/` directory with the static files. You can test it locally:

```bash
# Install a simple HTTP server
npm install -g http-server

# Serve the out directory
http-server out -p 3000
```

Visit `http://localhost:3000` to preview your site.

### Step 5: Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You should see a workflow run for "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-5 minutes)
4. Once done, your site will be live at:
   - `https://YOUR_USERNAME.github.io/` (if repo is `username.github.io`)
   - `https://YOUR_USERNAME.github.io/REPO_NAME/` (if repo has different name)

## 🔧 Configuration Files

### `.github/workflows/deploy.yml`
This workflow file:
- Builds your Next.js app on every push to `main`
- Creates a static export
- Deploys it to GitHub Pages automatically

### `public/.nojekyll`
This file tells GitHub Pages not to process files with Jekyll (required for Next.js static exports).

### `next.config.mjs`
Already configured with:
- `output: 'export'` - Enables static export
- `images: { unoptimized: true }` - Required for static export
- `trailingSlash: false` - Better URL compatibility

## 🐛 Troubleshooting

### Build Fails
- Check the **Actions** tab for error messages
- Ensure all dependencies are in `package.json`
- Verify Node.js version (should be 20+)

### Site Shows 404
- Wait a few minutes after deployment
- Clear your browser cache
- Check the Pages settings in GitHub

### API Routes Error
- This is expected - API routes don't work on static hosting
- Consider using a third-party form service or external API

### Images Not Loading
- Check image paths are correct
- Ensure images are in the `public/` directory
- Verify `images.unoptimized: true` in `next.config.mjs`

## 🔄 Updating Your Site

Simply push changes to the `main` branch:

```bash
git add .
git commit -m "Update portfolio"
git push
```

The GitHub Actions workflow will automatically rebuild and redeploy your site.

## 📝 Alternative Hosting Options

If you need API routes and server-side functionality:

1. **Vercel** (Recommended for Next.js)
   - Free tier with serverless functions
   - Automatic deployments from GitHub
   - Perfect for Next.js apps
   - [Deploy here](https://vercel.com)

2. **Netlify**
   - Free tier with form handling
   - Serverless functions support
   - [Deploy here](https://netlify.com)

3. **Railway/Render**
   - Full Node.js support
   - Database hosting available
   - [Railway](https://railway.app) | [Render](https://render.com)

## 📚 Additional Resources

- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

**Need Help?** Check the Actions tab in your repository for detailed build logs and errors.

