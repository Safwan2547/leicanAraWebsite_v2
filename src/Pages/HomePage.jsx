import React, { useEffect, useRef } from 'react';
import Intro from './HomePage/Intro';
import LandingPage from './HomePage/landing';
import AboutSection from './HomePage/About';
import ProjectsSection from './Projects/Projects';
import LocomotiveScroll from 'locomotive-scroll';
import Footer from '../Modules/Footer';
import mouseParallax from '../Modules/mouseParallax';
import ProjectGrid from '../Pages/HomePage/ProjectGrid';
import projects from './Projects/Projects';
import { float } from '../Modules/floater';
import Watcher from '../Modules/Watcher';
import CallToAction from './HomePage/CallToAction';
import { Parallax } from '@react-spring/parallax';
import Marquee from 'react-fast-marquee';

import { timeline } from 'motion';

function HomePage() {
  

  return (
    <div  className='  bg-white'>

      <Watcher/>
      
        <LandingPage  />
        <ProjectGrid projects={projects} />
        <CallToAction />
        <div className='buttonC cursor-none textC '>
        </div>
      
    </div>
  );
}

export default HomePage;
