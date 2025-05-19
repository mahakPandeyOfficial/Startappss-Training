// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>   {/* Step 1. Wrap the app with ThemeProvider*/}
      <BrowserRouter>   {/*// Step 2. Use BrowserRouter for routing*/}
        <nav>
          <Link to="/">Page 1</Link> | <Link to="/page2">Page 2</Link>   {/* Step 3. Create navigation links */}
          {/* Step 4. Add ThemeToggle button */}
          {/* This button will toggle between light and dark themes */}
          {/* It uses the ThemeToggle component defined in ThemeToggle.jsx */}
          <ThemeToggle />
        </nav>


{/* Step 5. Define routes for the app */}
        {/* The Routes component contains all the routes for the app */}
        {/* Each Route component defines a path and the corresponding component to render */}
        <Routes>
          <Route path="/" element={<Page1 />} />   //for page 1
          <Route path="/page2" element={<Page2 />} />    //for page 2
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;




//Context Api ke steps are as following:

// Step 1. Create context
//Step 2. Wrap all the components within the context provider
// Step 3: Pass the value to the provider
// Step 4: Use the context in the components or consumer ke andar jake useContext hook ko consume karna hai! { Here we are using the useTheme hook inside the ThemeContext file for togggling the theme. }
