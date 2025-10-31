# 📁 Project Structure

## Overview

```
portfolio/
├── app/                    # Next.js App Router
├── components/            # React components
├── lib/                   # Utilities & data
├── prisma/               # Database schema
├── public/               # Static assets
├── scripts/              # Helper scripts
└── [config files]        # Configuration
```

## Detailed Structure

### 📱 app/ (Next.js App Directory)

```
app/
├── api/                  # API Routes (Backend)
│   ├── achievements/
│   │   └── route.ts     # Achievement tracking
│   ├── analytics/
│   │   └── route.ts     # Analytics endpoints
│   ├── chat/
│   │   └── route.ts     # AI chat assistant
│   └── contact/
│       └── route.ts     # Contact form handler
│
├── favicon.ico          # Site favicon
├── globals.css          # Global styles
├── layout.tsx           # Root layout (wraps all pages)
└── page.tsx            # Home page
```

**Key Points:**
- `layout.tsx` - Wraps all pages, includes Navigation and ThemeProvider
- `page.tsx` - Main portfolio page with all sections
- `globals.css` - Contains custom animations and utility classes
- `api/` - Serverless API functions (automatically deployed)

### 🎨 components/

```
components/
├── About.tsx            # About section with timeline
├── ChatBot.tsx          # AI chat interface
├── Contact.tsx          # Contact form
├── Hero.tsx             # Hero/landing section
├── LoadingScreen.tsx    # Initial loading animation
├── Navigation.tsx       # Top navigation bar
├── Projects.tsx         # Projects showcase grid
├── Skills.tsx           # Skills with progress bars
├── Terminal.tsx         # Terminal interface
├── ThemeProvider.tsx    # Theme context provider
└── Universe.tsx         # 3D space visualization
```

**Component Types:**
- **Page Sections**: Hero, About, Projects, Skills, Contact
- **Interactive**: Terminal, ChatBot, Universe (3D)
- **Layout**: Navigation, ThemeProvider
- **Utility**: LoadingScreen

### 📚 lib/

```
lib/
├── data.ts             # Portfolio data (EDIT THIS!)
├── store.ts            # Zustand state management
└── utils.ts            # Helper functions
```

**lib/data.ts** - Single source of truth for:
- Personal information
- Projects list
- Skills & proficiency levels
- Work experience
- Achievements
- Terminal commands

**lib/store.ts** - Global state:
- Theme mode (universe/terminal/cyberpunk/professional)
- Terminal open/closed
- Current planet selection
- Achievement unlocks

**lib/utils.ts** - Utility functions:
- `cn()` - Merge CSS classes
- `parseCommand()` - Parse terminal input
- `debounce()` - Debounce utility
- Math helpers (lerp, clamp, randomInRange)

### 🗄️ prisma/

```
prisma/
└── schema.prisma       # Database schema
```

**Models:**
- `Contact` - Contact form submissions
- `Analytics` - Event tracking
- `Achievement` - User achievements
- `Visitor` - Visitor tracking

### 🖼️ public/

```
public/
└── projects/           # Project images
    ├── project1.jpg
    ├── project2.jpg
    └── ...
```

Add your project images here and reference them in `lib/data.ts`

### 🔧 scripts/

```
scripts/
└── setup.js            # Quick setup script
```

Run with: `node scripts/setup.js`

### ⚙️ Configuration Files

```
Root/
├── .env.example        # Environment variables template
├── .eslintrc.json      # ESLint configuration
├── .gitignore          # Git ignore rules
├── next.config.mjs     # Next.js configuration
├── package.json        # Dependencies & scripts
├── postcss.config.mjs  # PostCSS configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

### 📖 Documentation Files

```
Root/
├── README.md           # Main documentation
├── SETUP_GUIDE.md      # Setup instructions
├── CUSTOMIZATION.md    # Customization guide
├── FEATURES.md         # Feature overview
├── DEPLOYMENT.md       # Deployment guide
├── QUICK_REFERENCE.md  # Quick reference
├── PROJECT_STRUCTURE.md # This file
└── LICENSE             # MIT License
```

## File Purposes

### Core Application

| File | Purpose | Edit? |
|------|---------|-------|
| `app/page.tsx` | Main page structure | Rarely |
| `app/layout.tsx` | Root layout & metadata | For SEO |
| `app/globals.css` | Global styles & animations | For styling |
| `components/*.tsx` | UI components | To add features |
| `lib/data.ts` | **Your portfolio data** | **YES!** |
| `lib/store.ts` | Global state | Advanced |
| `lib/utils.ts` | Helper functions | Advanced |

### Configuration

| File | Purpose | Edit? |
|------|---------|-------|
| `tailwind.config.ts` | Tailwind setup | For colors |
| `tsconfig.json` | TypeScript setup | Rarely |
| `next.config.mjs` | Next.js settings | Advanced |
| `.env` | Environment variables | For secrets |

### API Routes

| File | Purpose | Edit? |
|------|---------|-------|
| `app/api/contact/route.ts` | Handle contact form | To add email |
| `app/api/chat/route.ts` | AI chat responses | To add AI |
| `app/api/analytics/route.ts` | Track events | Advanced |
| `app/api/achievements/route.ts` | Track achievements | Advanced |

## Data Flow

### 1. Content Flow
```
lib/data.ts → Components → Rendered UI
```

### 2. Theme Flow
```
Navigation (theme button) → useThemeStore → ThemeProvider → Update CSS
```

### 3. Terminal Flow
```
User Input → Terminal.tsx → parseCommand() → Execute → Output
```

### 4. Contact Form Flow
```
Contact.tsx → POST /api/contact → (Optional) Database → Email
```

### 5. 3D Universe Flow
```
lib/data.ts projects → Universe.tsx → React Three Fiber → WebGL
```

## Import Aliases

The project uses `@/` alias for clean imports:

```typescript
import { personalInfo } from '@/lib/data';
import Hero from '@/components/Hero';
```

Maps to project root, configured in `tsconfig.json`:
```json
{
  "paths": {
    "@/*": ["./*"]
  }
}
```

## Adding New Features

### 1. New Section
```typescript
// 1. Create component
components/NewSection.tsx

// 2. Import in app/page.tsx
const NewSection = dynamic(() => import('@/components/NewSection'));

// 3. Add to JSX
<section id="newsection">
  <NewSection />
</section>

// 4. Add to navigation
// Edit components/Navigation.tsx
```

### 2. New API Endpoint
```typescript
// Create file
app/api/newroute/route.ts

// Export handlers
export async function GET(request) { }
export async function POST(request) { }

// Use in components
fetch('/api/newroute', { method: 'POST' })
```

### 3. New Data Type
```typescript
// 1. Add to lib/data.ts
export const newData = [ ];

// 2. Import in component
import { newData } from '@/lib/data';

// 3. Use in JSX
{newData.map(item => <div key={item.id}>...</div>)}
```

## Build Output

After `npm run build`:

```
.next/
├── cache/              # Build cache
├── server/            # Server-side code
├── static/            # Static assets
└── ...
```

Don't commit `.next/` - it's in `.gitignore`

## Deployment Structure

On Vercel/Netlify:
```
Production/
├── /                  # Your domain root
├── /api/*            # API endpoints
├── /_next/*          # Next.js assets
└── /projects/*       # Static images
```

## Best Practices

### File Organization
- ✅ One component per file
- ✅ Group related files
- ✅ Use meaningful names
- ✅ Keep components small

### Component Structure
```typescript
// 1. Imports
import { ... } from '...';

// 2. Types/Interfaces (if needed)
interface Props { }

// 3. Component
export default function Component() {
  // 4. Hooks
  const [state, setState] = useState();
  
  // 5. Functions
  const handleClick = () => { };
  
  // 6. Effects
  useEffect(() => { }, []);
  
  // 7. Render
  return <div>...</div>;
}
```

### Code Style
- Use TypeScript
- Use 'use client' for client components
- Destructure props
- Use semantic HTML
- Add accessibility attributes

## Size Optimization

Typical sizes:
- **Total**: ~50MB (with node_modules)
- **Build**: ~5-10MB
- **Production**: ~1-2MB (served)

Large dependencies:
- Three.js (~600KB)
- React Three Fiber
- Framer Motion

Optimization:
- Dynamic imports used
- Code splitting enabled
- Tree shaking active

---

**Understand the structure, build faster! 🚀**

