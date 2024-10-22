'use client';  // to use AOS
import Link from "next/link"
import Image from "next/image"
import React, { useEffect } from 'react'

import Footer from './components/Footer/Footer'
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Project from "./components/Project/Project"
import Skills from "./components/Skills/Skills"
import Contact from "./components/Contact/Contact"
import AOS from "aos"
import"aos/dist/aos.css";

const Homepage = () => {
  useEffect(() =>{
    AOS.init({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      offset:160,
      
    });
    AOS.refresh()
  }, []);
return (
  <div className="flex h-screen flex-col">
    
    
<Hero/> 
<About/>
<Project/>
<Skills/>
<Contact/>
<Footer/>
    
  
  </div>
  
);
};

export default Homepage;

      
    