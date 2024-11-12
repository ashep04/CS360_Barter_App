import React, { createContext, useState, ReactNode, useContext } from 'react';
import { Colors } from '@/constants/Colors'; // Assuming your colors are imported here

// Define the shape of the theme context
type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  currentTheme: typeof Colors.light; // Type it based on your theme structure
};

// Create context with default values
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

// Create a provider component
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const currentTheme = isDarkTheme ? Colors.dark : Colors.light;

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
