# 🎨 Customization Guide

This guide will help you make the portfolio truly yours!

## 📝 Content Customization

### 1. Personal Information

Edit `lib/data.ts`:

```typescript
export const personalInfo = {
  name: "John Doe",                    // Your full name
  title: "Full-Stack Developer",       // Your job title
  tagline: "Your unique tagline",      // Catchy phrase
  email: "john@example.com",           // Contact email
  github: "https://github.com/john",   // GitHub profile
  linkedin: "https://linkedin.com/in/john", // LinkedIn
  twitter: "https://twitter.com/john", // Twitter/X
  location: "San Francisco, CA",       // Your location
};
```

### 2. Add Your Projects

```typescript
export const projects = [
  {
    id: "unique-id",              // Unique identifier
    title: "Project Name",        // Project title
    description: "Brief desc",    // Short description
    technologies: [               // Tech stack
      "Next.js", 
      "TypeScript", 
      "PostgreSQL"
    ],
    image: "/projects/img.jpg",   // Image path (optional)
    github: "https://github...",  // GitHub repo URL
    live: "https://live.com",     // Live demo URL
    featured: true,               // Show as featured
    color: "#ff006e",            // Planet/card color
  },
  // Add more projects...
];
```

**Color Suggestions:**
- Blue: `#3a86ff` - Tech/SaaS projects
- Purple: `#8338ec` - Creative projects
- Pink: `#ff006e` - Social/Community
- Green: `#06ffa5` - Finance/Health
- Yellow: `#ffbe0b` - Education/Tools

### 3. Skills Configuration

```typescript
export const skills = {
  frontend: [
    { 
      name: "React",        // Skill name
      level: 95,           // 0-100 proficiency
      icon: "⚛️"          // Emoji icon
    },
    // Add more...
  ],
  backend: [
    { name: "Node.js", level: 90, icon: "🟢" },
  ],
  tools: [
    { name: "Git", level: 93, icon: "📦" },
  ],
};
```

**Icon Suggestions:**
- Frontend: ⚛️ 🎨 📱 🖼️ 🎯
- Backend: 🟢 🐍 ☕ 🦀 🔷
- Databases: 🐘 🍃 🔥 ⚡ 🗄️
- Tools: 📦 🐳 ☁️ 🔧 🛠️

### 4. Work Experience

```typescript
export const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "What you do/did",
    achievements: [
      "Reduced load time by 60%",
      "Led team of 5 developers",
      "Built X feature used by Y users",
    ],
  },
  // Add more...
];
```

---

## 🎨 Visual Customization

### Change Color Scheme

Edit `tailwind.config.ts`:

```typescript
colors: {
  cyber: {
    pink: '#ff006e',     // Change these
    purple: '#8338ec',
    blue: '#3a86ff',
    green: '#06ffa5',
    yellow: '#ffbe0b',
  },
}
```

**Pre-made Color Schemes:**

**Ocean Theme:**
```typescript
cyber: {
  pink: '#0077be',
  purple: '#00b4d8',
  blue: '#90e0ef',
  green: '#48cae4',
  yellow: '#00b4d8',
}
```

**Sunset Theme:**
```typescript
cyber: {
  pink: '#ff006e',
  purple: '#fb5607',
  blue: '#ffbe0b',
  green: '#ff006e',
  yellow: '#8338ec',
}
```

**Forest Theme:**
```typescript
cyber: {
  pink: '#2d6a4f',
  purple: '#40916c',
  blue: '#52b788',
  green: '#74c69d',
  yellow: '#95d5b2',
}
```

### Custom Animations

Add to `app/globals.css`:

```css
@keyframes your-animation {
  0% { /* start state */ }
  100% { /* end state */ }
}

.your-class {
  animation: your-animation 2s ease-in-out infinite;
}
```

**Example - Pulse Glow:**
```css
@keyframes pulse-glow {
  0%, 100% { 
    box-shadow: 0 0 5px rgba(58, 134, 255, 0.5);
  }
  50% { 
    box-shadow: 0 0 20px rgba(58, 134, 255, 1);
  }
}
```

### Modify Fonts

Add to `app/layout.tsx`:

```typescript
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const mono = JetBrains_Mono({ subsets: ['latin'] });
```

Then use in components:
```typescript
<div className={inter.className}>Your content</div>
```

---

## 🌌 3D Universe Customization

### Change Planet Appearance

Edit `components/Universe.tsx`:

**Planet Size:**
```typescript
size={1 + Math.random() * 0.5}  // Change multiplier
```

**Planet Distribution:**
```typescript
const radius = Math.sqrt(1 - y * y);
const x = Math.cos(theta) * radius * 15;  // Change 15
const z = Math.sin(theta) * radius * 15;
```

**Rotation Speed:**
```typescript
meshRef.current.rotation.y += 0.003;  // Change speed
```

**Auto-rotate Speed:**
```typescript
autoRotateSpeed={0.5}  // Change in Scene component
```

### Add More Space Elements

**Add Asteroids:**
```typescript
function Asteroid({ position }) {
  return (
    <mesh position={position}>
      <dodecahedronGeometry args={[0.3]} />
      <meshStandardMaterial color="#888888" />
    </mesh>
  );
}
```

**Add Rings to Planets:**
```typescript
<mesh rotation={[Math.PI / 2, 0, 0]}>
  <ringGeometry args={[size + 0.5, size + 0.7, 64]} />
  <meshBasicMaterial 
    color={color} 
    transparent 
    opacity={0.4} 
    side={THREE.DoubleSide} 
  />
</mesh>
```

---

## 💻 Terminal Customization

### Add Custom Commands

Edit `components/Terminal.tsx`:

```typescript
case 'yourcommand':
  if (args[0]) {
    output = `Your response with ${args[0]}`;
  } else {
    output = 'Usage: yourcommand <arg>';
  }
  break;
```

### Change Terminal Colors

Edit `tailwind.config.ts`:

```typescript
terminal: {
  bg: '#0c0c0c',      // Background
  text: '#00ff00',    // Text color
  prompt: '#00aa00',  // Prompt color
}
```

### Add Command Aliases

```typescript
case 'll':
case 'list':
case 'ls':
  // Same code
  break;
```

---

## 🎯 Adding New Sections

### Create New Component

1. Create `components/YourSection.tsx`:

```typescript
'use client';
import { motion } from 'framer-motion';

export default function YourSection() {
  return (
    <div className="min-h-screen py-20 px-4">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold gradient-text"
      >
        Your Section
      </motion.h2>
      {/* Your content */}
    </div>
  );
}
```

2. Add to `app/page.tsx`:

```typescript
const YourSection = dynamic(() => import('@/components/YourSection'));

// In JSX:
<section id="yoursection">
  <YourSection />
</section>
```

3. Add to navigation in `components/Navigation.tsx`:

```typescript
<a href="#yoursection">Your Section</a>
```

---

## 🎨 Theme Mode Customization

### Create New Theme Mode

1. Add to `lib/store.ts`:

```typescript
export type ThemeMode = 'universe' | 'terminal' | 'cyberpunk' | 'professional' | 'yourtheme';
```

2. Add theme button in `components/Navigation.tsx`:

```typescript
{ 
  mode: 'yourtheme', 
  icon: <YourIcon size={20} />, 
  label: 'Your Theme' 
}
```

3. Add theme styles in `app/globals.css`:

```css
[data-theme="yourtheme"] {
  /* Your theme styles */
}
```

---

## 📱 Responsive Customization

### Custom Breakpoints

Edit `tailwind.config.ts`:

```typescript
screens: {
  'xs': '475px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
  '3xl': '1920px',
}
```

Use in components:
```typescript
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

---

## 🔌 Integration Customization

### Add Google Analytics

1. Add to `.env`:
```env
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

2. Create `lib/analytics.ts`:
```typescript
export const pageview = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
    page_path: url,
  });
};
```

### Add Email Service

Edit `app/api/contact/route.ts`:

```typescript
// Example with SendGrid
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const msg = {
  to: personalInfo.email,
  from: 'noreply@yourdomain.com',
  subject: `Contact from ${name}`,
  text: message,
};

await sgMail.send(msg);
```

---

## 🎮 Gamification Customization

### Add New Achievements

Edit `lib/data.ts`:

```typescript
{
  id: "achievement-id",
  title: "Achievement Name",
  description: "How to unlock",
  icon: "🏆",
  unlocked: false,
}
```

### Track Achievement

```typescript
// In your component
import { useAchievementStore } from '@/lib/store';

const { unlockAchievement } = useAchievementStore();

// When condition met:
unlockAchievement('achievement-id');
```

---

## 💡 Pro Tips

1. **Test After Changes**: Always run `npm run dev` to see changes
2. **Use Browser DevTools**: Inspect elements to fine-tune styles
3. **Keep Backups**: Git commit before major changes
4. **Mobile First**: Design for mobile, then scale up
5. **Performance**: Test with Lighthouse after customizations

---

## 🐛 Common Customization Issues

**Colors not changing?**
- Clear browser cache
- Restart dev server
- Check Tailwind purge settings

**Animations not working?**
- Check Framer Motion syntax
- Verify component is client-side ('use client')
- Check browser console for errors

**3D not rendering?**
- WebGL must be supported
- Check for console errors
- Try disabling browser extensions

---

**Need more help? Check the [Features Guide](FEATURES.md)!**

