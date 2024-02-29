import React, { useRef,useState, useEffect } from 'react';
import logo from '../../Assets/Logo.svg'; // Adjust the path according to your directory structure
import landingVid from '../../Assets/Website landing 1.mp4'
import { animate, scroll, inView,timeline,spring,stagger } from "motion"
import Intro from './Intro';
import LandingExhibit from '../../Modules/landingExhibit';
import Frame from '../../Modules/frame';
import starFallImage3 from "../../Assets/Mockup 3.webp"
import starFallImage4 from "../../Assets/StarFall Thumbnail-4.webp"
import starFallImage5 from "../../Assets/Starfall Robots Lab Mockup 2.webp"


function LandingPage() {
  const [isMounted1, setIsMounted1] = useState(false);
  //This starts the video on the landing page
  const [showLandingVideo, setShowLandingVideo] = useState(false); // State to control when to show the landing video

  //  delay for the landing video
  setTimeout(() => {
    setShowLandingVideo(true);
  }, 0);

  const select=document.querySelectorAll("span");

  const landingImages = [starFallImage3,starFallImage4,starFallImage5]

//This is the animation for the landing page
  const landingAnimations=[
   
    // Final state: set opacity to desired value
  
    ['.landingAnimations', { opacity: 1, y: 0, transform: "scale(1)" }, {duration:2, delay: stagger(0.2,{ easing: "ease-out" },{from:"last"}), easing: "cubic-bezier(.16,1.17,1,.98)" }],

  ];
//animation for the nav bar
  

    
  
// ];
//This is the intro Animation
//Must ensure the animation only triggers once when the user first logs in (May need cookies)

// const introAnimate=[
//   [".intro-Back",{ opacity: 0}, { duration: 0.3,delay:1.5,easeing:["ease-in", "ease-out"] }],
//   [".intro-Back",{ display:"none"}, {  duration:0.01, delay:0.5  }]


  
 

  function stagger(delay) {
  return (i) => i * delay;
}

   useEffect(() => {
  // timeline(introAnimate, {duration : 0},{
  //   defaultOptions: { ease: "ease-in"}} )

   timeline(landingAnimations, {delay:1},{
    defaultOptions: {easing:"ease-in-out" },
  })

  
  
  
   
    return () => {
      
    };
  }, []);
  
  

 
  

    return (
      //wrapper
      <div  className=" ">
      {/* <Parallax pages={3} ref={parallax} scrolling={true} horizontal={false} > */}
        
      <div  className={` transition-opacity overflow-hidden duration-1000 
       sm:ml-0 overflow-x-hidden flex flex-col 
       sm:flex-wrap justify-center  sm:items-center   sm:justify-items-start
       h-screen prose prose-sm lg:prose-xl text-MainBeige relative`}>


<div data-speed="1"  className="  z-1  mouseParallax w-screen h-screen absolute outline-none ">
          {/* Conditionally render the landing video based on showLandingVideo state */}
          {showLandingVideo && (
            <video className="w-full   h-full absolute scale-90 sm:bottom-0 bottom-12  sm:scale-[50%] border-none overflow-hidden object-cover hover:none" controls={false} autoPlay muted loop>
              <source src={landingVid} type="video/mp4" />
            </video>
          )}
        </div>

        

      

          {/* This is the Mobile view */}       
          <div className=' flex justify-center  top-2/3 items-center  sm:hidden  absolute '>  
      <h1  className={`landingAnimations  text-5xl  sm:text-6xl w-3/4 font-Lora font-light text-center  opacity-0 sm:w-1/3  text-NightFall   
         sm:hidden textC transition duration-200 `}>
          <span className='textC opacity-0 font-normal text-8xl'>Storytellers</span> <span className='opacity-0 '>for</span> <br></br><span className=' opacity-0'>the</span> <span className=' textC opacity-0 text-8xl'>Visionaries</span>
          </h1>
          
         
          </div>   


          {/* This is the Desktop view */}

          <LandingExhibit />
         

         
          <div strength={100} className=' opacity-100  text-NightFall hidden sm:flex  sm:absolute hover:text-LunarTwilight 
            transition-text duration-200  bottom-[10%] w-2/3 flex-col z-3 perspective-800'>
            
          
          <h1 data-speed="6" id='hero_line'  className={`relative mouseParallax font-extralight tracking-wide textC mb-5 opacity-100 landingItem1 group  text-NightFall font-Lora  sm:text-5xl text-center leading-none`}>
          <span  className='textC text-LunarTwilight landingAnimations opacity-0 font-normal text-8xl'>Storytellers</span> <span className='opacity-0 landingAnimations'>for</span> <br></br><span className='landingAnimations opacity-0'>the</span> <span className='landingAnimations textC font-normal text-LunarTwilight opacity-0 text-8xl'>Visionaries</span>
          </h1>
          
          

          <h1   className={`hidden opacity-0 textP landingItem1 font-[300]  font-Lora pl-2 
           sm:text-3xl ml-2 mr-44 sm:hidden  text-left  `}>
          We eliminate invisibility by crafting distinct creative ideas that resonate

           

          </h1>
          </div>
          
         
        </div>
        {/* </Parallax> */}
        </div>
        
    );
    
  
  }

export default LandingPage;