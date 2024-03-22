import React,{useEffect,useState,useRef} from 'react';
import './tailwind.css';
import './index.css';
import 'tailwindcss/tailwind.css'
import { BrowserRouter as Router, Route, Routes,Link,useLocation } from 'react-router-dom';
import Cursor from './Modules/cursor';
import Navbar from './Modules/nav';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import FAQPage from './Pages/FAQPage';
import ProjectPage from './Pages/ProjectPage';
import AboutPage from './Pages/AboutPage';
import Footer from './Modules/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import { ParallaxProvider } from 'react-scroll-parallax';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'


import MouseParallax from './Modules/mouseParallax';
import NavMenu from './Modules/navMenu';



function App() {
  const containerRef=useRef(null);
  //this is the controls for the nav Menu
  const [navOpen, setNavOpen] = useState(false);
  const [animating, setAnimating] = useState(false);





  const toggleNav = (mod) => {
      if (!animating || mod === false) {
          if (mod === true) {
              setNavOpen(!navOpen);
          } else {
              setNavOpen(false);
          }
          setAnimating(true);
          setTimeout(() => setAnimating(false), 1500
          );

      }
  };
  
  
  return (
    <ParallaxProvider>
    <Router >


       <Cursor />
      <Navbar toggleNav={toggleNav} navOpen={navOpen}  />
    <div  ref={containerRef}   className=" snap-y no-scrollbar::-webkit-scrollbar  snap-mandatory sm:m-0 bg-white appearance-none    scroll-n">
      
      {/* <Intro/> */}
     

      
      <Routes >
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/AboutPage" element={<AboutPage />} />
        <Route exact path="/FAQPage" element={<FAQPage />} />
        <Route exact path="/:projectKey" element={<ProjectPage />} />



      </Routes>
      <Footer />
      
      </div>
      <NavMenu navOpen={navOpen} toggleNav={toggleNav} /> 

      


    
      

    </Router>
    </ParallaxProvider>
);
}
export default App;
