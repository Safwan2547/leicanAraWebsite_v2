import React, { useEffect, useRef } from 'react';
import Intro from './HomePage/Intro';
import LandingPage from './HomePage/landing';
import Footer from '../Modules/Footer';
import ProjectGrid from '../Pages/HomePage/ProjectGrid';
import projects from './ProjectPage/Projects';
import { float } from '../Modules/floater';
import Watcher from '../Modules/Watcher';
import CallToAction from './HomePage/CallToAction';
import Capabilities from './HomePage/Capabilities';
import Introductory from './HomePage/Introductory';
import MouseParallax from '../Modules/mouseParallax';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import NavMenu from '../Modules/navMenu';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import LocomotiveScroll from 'locomotive-scroll';

import { timeline } from 'motion';

function HomePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    let scroll = null;

    const initScroll = () => {
      scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        // Add any other Locomotive Scroll options here
      });
    };
 

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);
  

  return (
    <div data-scroll-container ref={containerRef}
    className='   bg-white'>

            <MouseParallax/>


       
            
            <LandingPage  />      
            <Introductory/>
           
        <ProjectGrid projects={projects} />

        {/* <Capabilities/> */}
        <CallToAction />
        
        <div className='buttonC cursor-none textC '>
        </div>
      
    </div>
  );
}

export default HomePage;
