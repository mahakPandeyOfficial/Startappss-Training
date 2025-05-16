import React from "react";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import keyboard from "./assets/keyboard.png"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar />
      <BlogList />
    </div>
  },
  {
    path: "/post",
    element: <div>
      <Navbar />
      <Post />
    </div>
  },
  {
    path: "/about",
    element: <div>
      <Navbar />
      <About />
      </div>
  },
  {
    path: "/contact",
    element: <div>
      <Navbar />
      <Contact />
      </div>
  },
])


const App = () => {

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#670D2F] to-[#EF88AD] text-[#fef6e4]">
      {/* ✅ Keyboard background image */}
      <img
        src={keyboard}
        alt="Keyboard Background"
        className="pointer-events-none fixed bottom-38 right-0 w-[600px] opacity-20 z-0 object-contain"
      />

      {/* ✅ Page content layered above */}
      <div className="relative z-10">
       <RouterProvider router={router}/>
      </div>
    </div>
  );
};

export default App;
