import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Podcasts from "./pages/podcasts/Podcasts";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/podcast" element={<Podcasts/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
