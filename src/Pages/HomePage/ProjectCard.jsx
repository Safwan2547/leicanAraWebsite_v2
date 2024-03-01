// Import necessary modules and components
import React, { useState,useEffect } from 'react';
import TransitionLink from '../../Modules/TransitionLink';
import { inView,animate,timeline,scroll } from "motion";
import { Parallax,ParallaxLayer } from '@react-spring/parallax';


// Functional component to render a project card
const ProjectCard = ({ project }) => {

  // State to track mouse hover status and position
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const currentFocus =true;
// Event handlers for mouse enter and leave
const handleMouseEnter = () => {
  setIsHovered(true);
};

const handleMouseLeave = () => {
  setIsHovered(false);
};
  

 const cardAnimation=(target)=>{
  
  animate(
    target.querySelector('p'),
    { opacity: 1,transform: "scale(1)" },
    {  duration: 1.3,delay:0.4, easing:"cubic-bezier(.16,1.17,1,.98)" }
  );



 }

  // Check if the screen size is small enough to be considered mobile
const checkIsMobile = () => {
  const newIsMobile = window.innerWidth <= 640;
    setIsMobile(newIsMobile);
    console.log("ismobile? :" + newIsMobile);
    console.log("window.innerWidth :" + window.innerWidth);
  // Adjust the threshold as needed
};

  useEffect(() => {
   // scroll(animate(".mainHeader",{y:[-100,100]}),{threshold:0.5})

    inView(".mainHeader", ({ target }) => {

      animate(
        target,
         { opacity: 1,transform: "scale(1)" },
         {  duration: 0.7,delay:0.6, easing:"ease-in-out" }
       );
      
      return(leaveInfo)=>{ animate(
        target,
        { opacity: 0 },
        {  duration: 0.1, easing:"ease-out" }
      );
      }
    }


      )

    inView(".group", ({ target }) => {


      
      cardAnimation(target,1);

      

    
      return(leaveInfo)=>{
        //This code makes it so the elements dissapear once it left the viewport
        //  animate(
        // target,
        // { opacity:[0,1] },
        // {  duration: 0.5,delay:0.1, easing:"ease-out" })

        // animate(
        //   target.querySelector('h4'),
        //   { opacity: 0 },
        //   {  duration: 0.5, easing:"ease-out" }
        // );
        
        // animate(
        //   target.querySelector('p'),
        //   { opacity: 0,transform: "scale(0.99)" },
        //   {  duration: 0.5, easing:"ease-out" }
        // );
    }});

   

    checkIsMobile();
    console.log("Mounted")

 
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  


  // Render the project card
  return (
    <div
        
        className="  "
       
      >
    <div className='watcher   overflow-hidden w-full    h-screen snap-start relative eterC  flex' >
      {/* Use TransitionLink component with the project's link */}
      
        <div className=" object-cover overflow-x-visible w-full  transition-all duration-300">
        
       
  <div className={`relative  snap-center transition-all duration-[600ms] cursor-none border-black flex justify-center items-center w-full h-full overflow-hidden`}>
  <TransitionLink onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} to={`/${project.key}`} className="cursor-none absolute peer w z-10 group w-[60vw] h-[30vw]  enterC"/>
    {/* Render image or video based on the project type */}
    {isMobile === true && project.typeMobile === 'video' ? (
      <video muted autoPlay loop fetchPriority="low" loading='lazy' alt={project.alt} src={project.thumbnailPort} type="video/mp4" className=" object-cover max-w-[90vw] absolute snap-center aspect-[1/1.85] overflow-y-hidden " />
    ) : (
      isMobile === true && project.typeMobile === "image" ? (
        <img loading='lazy' alt={project.alt} src={project.thumbnailPort} fetchPriority="low" className=" object-cover w-[90vw] snap-center aspect-[1/1.85] overflow-y-hidden crsor-none" />
      ) : (
        !isMobile && project.type === 'image' ? (
         
            <img  loading='lazy' alt={project.alt} fetchPriority="low" src={project.thumbnail} className=" object-cover overflow-hidden max-w-full aspect-[1/2] peer-hover:scale-125 relative sm:w-[60vw] sm:h-[30vw] transition-all duration-1000 ease-in-out z-2" />
        ) : (
          <video alt={project.alt} loading="lazy" muted autoPlay loop fetchPriority="low" className={`transition-all duration-[600ms] ${isHovered ? 'opacity-100 scale-[120%]' : 'scale-[100%]'}`}>
            <source src={project.thumbnail} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )
      )
    )}
  </div>

        </div>
      {/* Additional project information */}
      
      <div horizontal={"true"} offset={0} speed={0.1}   className=" z-3 group  sm:mt-12 flex justify-center items-center w-full absolute">
        

        <h4 className={` font-satoshi-light  scale-[100%] absolute bottom-0 opacity-0 text-4xl sm:text-3xl  ${isMobile===true?(project.textColorMobile):(project.textColor)} ml-2 mb-2`}>
         
        </h4>
        <p data-speed={currentFocus? "5" : "0"} className={` opacity-100 scale-[101%] ${isMobile===true?(project.textColorMobile):(project.textColor)}  font-satoshi-semibold w-full text-6xl 
         text-pretty lg:text-[14rem] sm:text-[10rem]  capitalize text-center ` }>{
         isMobile===true?(project.mainHeaderMobile):(
         project.title)}</p>
         
      </div >


      <h4  className={`mainHeader  font-satoshi-light text-pretty  absolute bottom-10 mb-24 inset-y-12 inset-x-16 border- border- flex items-end justify-end opacity-0 text-4xl sm:text-6xl z-1 ${isMobile===true?(project.textColorMobile):(project.textColor)} `}>
         {project.mainHeader}
      </h4>

      

      {project.thumbnail3d !== null && project.thumbnail3d !== undefined && (
  <div className='sm:flex hidden transition-all duration-1000  h-full w-full  justify-center absolute'>
    <img data-speed="2" className={`${project.thumbnail3dW} z-3   mouseParallax left-50 top-50 `} src={project.thumbnail3d} />
  </div>
)}

    </div>
    </div>

  );
};

// Export the ProjectCard component
export default ProjectCard;
