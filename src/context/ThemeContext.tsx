import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Theme = { id: number; name: 'light' | 'dark' | 'blue' | 'sunny' };

interface ThemeContextType {
  theme: string;
  themeId: number;
  toggleTheme: () => void;
  setThemeById: (index: number) => void;
}

const themes: Theme[] = [
  { id: 0, name: 'light' },
  { id: 1, name: 'dark' },
  { id: 2, name: 'blue' },
  { id: 3, name: 'sunny' },
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(() => {
    const savedThemeIndex = localStorage.getItem('themeIndex');
    if (savedThemeIndex) {
      return parseInt(savedThemeIndex);
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 1 : 0;
  });

  useEffect(() => {
    localStorage.setItem('themeIndex', themeIndex.toString());
  }, [themeIndex]);

  const toggleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  const setThemeById = (index: number) => {
    if (index >= 0 && index < themes.length) {
      setThemeIndex(index);
    }
  };

  const theme = themes[themeIndex].name;
  const themeId = themes[themeIndex].id;

  return (
    <ThemeContext.Provider value={{ theme, themeId, toggleTheme, setThemeById }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};