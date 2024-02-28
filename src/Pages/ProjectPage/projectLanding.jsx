import React from 'react';
import { useEffect } from 'react';
import { inView, animate } from 'motion';

const LandingSection = ({ projectData }) => {
  const { title, mainHeader,secondaryHeader, thumbnail2 } = projectData;

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
    <div id='landing' className='w-screen h-[120vh]
     overflow-hidden flex justify-center items-start'>
        <div id='landingText' className='w-full z-3 h-full items-center flex text-LunarTwilight  '> 
        <div id="headerInfo" className=' flex absolute justify-evenly align-baseline   place-items-end border-black '>
          <h1 data-speed="0" className=' textC text-6xl  sm:text-[10rem] max-w-[75vw] mouseParallax pl-10 text-LunarDawn tracking-wider  font-satoshi-bold'>{secondaryHeader?secondaryHeader:mainHeader}</h1>
          <p className='text-2xl hidden text-black overflow-hidden textP align-baseline font-Satoshi font-light'>{title}</p>
        </div>
        
        </div>
      <div className='w-full h-full z-1 absolute justify-end  flex overflow-hidden items-center' id='thumbnail'>
        
        <img data-speed="4" className='w-[50vw] mouseParallax p-12 object-cover sm:h-[85vh]' src={thumbnail2} alt="Project Thumbnail" />
        <div id='x'></div>
      </div>
    </div>
  );
};

export default LandingSection;
