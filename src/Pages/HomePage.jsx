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

import { timeline } from 'motion';

function HomePage() {
  

  return (
    <div  className='   bg-white'>

            <MouseParallax/>


       
            
            <LandingPage  />      
            <Introductory/>
           
        <ProjectGrid projects={projects} />

        <Capabilities/>
        <CallToAction />
        
        <div className='buttonC cursor-none textC '>
        </div>
      
    </div>
  );
}

export default HomePage;
