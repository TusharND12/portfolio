'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Terminal from '@/components/Terminal';
import { useThemeStore } from '@/lib/store';

const EnhancedHero = dynamic(() => import('@/components/EnhancedHero'), { ssr: false });

// Dynamically import 3D components
const Universe = dynamic(() => import('@/components/Universe'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-screen">Loading Universe...</div>,
});

const EnhancedProjects = dynamic(() => import('@/components/EnhancedProjects'), { ssr: false });
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const UltimateContact = dynamic(() => import('@/components/UltimateContact'), { ssr: false });
const ChatBot = dynamic(() => import('@/components/ChatBot'), { ssr: false });
const GitHubStats = dynamic(() => import('@/components/GitHubStats'), { ssr: false });
const CursorTrail = dynamic(() => import('@/components/CursorTrail'), { ssr: false });
const ReadingProgress = dynamic(() => import('@/components/ReadingProgress'), { ssr: false });
const BackToTop = dynamic(() => import('@/components/BackToTop'), { ssr: false });
const MiniGame = dynamic(() => import('@/components/MiniGame'), { ssr: false });
const KonamiCode = dynamic(() => import('@/components/KonamiCode'), { ssr: false });
const CodePlayground = dynamic(() => import('@/components/CodePlayground'), { ssr: false });
const SkillTree = dynamic(() => import('@/components/SkillTree'), { ssr: false });
const NeuralBackground = dynamic(() => import('@/components/NeuralBackground'), { ssr: false });
const ServicesOffered = dynamic(() => import('@/components/ServicesOffered'), { ssr: false });
const FunFacts = dynamic(() => import('@/components/FunFacts'), { ssr: false });
const TechStack = dynamic(() => import('@/components/TechStack'), { ssr: false });
const ProcessWorkflow = dynamic(() => import('@/components/ProcessWorkflow'), { ssr: false });
const ConnectWithMe = dynamic(() => import('@/components/ConnectWithMe'), { ssr: false });
const MeshGradientBackground = dynamic(() => import('@/components/MeshGradientBackground'), { ssr: false });
const FloatingShapes = dynamic(() => import('@/components/FloatingShapes'), { ssr: false });
const BentoGrid = dynamic(() => import('@/components/BentoGrid'), { ssr: false });
const InfiniteScroll = dynamic(() => import('@/components/InfiniteScroll'), { ssr: false });
const SectionDivider = dynamic(() => import('@/components/SectionDivider'), { ssr: false });
const InteractiveResume = dynamic(() => import('@/components/InteractiveResume'), { ssr: false });
const SkillsAssessment = dynamic(() => import('@/components/SkillsAssessment'), { ssr: false });

export default function Home() {
  const mode = useThemeStore((state) => state.mode);

  return (
    <>
      {/* Hero Section */}
      <EnhancedHero />

      {/* 3D Universe Background (for universe mode) */}
      {mode === 'universe' && (
        <div className="fixed inset-0 -z-10">
          <Suspense fallback={<div>Loading...</div>}>
            <Universe />
          </Suspense>
        </div>
      )}

      {/* Main Content Sections */}
      <div className="relative z-10">
        <section id="about">
          <About />
        </section>

        <SectionDivider variant="wave" />

        {/* Interactive Resume Timeline */}
        <InteractiveResume />

        <SectionDivider variant="particles" />

        {/* Bento Grid Stats */}
        <BentoGrid />

        <SectionDivider variant="particles" />

        {/* Fun Facts */}
        <FunFacts />

        <SectionDivider variant="gradient" />

        <section id="projects">
          <EnhancedProjects />
        </section>

        <SectionDivider variant="wave" />

        <section id="skills">
          <Skills />
        </section>

        <SectionDivider variant="wave" />

        {/* Skills Assessment */}
        <SkillsAssessment />

        {/* Skill Tree */}
        <SkillTree />

        {/* Tech Stack */}
        <TechStack />

        {/* GitHub Stats */}
        <section id="github">
          <GitHubStats />
        </section>

        <SectionDivider variant="particles" />

        {/* Services */}
        <ServicesOffered />

        {/* Process */}
        <ProcessWorkflow />

        {/* Connect With Me */}
        <ConnectWithMe />

        <section id="contact">
          <UltimateContact />
        </section>
      </div>

      {/* Interactive Overlays */}
      <Terminal />
      <ChatBot />
      <MiniGame />
      <CodePlayground />
      <BackToTop />
      <ReadingProgress />
      <CursorTrail />
      <KonamiCode />

      {/* Cyberpunk Effects */}
      {mode === 'cyberpunk' && (
        <>
          <div className="fixed inset-0 pointer-events-none z-0 scanline opacity-10" />
          <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-cyber-purple/5 via-transparent to-cyber-blue/5" />
        </>
      )}

      {/* Terminal Mode Effects */}
      {mode === 'terminal' && (
        <div className="fixed inset-0 pointer-events-none z-0 scanline opacity-5" />
      )}
    </>
  );
}

