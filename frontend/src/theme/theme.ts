/**
 * Global Theme Configuration
 * 
 * This theme system uses HSL color values for easy manipulation and supports light/dark modes.
 * To change the primary color, simply update the values in the colors object.
 */

export const theme = {
  colors: {
    light: {
      // Primary brand color - Change this to update throughout the app
      primary: "222 89% 55%",      // Blue
      secondary: "262 83% 58%",    // Purple
      accent: "160 84% 39%",       // Green
      
      // Background colors
      background: "0 0% 100%",     // White
      surface: "210 20% 98%",      // Light gray surface
      
      // Text colors
      heading: "222 47% 11%",      // Dark blue-gray
      body: "215 16% 47%",         // Medium gray
      muted: "214 32% 91%",        // Light gray
      
      // UI elements
      border: "214 32% 91%",       // Border color
      
      // Semantic colors
      success: "160 84% 39%",      // Green
      warning: "38 92% 50%",       // Orange
      error: "0 84% 60%",          // Red
      info: "222 89% 55%",         // Blue
    },
    dark: {
      // Primary brand color - Lightened for dark mode
      primary: "222 89% 65%",
      secondary: "262 83% 68%",
      accent: "160 84% 49%",
      
      // Background colors
      background: "222 47% 11%",   // Dark blue-gray
      surface: "223 47% 15%",      // Slightly lighter
      
      // Text colors
      heading: "210 40% 98%",      // Almost white
      body: "214 32% 91%",         // Light gray
      muted: "215 25% 27%",        // Medium gray
      
      // UI elements
      border: "215 25% 27%",
      
      // Semantic colors
      success: "160 84% 49%",
      warning: "38 92% 60%",
      error: "0 84% 70%",
      info: "222 89% 65%",
    },
  },

  fontSize: {
    xs: "0.75rem",      // 12px
    sm: "0.875rem",     // 14px
    base: "1rem",       // 16px
    md: "1rem",         // 16px
    lg: "1.125rem",     // 18px
    xl: "1.25rem",      // 20px
    "2xl": "1.5rem",    // 24px
    "3xl": "1.875rem",  // 30px
    "4xl": "2.25rem",   // 36px
    "5xl": "3rem",      // 48px
    "6xl": "3.75rem",   // 60px
    "7xl": "4.5rem",    // 72px
  },

  spacing: {
    xs: "0.5rem",       // 8px
    sm: "0.75rem",      // 12px
    md: "1rem",         // 16px
    lg: "1.5rem",       // 24px
    xl: "2rem",         // 32px
    "2xl": "3rem",      // 48px
    "3xl": "4rem",      // 64px
    section: "6rem",    // 96px - Section padding
  },

  radius: {
    none: "0",
    sm: "0.375rem",     // 6px
    md: "0.5rem",       // 8px
    lg: "0.75rem",      // 12px
    xl: "1rem",         // 16px
    "2xl": "1.5rem",    // 24px
    full: "9999px",     // Fully rounded
  },

  shadow: {
    none: "none",
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.15)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.15)",
    "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  container: {
    maxWidth: "1280px",
    padding: "1rem",
  },

  // Font families
  fontFamily: {
    sans: "Inter, system-ui, -apple-system, sans-serif",
    mono: "Monaco, Courier, monospace",
  },

  // Transitions
  transition: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    base: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
  },

  // Breakpoints
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} as const;

export type Theme = typeof theme;

// Helper function to get HSL color with optional opacity
export const hslColor = (color: string, opacity?: number): string => {
  if (opacity !== undefined) {
    return `hsl(${color} / ${opacity})`;
  }
  return `hsl(${color})`;
};

export default theme;
