import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from './components/Contact';
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/about" element= {<About />} />
        <Route exact path="/contact" element= {<Contact />} />
        <Route exact path="/cart" element= {<Cart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<h1 className="text-center">404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
