import React, { useEffect } from "react";
import AOS from 'aos';
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import 'aos/dist/aos.css';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
