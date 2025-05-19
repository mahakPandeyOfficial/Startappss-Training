// ThemeToggle.jsx
import React from 'react';
import { useTheme } from './ThemeContext';    //// Step 1. Import the useTheme hook

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();    // Step 2. Use the useTheme hook to get the current theme and toggle function

  return (
    <button onClick={toggleTheme} style={{ marginLeft: '20px' }}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode      {/* Step 3. Button to toggle theme */}
    </button>
  );
}

export default ThemeToggle;
