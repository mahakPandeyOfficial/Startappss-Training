// Page1.jsx
import React from 'react';
import { useTheme } from './ThemeContext';

function Page1() {
  const { theme } = useTheme();   // Step 1. Use the useTheme hook to get the current theme

  return (
    <div>
      <h1>Page 1</h1>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default Page1;
