import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
// import Healthcare from "./pages/Healthcare";
import {
  Healthcare,
  HealthcareOne,
  HealthcareTwo,
  HealthcareThree,
} from "./pages/Healthcare";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/healthcare/reports1" exact component={HealthcareOne} />
        <Route path="/healthcare/reports2" exact component={HealthcareTwo} />
        <Route path="/healthcare/reports3" exact component={HealthcareThree} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
