# 🌌 Developer Universe Portfolio

A next-level full-stack developer portfolio featuring 3D interactive universe, terminal interface, multiple themes, and cutting-edge web technologies.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-r166-black?style=for-the-badge&logo=three.js)

## ✨ Features

### 🎨 Multiple Theme Modes
- **Universe Mode**: Navigate through a 3D space where projects are planets
- **Terminal Mode**: Classic command-line interface for power users
- **Cyberpunk Mode**: Neon-lit, futuristic aesthetic with scan lines
- **Professional Mode**: Clean, minimalist design for traditional viewing

### 🚀 Interactive 3D Universe
- Real-time 3D rendered solar system using React Three Fiber
- Each project represented as an explorable planet
- Smooth camera controls and orbital mechanics
- Particle effects and dynamic lighting

### 💻 Terminal Interface
- Fully functional command-line interface
- Unix-like commands (ls, cd, cat, help, etc.)
- Command history navigation
- Easter eggs for curious explorers

### 🎮 Gamification
- Achievement system
- Hidden easter eggs
- Interactive challenges
- Progress tracking

### 📊 Advanced Features
- Real-time analytics tracking
- Contact form with validation
- AI chat assistant (configurable)
- Responsive design
- Performance optimized

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Three Fiber** - 3D graphics
- **@react-three/drei** - 3D helpers
- **Zustand** - State management

### Backend
- **Next.js API Routes** - Serverless functions
- **Prisma** - Database ORM
- **PostgreSQL** - Database

### Optional Integrations
- **OpenAI API** - AI chat assistant
- **Google Analytics** - Visitor tracking
- **Email service** - Contact form notifications

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database (optional for full features)
- OpenAI API key (optional for AI chat)

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd developer-universe-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"
OPENAI_API_KEY="your_openai_api_key_here"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

4. **Set up database (optional)**
```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### 1. Personal Information
Edit `lib/data.ts` to customize your portfolio content:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Full-Stack Developer",
  tagline: "Your tagline here",
  email: "your.email@example.com",
  // ... more fields
};
```

### 2. Projects
Add your projects in `lib/data.ts`:

```typescript
export const projects = [
  {
    id: "project-1",
    title: "Project Name",
    description: "Project description",
    technologies: ["Next.js", "React", "TypeScript"],
    github: "https://github.com/...",
    live: "https://...",
    featured: true,
    color: "#ff006e",
  },
  // Add more projects
];
```

### 3. Skills
Update your skills in `lib/data.ts`:

```typescript
export const skills = {
  frontend: [
    { name: "React", level: 95, icon: "⚛️" },
    // Add more skills
  ],
  // ...
};
```

### 4. Experience
Add your work experience in `lib/data.ts`:

```typescript
export const experiences = [
  {
    title: "Job Title",
    company: "Company Name",
    period: "2022 - Present",
    description: "Job description",
    achievements: ["Achievement 1", "Achievement 2"],
  },
  // Add more experiences
];
```

### 5. Styling & Themes
Customize colors and animations in `tailwind.config.ts` and `app/globals.css`

## 🎯 Terminal Commands

Try these commands in the terminal interface:

- `help` - Show available commands
- `about` - Display information about you
- `skills` - List your skills
- `projects` - Show all projects
- `contact` - Display contact information
- `clear` - Clear terminal
- `whoami` - Display your name
- `matrix` - Easter egg 👀
- `theme` - Theme information

## 📦 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form endpoint
│   │   ├── analytics/     # Analytics endpoint
│   │   ├── chat/          # AI chat endpoint
│   │   └── achievements/  # Achievements endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form
│   ├── Hero.tsx           # Hero section
│   ├── Navigation.tsx     # Navigation bar
│   ├── Projects.tsx       # Projects showcase
│   ├── Skills.tsx         # Skills display
│   ├── Terminal.tsx       # Terminal interface
│   ├── ThemeProvider.tsx  # Theme context
│   └── Universe.tsx       # 3D Universe
├── lib/                   # Utilities and data
│   ├── data.ts           # Portfolio data
│   ├── store.ts          # Zustand stores
│   └── utils.ts          # Helper functions
├── prisma/               # Database schema
│   └── schema.prisma     # Prisma schema
└── public/               # Static assets
```

## 🎨 Features in Detail

### 3D Universe Mode
- Interactive 3D space navigation
- Projects displayed as planets
- Real-time rendering with Three.js
- Orbital mechanics simulation
- Dynamic lighting and shadows

### Terminal Interface
- Full command-line simulation
- Command history (↑/↓ arrows)
- Auto-completion support
- Custom commands
- Easter eggs and secrets

### Theme System
- Hot-swappable themes
- Persistent theme selection
- CSS custom properties
- Smooth transitions
- Mobile responsive

### Performance
- Code splitting
- Dynamic imports
- Image optimization
- Lazy loading
- SSR/SSG support

## 🚢 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms
- **Netlify**: Configure build command as `npm run build`
- **AWS Amplify**: Use Next.js SSR preset
- **Docker**: Use the included Dockerfile (create one if needed)

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you create something cool, I'd love to see it.

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 📧 Contact

Questions or feedback? Reach out!

---

Made with 💙 by a developer who loves building cool stuff

**⭐ If you like this project, give it a star!**

