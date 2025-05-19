// Page2.jsx
import React from 'react';
import { useTheme } from './ThemeContext';

function Page2() {
  const { theme } = useTheme();  //Same as Page 1 , use the useTheme hook to get the curremt theme

  return (
    <div>
      <h1>Page 2</h1>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default Page2;
