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

function HomePage() {

  return (
    <div  className='  bg-white'>
        <LandingPage  />
        <ProjectGrid projects={projects} />
        <CallToAction />
        
      
    </div>
  );
}

export default HomePage;
