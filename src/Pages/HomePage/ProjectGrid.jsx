// Import React and the ProjectCard component
import React,{ useState,useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { inView,animate,timeline } from "motion"


// Functional component to render a grid of projects
const ProjectGrid = ({ projects }) => {



  const margin=20;

// Use this to separate sections
const marginExpression = `mt-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin)}`;
// Use this to separate elements within sections
const marginExpression2 = `mt-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin / 4)}`;
// Use this to separate things that should be close together, such as headers and descriptions, etc.
const marginExpression3 = `mt-${Math.floor(margin / 4)} sm:mt-${Math.floor(margin / 8)}`;



const animateObj=document.getElementById("#projectHolder");
const boxes = document.querySelectorAll(".projectCard")



  
  return (
    // Outer container with flex layout and centering
    <section id='gridClassWrap' className="w-[100%] flex justify-center  flex-col overflow-x-scroll items-center flex-wrap">
      <h1 className='text-NightFall font-Lora font-light text-3xl    sm:text-5xl'>Projects</h1>
      {/* Grid container for projects with specified columns, gap, and border */}
      <div id='projectHolder' className={`${marginExpression2} sm:flex-col flex-row  relative flex overflow-x-scroll overflow-y-hidden 
       gap-2 sm:gap-8 sm:p-0 pl-4 pr-4 w-screen sm:w-[95vw]  snap-mandatory snap-x   `}>

       
       
        
        {/* Map through the projects and render ProjectCard for each */}
        {projects.map((project) => (
          <div id='projectCard' className={`projectCard  ${marginExpression3}  cursor-none flex-none h-1/3  transition-all duration-500   border-black snap-always snap-center `} key={project.key}>
            <span><ProjectCard project={project} /></span>
          </div>
        ))}
      </div>
    </section>
  );
};

// Export the ProjectGrid component
export default ProjectGrid;
