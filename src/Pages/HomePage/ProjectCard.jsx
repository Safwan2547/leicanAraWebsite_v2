// Import necessary modules and components
import React, { useState,useEffect } from 'react';
import TransitionLink from '../../Modules/TransitionLink';
import { inView,animate,timeline } from "motion"


// Functional component to render a project card
const ProjectCard = ({ project }) => {

  // State to track mouse hover status and position
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  

 const cardAnimation=(target)=>{
  animate(
    target,
    { opacity: 1 },
    {  duration: 0.5,delay:0.1, easing:"ease-out" }
  );
  animate(
    target.querySelector('h4'),
    { opacity: 1,transform: "scale(1)" },
    {  duration: 0.5,delay:0.3, easing:"ease-out" }
  );
  
  animate(
    target.querySelector('p'),
    { opacity: 1,transform: "scale(1)" },
    {  duration: 0.5,delay:0.7, easing:"ease-out" }
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

    inView(".group", ({ target }) => {


      
      cardAnimation(target,1);

    
      return(leaveInfo)=>{ animate(
        target,
        { opacity:[0,1] },
        {  duration: 0.5,delay:0.1, easing:"ease-out" })

        animate(
          target.querySelector('h4'),
          { opacity: 0 },
          {  duration: 0.5, easing:"ease-out" }
        );
        
        animate(
          target.querySelector('p'),
          { opacity: 0,transform: "scale(0.99)" },
          {  duration: 0.5, easing:"ease-out" }
        );
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
    <TransitionLink
        to={`/${project.key}`} 
        className="group cursor-none enterC"
       
      >
    <div className='watcher   overflow-hidden w-full    h-full snap-start relative enterC  flex' >
      {/* Use TransitionLink component with the project's link */}
      
        <div className="enterC object-cover overflow-x-visible   transition-all duration-300">
          <div className={`relative enterC snap-center transition-all duration-[600ms] overflow-hidden`}>
            {/* Render image or video  based on the project type */}
            {
           (isMobile===true && project.typeMobile==='video')?(
            <video 
            muted
            autoPlay
            loop 
            loading='lazy' alt={project.alt}  src={project.thumbnailPort}  type="video/mp4" className="
             rounded-t object-cover  max-w-[90vw]  snap-center aspect-[1/1.85] overflow-y-hidden cursor-none " />

          )
          
          :
           
           (isMobile===true && project.typeMobile==="image")?(
              <img loading='lazy' alt={project.alt}  src={project.thumbnailPort} className="
               rounded-t object-cover  w-[90vw]  snap-center aspect-[1/1.85] overflow-y-hidden cursor-none " />
            ) 
              :
            
            (!isMobile && project.type === 'image') ? (
              <img loading='lazy' alt={project.alt}  src={project.thumbnail} className="
               rounded-t object-cover overflow-hidden max-w-full aspect-[1/2] group-hover:scale-110 transition-all duration-1000 ease-in-out  sm:aspect-[1.85/1] cursor-none " />
            ) : 

            
            
            (
              <video alt={project.alt} loading="lazy"
                muted
                autoPlay
                loop
                className={`transition-all duration-[600ms] ${
                  isHovered ? 'opacity-100 scale-[120%]' : 'scale-[100%]'
                }`}
              >
                <source src={project.thumbnail} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div
            className={`enterC p-4 absolute cursor-none inset-0 transition-opacity duration-[600ms] rounded
                        bg-opacity-50 flex flex-col justify-center items-center
                        ${isHovered ? 'opacity-100' : 'opacity-100'}`}
          ></div>
        </div>
      {/* Additional project information */}
      <div className="cursor-none group enterC ml-10 mt-10 col-span-4 absolute">
        

        <h4 className={`enterC font-Satoshi font-light scale-[100%]  opacity-0 text-4xl sm:text-3xl  ${isMobile===true?(project.textColorMobile):(project.textColor)} ml-2 mb-2`}>
          {project.title}
        </h4>
        <p className={`enterC opacity-0 scale-[99%] ${isMobile===true?(project.textColorMobile):(project.textColor)}  font-Satoshi   font-normal w-2/3 text-6xl 
         text-pretty sm:text-9xl mt-2 sm:mt-5 drop-shadow ` }>{
         isMobile===true?(project.mainHeaderMobile):(
         project.mainHeader)}</p>
      </div>
    </div>
    </TransitionLink>

  );
};

// Export the ProjectCard component
export default ProjectCard;
