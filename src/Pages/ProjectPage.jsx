// ProjectPage.jsx
//Serves as a template for the project pages
//Is dynamically generated based on the project
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import projects from './Projects/Projects';
import Footer from '../Modules/Footer';
import Marquee from "react-fast-marquee";


const ProjectPage = () => {
  const { projectKey } = useParams();
  const [projectData, setProjectData] = useState(null);

  
  //The margin constants are used to determine the margin between sections
  //Must apply the biggest margin value
  //The value must be available for use in tailwindCss or the margin wont work
  const margin=20;

// Use this to separate sections
const marginExpression = `mt-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin)}`;
// Use this to separate elements within sections
const marginExpression2 = `mt-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin / 4)}`;
// Use this to separate things that should be close together, such as headers and descriptions, etc.
const marginExpression3 = `mt-${Math.floor(margin / 4)} sm:mt-${Math.floor(margin / 8)}`;


  useEffect(() => {
    // Fetch project details based on projectKey from Projects
    const projectDetails = projects.find((project) => project.key === projectKey);

    if (projectDetails) {
      setProjectData(projectDetails);
    } else {
      // Handle project not found (optional)
      console.error(`Project with key "${projectKey}" not found`);
      // Set an empty object or handle it in a way that suits your application
      setProjectData({});
    }
  }, [projectKey]);

  return (
    <div className=" text-NightFall w-screen h-full  bg-white">
      {projectData ? (
        <>
        <section id='landing' className='mt-32 ' >
        {/* Contains main header and description for the landing */}
        <div id="headerInfo" className='flex justify-center w-full items-center  border-black  
        flex-col '>
          <h1 className='uppercase textC text-6xl sm:text-9xl tracking-wider font-Satoshi  '>{projectData.title}</h1>
          <p className='text-2xl textP m-6 font-Satoshi font-light '>{projectData.mainHeader}</p>
          
          </div>
          <Marquee autoFill={true} className={`p-5 opacity-90  text-NightFall font-Lora text-4xl sm:text-7xl `}>{projectData.services}</Marquee>
         
        

          <div className=' p-1 sm:p-5 ' id='thumbnail'>
            <img src={projectData.thumbnail2} ></img>
          </div>
            
            
            
          </section>

           <section id='prologue' className={`relative justify-center
           flex  ${marginExpression}`}>
            <div id='prologue' className="w-full  sm:p-0 sm:w-2/3 ">
              <div className='p-6 sm:p-0'>
            <h4 className='text-sm sm:text-2xl textP font-light  font-Satoshi'>Prologue:</h4>
            <div id='line' className='h-20 rounded-sm w-[1px] sm:w-0.5  bg-black'></div>
            <h1 id='prologue' className={`text-3xl ${marginExpression3} textC font-light sm:text-5xl font-Lora`}> 
            {projectData.prologueHead}
          
            </h1>
            <p id='prologueDescription' className={`font-Satoshi textP ${marginExpression3} font-light text-sm sm:text-2xl`} >Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type
             and scrambled it to make a type specimen book.</p>
             </div>
             <div className='flex justify-center items-center w-full'>
            <video alt={projectData.introVideoAlt} muted autoPlay loop  className=" w-full p-1 sm:py-10 aspect-video object-cover"src={projectData.introVideo}></video>

            </div>
              {/* Render video or image based on file type */}
    {projectData.prologueContent && (
      <div className={`p-1  sm:p-0 ${marginExpression3}`}>
        {projectData.prologueContent.endsWith('.mp4') ? (
          <video
            alt={projectData.prologueContent}
            autoPlay
            loop
            muted
            className='w-screen p-1 sm:py-10 aspect-video object-cover'
            src={projectData.prologueContent}
          ></video>
        ) : (
          <img
            className='w-full py-10 aspect-image object-cover'
            src={projectData.prologueContent}
            alt={projectData.prologueContent}
          />
          
        )}
        </div>)}
      



          </div>

           </section>

          <section id='projectInfo1' className={`w-full flex-col items-center  sm:p-0  relative justify-center
           flex ${marginExpression} `}>
           
            <div id='ambition' className="p-6 sm:w-2/3 sm:p-0 ">
            <h4 className='text-sm sm:text-2xl textP font-light  font-Satoshi'>Ambition:</h4>
            <div id='line' className='h-20 rounded-sm w-[1px] sm:w-0.5 bg-black'></div>
            <h1 id='ambitionHead' className={`text-3xl ${marginExpression3} textC font-light sm:text-5xl font-Lora`}> 
            {projectData.ambitionHead}
          
            </h1>
            <p id='ambitionDescription' className={`font-Satoshi ${marginExpression3} textP  font-light text-sm sm:text-2xl`} >Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type
             and scrambled it to make a type specimen book.</p>

            </div>
           
            <video alt={projectData.vidAlt1} autoPlay loop  muted className='w-full p-1 sm:w-3/4 sm:p-10 aspect-video object-cover ' src={projectData.video1} ></video>

           


            

          </section>
          <section id='projectInfo2' className={`flex flex-col justify-center ${marginExpression} items-center w-[100vw]`}>

          <div id='challenge' className= 'w-full p-6 sm:p-0 sm:w-2/3 font-Satoshi'>
          <h4 className='text-sm sm:text-2xl textP font-light font-Satoshi'>Challenge:</h4>
          <div id='line' className='h-20 rounded-sm w-[1px] sm:w-0.5 bg-black'></div>
          <h1 id='challengeHead'  className={` ${marginExpression3} text-3xl textC font-light sm:text-5xl font-Lora`}> 
            {projectData.challengeHead}</h1>
            <p id='challengeDescription' className={`font-Satoshi textP ${marginExpression3}  font-light text-sm sm:text-2xl`} >Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type
             and scrambled it to make a type specimen book.</p>

          </div>
          <img className={`w-full p-1 sm:p-0 ${marginExpression2} sm:w-3/4 `} src={projectData.image1} alt="" />
          </section>



          <section id="projectInfo3"  className={`flex flex-col ${marginExpression} justify-center items-center`}>
            
            <div id='approach' className='w-full  sm:p-0 p-6 sm:w-2/3 font-Satoshi'>
          <h4 className='text-sm sm:text-2xl  textP font-light font-Satoshi'>Approach:</h4>
          <div id='line' className='h-20 rounded-sm w-[1px] sm:w-0.5 bg-black'></div>
          <h1 id='approachHead'  className={`${marginExpression3} text-3xl textC font-light sm:text-5xl font-Lora`}> 
            {projectData.approachHead}</h1>
            <p id='approachDesciption' className={`font-Satoshi textP ${marginExpression3}  font-light text-sm sm:text-2xl`} >Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type
             and scrambled it to make a type specimen book.</p>

          </div>
          
            
            
            <div id='visualSection1 ' className={`flex  sm:w-3/4 flex-col ${marginExpression2} justify-center items-center w-[100vw]`}>
            <video alt={projectData.vidAlt2} autoPlay loop  muted className='  p-1 sm:p-0 aspect-video object-cover ' src={projectData.video3} ></video>
            <img className=" p-1 sm:p-0 mt-5 " src={projectData.image3} alt="" />
            </div>
            
          </section>
          <section id='projectInfo4' className={` ${marginExpression} flex flex-col justify-center items-center`}>
          <div id='identity' className='w-full sm:p-0 p-6 sm:w-2/3 font-Satoshi'>
          <h4 className='text-sm sm:text-2xl  textP font-light font-Satoshi'>Identity:</h4>
          <div id='line' className='h-20 rounded-sm w-[1px] sm:w-0.5 bg-black'></div>
          <h1 id='identityHead'  className={` ${marginExpression3} text-3xl textC font-light sm:text-5xl font-Lora`}> 
            {projectData.identityHead}</h1>
            <p id='identityDescription' className={`font-Satoshi textP  ${marginExpression3} font-light text-sm sm:text-2xl`} >Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type
             and scrambled it to make a type specimen book.</p>

          </div>
          <div id='visualSection2 ' className={`flex flex-col ${marginExpression2} sm:flex-row justify-center items-center w-[100vw]`}>
            <video alt={projectData.vidAlt2} autoPlay loop  muted className='p-6 sm:p-0 sm:w-1/3 sm:p-10 aspect-[1/2] object-cover ' src={projectData.video2} ></video>
            <img className=" sm:p-0 p-1  sm:w-1/2" src={projectData.image2} alt="" />
            </div>

            


          </section>

          <section id='projectInfo5' className={`${marginExpression} flex flex-col justify-center items-center`}>
          <div id='epilogue' className='w-full sm:p-0 p-6 sm:w-2/3 font-Satoshi'>
          <h4 className='text-sm sm:text-2xl  textP font-light font-Satoshi'>Epilogue:</h4>
          <div id='line' className='h-20 rounded-sm w-[1px] sm:w-0.5 bg-black'></div>
          <h1 id='epilogueHead'  className={`${marginExpression3} text-3xl textC font-light sm:text-5xl font-Lora`}> 
            {projectData.epilogueHead}</h1>
            <p id='epilogueDescription' className={`font-Satoshi textP ${marginExpression3}   font-light text-sm sm:text-2xl`} >Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type
             and scrambled it to make a type specimen book.</p>

          </div>
          <div id='visualSection3 ' className={`flex flex-col ${marginExpression2} sm:flex-row justify-center items-center w-[100vw]`}>
            <img className=" sm:p-0 p-1  sm:w-1/2" src={projectData.image2} alt="" />
            </div>

            


          </section>
          <div className='flex justify-center items-center'>
          <h1 id='finalWords' className='text-3xl font-Lora p-6 my-20 sm:p-10'>{projectData.finalWords} </h1>
          </div>
         
        

        

          
          
        </>
      ) : (
        <p>Loading...</p>
      )
      }
      
    
    </div>
    
  );
};

export default ProjectPage;
