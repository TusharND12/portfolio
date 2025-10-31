# 🔄 Alternative: Use Branch Deployment Instead

Since GitHub Actions might not be configured correctly, let's try a simpler approach.

## 📋 Steps to Deploy from Branch

### 1. Build Your Portfolio Locally
In your terminal:
```bash
cd "T:\COLLEGE LIFE\projects\Portfolio"
npm run build
```

This creates an `out/` folder with the static site.

### 2. Create a New Branch Called `gh-pages`
```bash
git checkout -b gh-pages
```

### 3. Copy Contents of `out/` to Root
```bash
# Remove everything except .git
git rm -rf .

# Copy files from out/ to root
cp -r out/* .

# Or on Windows PowerShell:
Remove-Item -Recurse -Force . -Exclude .git
Copy-Item -Recurse out/* .
```

### 4. Commit and Push
```bash
git add .
git commit -m "Deploy static site to gh-pages"
git push origin gh-pages
```

### 5. Update GitHub Pages Settings
1. Go to: https://github.com/TusharND12/portfolio/settings/pages
2. Set **Source** to: **"Deploy from a branch"**
3. Select branch: **`gh-pages`**
4. Folder: **`/`** (root)
5. Click **Save**

### 6. Wait and Test
- Wait 2-5 minutes
- Visit: https://tusharnd12.github.io/portfolio/

---

## ⚠️ Important Notes

### When You Update Your Portfolio:
Every time you make changes, you need to:
1. Switch back to main: `git checkout main`
2. Make your changes
3. Build: `npm run build`
4. Switch to gh-pages: `git checkout gh-pages`
5. Copy out files again
6. Commit and push

This is manual but simpler than GitHub Actions!

---

## 🎯 Right Now - Let Me Help You Build It

Should I build your portfolio now so you can deploy it?

