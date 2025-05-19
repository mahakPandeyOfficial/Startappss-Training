// ThemeContext.jsx
import React, { createContext, useState, useContext } from 'react';

//Step 1. Create context
const ThemeContext = createContext();

// Step 2. Custom hook (for easier access) : it is optional
// This is a custom hook that allows components to easily access the theme context.

export const useTheme = () => useContext(ThemeContext);

//Step 3. Theme Provider defined here
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light')); // toggle between light and dark themes
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    // Step 4. Provide the context to children
    <ThemeContext.Provider value={value}>
      <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}> {/*//Conditional className based on theme*/}
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
