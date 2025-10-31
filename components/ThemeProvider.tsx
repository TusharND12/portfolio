'use client';

import { useThemeStore } from '@/lib/store';
import { useEffect } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mode = useThemeStore((state) => state.mode);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', mode);
    
    // Apply theme-specific classes
    root.classList.remove('theme-universe', 'theme-terminal', 'theme-cyberpunk', 'theme-professional');
    root.classList.add(`theme-${mode}`);
  }, [mode]);

  return <>{children}</>;
}

