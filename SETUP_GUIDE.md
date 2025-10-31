# 🚀 Setup Guide - Developer Universe Portfolio

## Quick Start (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Customize Your Data
Edit `lib/data.ts` with your information.

That's it! Your portfolio is running at `http://localhost:3000` 🎉

---

## Detailed Setup

### Customization Checklist

#### ✅ Step 1: Personal Information
Open `lib/data.ts` and update:
- [ ] Your name
- [ ] Job title
- [ ] Email address
- [ ] Social media links (GitHub, LinkedIn, Twitter)
- [ ] Location

#### ✅ Step 2: Add Your Projects
In `lib/data.ts`, add your projects:
```typescript
{
  id: "unique-id",
  title: "Project Name",
  description: "What does it do?",
  technologies: ["Tech", "Stack"],
  github: "https://github.com/...",
  live: "https://yourproject.com",
  featured: true,
  color: "#hex-color"
}
```

#### ✅ Step 3: Update Skills
Add or modify skills with their proficiency levels (0-100):
```typescript
{ name: "React", level: 95, icon: "⚛️" }
```

#### ✅ Step 4: Add Work Experience
Include your professional experience:
```typescript
{
  title: "Job Title",
  company: "Company Name",
  period: "2020 - Present",
  description: "What you did",
  achievements: ["Achievement 1", "Achievement 2"]
}
```

---

## Optional Features

### 🗄️ Database Setup (Optional)

If you want contact form and analytics to persist:

1. **Install PostgreSQL**
   - macOS: `brew install postgresql`
   - Windows: Download from postgresql.org
   - Linux: `sudo apt-get install postgresql`

2. **Create Database**
```bash
createdb portfolio
```

3. **Update .env**
```env
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"
```

4. **Run Migrations**
```bash
npx prisma generate
npx prisma db push
```

### 🤖 AI Chat Setup (Optional)

To enable the AI chat assistant:

1. **Get OpenAI API Key**
   - Visit https://platform.openai.com/
   - Create an account and generate API key

2. **Add to .env**
```env
OPENAI_API_KEY="sk-..."
```

3. **Uncomment AI Code**
   - Open `app/api/chat/route.ts`
   - Uncomment the OpenAI integration code

### 📧 Contact Form Email (Optional)

To receive email notifications:

1. **Choose Email Service**
   - SendGrid
   - AWS SES
   - Resend
   - Mailgun

2. **Install Package**
```bash
npm install @sendgrid/mail
# or your preferred service
```

3. **Update Contact API**
   - Edit `app/api/contact/route.ts`
   - Add email sending logic

---

## Deployment

### Vercel (Easiest - Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo>
git push -u origin main
```

2. **Deploy on Vercel**
   - Go to vercel.com
   - Click "Import Project"
   - Select your GitHub repo
   - Add environment variables
   - Deploy!

### Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Add environment variables** in Netlify dashboard

### Self-Hosted (VPS/Cloud)

1. **Build Project**
```bash
npm run build
```

2. **Start Production Server**
```bash
npm run start
```

3. **Use PM2 for Process Management**
```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

---

## Customization Tips

### 🎨 Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  cyber: {
    pink: '#your-color',
    purple: '#your-color',
    // ...
  }
}
```

### 🖼️ Add Project Images

1. Place images in `public/projects/`
2. Update image paths in `lib/data.ts`
3. Use Next.js Image component for optimization

### ✨ Modify Animations

Edit `app/globals.css` for custom animations:
```css
@keyframes your-animation {
  /* your keyframes */
}
```

### 🎭 Create New Theme

1. Add theme mode in `lib/store.ts`
2. Add theme colors in Tailwind config
3. Add theme styles in `app/globals.css`
4. Add theme button in `components/Navigation.tsx`

---

## Performance Optimization

### Images
- Use WebP format
- Compress before uploading
- Use Next.js Image component

### Code Splitting
- Already configured via Next.js dynamic imports
- Add more dynamic imports for heavy components

### Fonts
- Use system fonts for better performance
- Or optimize web fonts with `next/font`

---

## Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### TypeScript errors
```bash
npm run build
# Fix any type errors shown
```

### 3D Universe not loading
- Check console for WebGL errors
- Try different browser
- Disable browser extensions

### Prisma errors
```bash
npx prisma generate
npx prisma db push
```

---

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers
- ⚠️ IE11 (not supported)

---

## Need Help?

- Check the [main README](README.md)
- Review code comments
- Check Next.js documentation
- Open an issue on GitHub

---

## Next Steps

After setup:
1. ✅ Test all theme modes
2. ✅ Try terminal commands
3. ✅ Test on mobile
4. ✅ Check performance with Lighthouse
5. ✅ Share with friends!

---

**Happy coding! 🚀**

