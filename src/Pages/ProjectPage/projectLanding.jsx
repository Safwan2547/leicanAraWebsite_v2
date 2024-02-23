import React from 'react';
import { useEffect } from 'react';
import { inView, animate } from 'motion';

const LandingSection = ({ projectData }) => {
  const { title, mainHeader, thumbnail2 } = projectData;

  const sectionAnimations = (target,val) => {
    animate(
      target.querySelector("img"),
      { opacity: 1,transform:`scale(${val==1?2:0})` },
      {  duration: 0.5,delay:0.2, easing:"ease-in-out" }
    );}

   


  useEffect(() => {
    inView("x ", ({ target }) => {

      sectionAnimations(target,1);
  
      //when the element leaves the viewport
  
      return ()=>{sectionAnimations(target,0);}})


  }, []);

  return (
    <div id='landing' className='w-screen  overflow-hidden'>
        <div id='landingText' className='w-full relative h-[66vh]'> 
        <div id="headerInfo" className=' flex absolute bottom-5 justify-evenly align-baseline   place-items-end border-black '>
          <h1 className=' textC text-6xl  sm:text-8xl max-w-[75vw] pl-10 text-[#141414] tracking-wider  font-satoshi-normal'>{mainHeader}</h1>
          <p className='text-2xl hidden text-black overflow-hidden textP align-baseline font-Satoshi font-light'>{title}</p>
        </div>
        
        </div>
      <div className='w-full h-full justify-center flex overflow-hidden items-center' id='thumbnail'>
        
        <img className='w-screen object-cover sm:h-[100vh]' src={thumbnail2} alt="Project Thumbnail" />
        <div id='x'></div>
      </div>
    </div>
  );
};

export default LandingSection;
