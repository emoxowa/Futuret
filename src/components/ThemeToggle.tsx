import React from 'react';
import { Moon, Sun } from 'lucide-react';

export type Theme = 'light' | 'dark';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="relative w-14 h-7 rounded-full bg-muted hover:bg-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label="Переключить тему"
    >
      <span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-primary shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {theme === 'dark' ? (
          <Moon className="w-4 h-4 text-primary-foreground" />
        ) : (
          <Sun className="w-4 h-4 text-primary-foreground" />
        )}
      </span>
    </button>
  );
}
