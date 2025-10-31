# ⚡ Quick Reference

## 🚀 Getting Started
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
```

## 📝 Key Files to Edit

| File | Purpose |
|------|---------|
| `lib/data.ts` | Your personal info, projects, skills, experience |
| `tailwind.config.ts` | Colors, themes, animations |
| `app/globals.css` | Custom styles and animations |
| `.env` | Environment variables (API keys, etc.) |

## 🎨 Quick Customizations

### Change Your Info
Edit `lib/data.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  // ...
};
```

### Add a Project
```typescript
projects: [
  {
    id: "project-1",
    title: "Project Name",
    description: "Description",
    technologies: ["Tech", "Stack"],
    github: "URL",
    live: "URL",
    featured: true,
    color: "#ff006e",
  },
]
```

### Change Colors
Edit `tailwind.config.ts`:
```typescript
cyber: {
  pink: '#ff006e',
  purple: '#8338ec',
  blue: '#3a86ff',
  // ...
}
```

## 💻 Terminal Commands

Try these in the terminal interface:
- `help` - Show commands
- `about` - About you
- `skills` - Your skills
- `projects` - Your projects
- `contact` - Contact info
- `clear` - Clear screen
- `matrix` - Easter egg!

## 🎯 Component Structure

```
app/
├── api/              # API endpoints
│   ├── contact/      # Contact form
│   ├── analytics/    # Analytics
│   └── chat/         # AI chat
├── layout.tsx        # Root layout
└── page.tsx          # Home page

components/
├── About.tsx         # About section
├── ChatBot.tsx       # AI assistant
├── Contact.tsx       # Contact form
├── Hero.tsx          # Hero section
├── Navigation.tsx    # Nav bar
├── Projects.tsx      # Projects
├── Skills.tsx        # Skills
├── Terminal.tsx      # Terminal
├── ThemeProvider.tsx # Theme context
└── Universe.tsx      # 3D space
```

## 🎨 Theme Modes

| Mode | Description | Key Feature |
|------|-------------|-------------|
| Universe | 3D space | Interactive planets |
| Terminal | CLI interface | Command system |
| Cyberpunk | Neon aesthetic | Scan lines |
| Professional | Clean design | Minimal |

Switch themes: Click theme icons in navigation

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Tablets |
| `md` | 768px | Small laptops |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

## 🎭 Animation Classes

```css
.animate-float        /* Floating animation */
.animate-pulse-slow   /* Slow pulse */
.animate-glow         /* Glow effect */
.gradient-text        /* Gradient text */
.glass                /* Glassmorphism */
.cyber-glow          /* Neon glow */
```

## 🔧 Utility Functions

**lib/utils.ts:**
- `cn()` - Merge classnames
- `parseCommand()` - Parse terminal input
- `randomInRange()` - Random number
- `debounce()` - Debounce function

**lib/store.ts:**
- `useThemeStore` - Theme state
- `useNavigationStore` - Navigation state
- `useAchievementStore` - Achievements

## 📦 Main Dependencies

| Package | Purpose |
|---------|---------|
| `next` | Framework |
| `react` | UI library |
| `typescript` | Type safety |
| `tailwindcss` | Styling |
| `framer-motion` | Animations |
| `@react-three/fiber` | 3D graphics |
| `zustand` | State management |
| `prisma` | Database ORM |

## 🐛 Common Issues

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
```

### Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### 3D not rendering
- Check browser console
- Enable WebGL
- Try different browser

### Build errors
```bash
npm run build
# Fix TypeScript errors shown
```

## 🚀 Deployment Checklist

- [ ] Update `lib/data.ts` with your info
- [ ] Add your projects
- [ ] Test all features
- [ ] Add environment variables
- [ ] Push to GitHub
- [ ] Deploy on Vercel
- [ ] Test production build
- [ ] Add custom domain (optional)

## 📚 Documentation

- [README.md](README.md) - Main documentation
- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Detailed setup
- [CUSTOMIZATION.md](CUSTOMIZATION.md) - Customization guide
- [FEATURES.md](FEATURES.md) - Feature overview
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide

## 🆘 Need Help?

1. Check the relevant .md file
2. Search issues on GitHub
3. Check Next.js docs
4. Check React Three Fiber docs

## 🎯 Pro Tips

- Use `cmd/ctrl + k` to open search
- Browser DevTools for debugging
- Lighthouse for performance
- Git commit often
- Test on mobile

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

---

**Keep this file handy for quick reference! 📌**

