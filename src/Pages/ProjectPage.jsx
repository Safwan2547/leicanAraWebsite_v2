// ProjectPage.jsx
//Serves as a template for the project pages
//Is dynamically generated based on the project
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projects from './Projects/Projects';
import Footer from '../Modules/Footer';
import Marquee from "react-fast-marquee";
import { scroll, animate,inView } from "motion"



const ProjectPage = () => {
  const { projectKey } = useParams();
  const [projectData, setProjectData] = useState(null);
  let projectDetails;

  
  //The margin constants are used to determine the margin between sections
  //Must apply the biggest margin value
  //The value must be available for use in tailwindCss or the margin wont work
  const margin=20;


  const getSectionLayout = (name) => {
    // Use square brackets to access object properties dynamically
    const sectionLayout = projectDetails[name];

    if(sectionLayout==1){
      return `flex flex-col justify-center items-center ${marginExpression}`;
    }
    return sectionLayout;
  };

  


  
  
  

// Use this to separate sections
const marginExpression = `mt-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin)}`;
// Use this to separate elements within sections
const marginExpression2 = `mt-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin / 4)}`;
// Use this to separate things that should be close together, such as headers and descriptions, etc.
const marginExpression3 = `mt-${Math.floor(margin / 4)} sm:mt-${Math.floor(margin / 8)}`;

//This variable is used to add depth by scaling the hovered element.
const floater= ` transition-all duration-1000   ease-in-out `;

//This serves as body text modifier
const bodyMod=`text-balance hyphens-auto max-w-[35em]`;


//These variables control the visual layout of the video and image elements
  //Layout1: columbs, designed for 2 landscape content one after the other
  const visualLayout1=`flex  sm:w-3/4 flex-col ${marginExpression2} justify-center items-center w-[100vw]`;

  //Layout2: rows, designed for 2 portrait content next to each other for desktop and in columns for mobile


  //Class 1 is for landscape videos
  const visualClass1=`w-screen drop-shadow-2xl p-1 sm:py-10 aspect-video object-cover ${marginExpression3}`;
  //Class 2 is for Landscape images
  const visualClass2="w-screen drop-shadow-2xl p-1 sm:py-10  object-cover";



const aboutAnimationsEntry = (target) => {
  const elementsToAnimate = target.querySelectorAll(".animateOnEntry");

  elementsToAnimate.forEach((element) => {
    element.classList.add("opacity-0");
    
    animate(
      element,
      { opacity: 1, transform: "scale(1)" },
      { duration: 1, easing: "ease-out" }
    );
  });
};




  useEffect(() => {
    // Fetch project details based on projectKey from Projects
     projectDetails = projects.find((project) => project.key === projectKey);
   
    if (projectDetails) {

      setProjectData(projectDetails);

      //Call the animations after the page has been built
      setTimeout(() => {
        inView(".pageWrap", ({ target }) => {
          aboutAnimationsEntry(target);
          console.log("In view:",  target);
        })}, 1000);
        

        console.log(getSectionLayout('identityLayout'))
        
        
       

        
    } else {

      // Handle project not found (optional)
      console.error(`Project with key "${projectKey}" not found`);
      // Set an empty object or handle it in a way that suits your application
      setProjectData({});

    }

    
    


  }, [projectKey]);

  

  return (
    <div className=" pageWrap text-NightFall leading-relaxed  overflow-hidden bg-white">
      {projectData ? (
        
        <>
        <div id='landing' className=' w-screen h-screen overflow-hidden ' >
       
        {/* Contains main header and description for the landing */}
        <div className={ `w-full h-full justify-center flex overflow-hidden items-center  `} id='thumbnail'>
        <div id="headerInfo" className=' drop-shadow-lg flex  absolute  justify-evenly align-baseline bottom-16  w-full items-center  border-black  
        flex-row '>
          <h1 className='uppercase textC  animateOnEntry  text-6xl sm:text-7xl text-white tracking-wider font-normal font-Satoshi  '>{projectData.title}</h1>
          <p className={`text-2xl text-white  overflow-hidden textP align-baseline font-Satoshi font-light `}>{projectData.mainHeader}</p>
          
          </div>
        
          {/* <Marquee  autoFill={true} className={`p-5 opacity-90 hidden sm:block  text-NightFall font-Lora text-4xl sm:text-7xl `}> {projectData.services} </Marquee> */}
         
        

          
            <img className=' w-screen object-cover  sm:h-[100vh]' src={projectData.thumbnail2} ></img>
          </div>
            
            
            
          </div>

           <section id='prologue' className={`relative justify-center items-center flex-col
           flex  ${marginExpression}`}>
            <div id='prologue' className="w-full  flex justify-center flex-col  sm:p-0 sm:w-2/3 ">
              <div className='p-6 sm:p-0'>
            <p className='text-sm sm:text-2xl  animateOnEntry textP font-light   font-Satoshi'>Prologue:</p>
            <div id='line' className='h-20 rounded-sm w-[1px]  animateOnEntry sm:w-0.5  scale-y-0 bg-black'></div>
            <h1 id='prologue' className={`text-3xl ${marginExpression3}  animateOnEntry textC font-medium sm:text-5xl font-Lora`}> 
            {projectData.prologueHead}
          
            </h1>
            <p id='prologueDescription' className={`font-Satoshi animateOnEntry  textP text-balance hyphens-auto max-w-[35em] ${marginExpression3} font-light opacity-80 text-sm sm:text-2xl`} >{projectData.prologueDescription}</p>
             </div>

            
              {/* Render video or image based on file type */}

              
    
      



          </div>

          <div id='prologueLayout' className={`${visualLayout1}`}>
           
           {projectData.prologueContent1.endsWith('.mp4') ? (
         <video
           alt={projectData.prologueContent1}
           autoPlay
           loop
           muted
           className={`${visualClass1}`}
           src={projectData.prologueContent1}
         ></video>
       ) : (
         <img
           className={`${visualClass2}`}
           src={projectData.prologueContent1}
           alt={projectData.prologueContent1}
         />

         
         
       )}
       {/* Ambition Content 2 */}
     {projectData.prologueContent2.endsWith('.mp4') ? (
         <video
           alt={projectData.prologueContent2}
           autoPlay
           loop
           muted
           className={`${visualClass1}`}
           src={projectData.prologueContent2}
         ></video>
       ) : (
         <img
           className={`${visualClass2}`}
           src={projectData.prologueContent2}
           alt={projectData.prologueContent2}
         />

         
         
       )}

       </div>
            

           </section>

          <section id='projectInfo1' className={`w-full flex-col items-center  sm:p-0  relative justify-center
           flex ${marginExpression} `}>
           
            <div id='ambition' className="p-6 sm:w-2/3 sm:p-0 ">
            <h4 className='text-sm sm:text-2xl textP font-light  font-Satoshi'>Ambition:</h4>
            <div id='line' className='h-20 rounded-sm w-[1px] sm:w-0.5 bg-black'></div>
            <h1 id='ambitionHead' className={`text-3xl ${marginExpression3} textC font-medium sm:text-5xl font-Lora`}> 
            {projectData.ambitionHead}
          
            </h1>
            <p id='ambitionDescription' className={`text-balance hyphens-auto max-w-[35em] font-Satoshi opacity-80 ${marginExpression3} textP  font-light text-sm sm:text-2xl`} >{projectData.ambitionDescription}</p>

            </div>

            <div id='ambitionLayout' className={`${visualLayout1}`}>
           
            {projectData.ambitionContent1.endsWith('.mp4') ? (
          <video
            alt={projectData.ambitionContent1}
            autoPlay
            loop
            muted
            className={`${visualClass1}`}
            src={projectData.ambitionContent1}
          ></video>
        ) : (
          <img
            className={`${visualClass2}`}
            src={projectData.ambitionContent1}
            alt={projectData.ambitionContent1}
          />

          
          
        )}
        {/* Ambition Content 2 */}
      {projectData.ambitionContent2.endsWith('.mp4') ? (
          <video
            alt={projectData.ambitionContent2}
            autoPlay
            loop
            muted
            className={`${visualClass1}`}
            src={projectData.ambitionContent2}
          ></video>
        ) : (
          <img
            className={`${visualClass2}`}
            src={projectData.ambitionContent2}
            alt={projectData.ambitionContent2}
          />

          
          
        )}

        </div>
           


            

          </section>
          <section id='projectInfo2' className={`flex flex-col justify-center ${marginExpression} items-center w-[100vw]`}>

          <div id='challenge' className= 'w-full p-6 sm:p-0 sm:w-2/3 font-Satoshi'>
          <h4 className='text-sm sm:text-2xl textP font-light font-Satoshi'>Challenge:</h4>
          <div id='line' className='h-20 rounded-sm w-[1px] sm:w-0.5 bg-black'></div>
          <h1 id='challengeHead'  className={` ${marginExpression3} text-3xl textC font-medium sm:text-5xl font-Lora`}> 
            {projectData.challengeHead}</h1>
            <p id='challengeDescription' className={`text-balance hyphens-auto max-w-[35em] font-Satoshi textP ${marginExpression3}  font-light opacity-80 text-sm sm:text-2xl`} >{projectData.challengeDescription}</p>

          </div>

          <div className='scale-75 w-screen p-1 '>
           {/* Challenge content 1 */}
           {projectData.challengeContent1.endsWith('.mp4') ? (
         <video
           alt={projectData.challengeContent1}
           autoPlay
           loop
           muted
           className={`${visualClass1}`}
           src={projectData.challengeContent1}
         ></video>
       ) : (
         <img
           className={`${visualClass2}`}
           src={projectData.challengeContent1}
           alt={projectData.challengeContent1}
         />

         
         
       )}
       {/* Challenge Content 2 */}
     {projectData.challengeContent2.endsWith('.mp4') ? (
         <video
           alt={projectData.challengeContent2}
           autoPlay
           loop
           muted
           className={`${visualClass1}`}
           src={projectData.challengeContent2}
         ></video>
       ) : (
         <img
           className={`${visualClass2}`}
           src={projectData.challengeContent2}
           alt={projectData.challengeContent2}
         />

         
         
       )}
       </div>
       </section>



          <section id="projectInfo3"  className={`flex flex-col ${marginExpression} justify-center items-center`}>
            
            <div id='approach' className='w-full   sm:p-0 p-6 sm:w-2/3 font-Satoshi'>
          <h4 className='text-sm sm:text-2xl  textP font-light font-Satoshi'>Approach:</h4>
          <div id='line' className='h-20 rounded-sm w-[1px] sm:w-0.5 bg-black'></div>
          <h1 id='approachHead'  className={`${marginExpression3}  text-3xl textC font-medium sm:text-5xl font-Lora`}> 
            {projectData.approachHead}</h1>
            <p id='approachDesciption' className={`text-balance hyphens-auto max-w-[35em] font-Satoshi opacity-80 textP ${marginExpression3}  font-light text-sm sm:text-2xl`} >{projectData.approachDescription}</p>

          </div>
          
            
            
            <div id='visualSection1 ' className={`flex  sm:w-3/4 flex-col ${marginExpression2} justify-center items-center w-[100vw]`}>


            {projectData.approachContent1.endsWith('.mp4') ? (
          <video
            alt={projectData.approachContent1alt}
            autoPlay
            loop
            muted
            className={`${visualClass1}`}
            src={projectData.approachContent1}
          ></video>
        ) : (
          <img
            className={`${visualClass2}`}
            src={projectData.approachContent1}
            alt={projectData.approachContent1alt}
          />
          
        )}

              
            {projectData.approachContent2.endsWith('.mp4') ? (
          <video
            alt={projectData.approachContent2}
            autoPlay
            loop
            muted
            className={`${visualClass1}`}
            src={projectData.approachContent2}
          ></video>
        ) : (
          <img
            className={`${visualClass2}`}
            src={projectData.approachContent2}
            alt={projectData.approachContent2}
          />
          
        )} </div>
            
          </section>
          <section id='projectInfo4' className={` ${marginExpression} flex flex-col justify-center items-center`}>
          <div id='identity' className='w-full sm:p-0 p-6 sm:w-2/3 font-Satoshi'>
          <h4 className='text-sm sm:text-2xl  textP font-light font-Satoshi'>Identity:</h4>
          <div id='line' className='h-20 rounded-sm w-[1px] sm:w-0.5 bg-black'></div>
          <h1 id='identityHead'  className={` ${marginExpression3} text-3xl textC font-medium sm:text-5xl font-Lora`}> 
            {projectData.identityHead}</h1>
            <p id='identityDescription' className={`font-Satoshi textP opacity-80 ${bodyMod}  ${marginExpression3} font-light text-sm sm:text-2xl`} >{projectData.identityDescription}</p>

          </div>
          <div id='visualSection2 ' className={`${visualLayout1}`}>
            {projectData.identityContent1.endsWith('.mp4') ? (
          <video
            alt={projectData.identityContent1alt}
            autoPlay
            loop
            muted
            className={`${visualClass1}`}
            src={projectData.identityContent1}
          ></video>
        ) : (
          <img
            className={`${visualClass2}`}
            src={projectData.identityContent1}
            alt={projectData.identityContent1alt}
          />
          
        )}

              
            {projectData.identityContent2.endsWith('.mp4') ? (
          <video
            alt={projectData.identityContent2}
            autoPlay
            loop
            muted
            className={`${visualClass1}`}
            src={projectData.identityContent2}
          ></video>
        ) : (
          <img
            className={`${visualClass2}`}
            src={projectData.identityContent2}
            alt={projectData.identityContent2}
          />
          
        )} </div>

            


          </section>

          <section id='projectInfo5' className={`${marginExpression} flex flex-col justify-center items-center`}>
          <div id='epilogue' className='w-full sm:p-0 p-6 sm:w-2/3 font-Satoshi'>
          <h4 className='text-sm sm:text-2xl  textP font-light font-Satoshi'>Epilogue:</h4>
          <div id='line' className='h-20 rounded-sm w-[1px] sm:w-0.5 bg-black'></div>
          <h1 id='epilogueHead'  className={`${marginExpression3} text-3xl textC font-medium sm:text-5xl font-Lora`}> 
            {projectData.epilogueHead}</h1>
            <p id='epilogueDescription' className={`font-Satoshi  textP ${marginExpression3} ${bodyMod}  opacity-80 font-light text-sm sm:text-2xl`} >Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type
             and scrambled it to make a type specimen book.</p>

          </div>
          <div id='visualSection3 ' className={visualLayout1}>
          {projectData.epilogueContent1.endsWith('.mp4') ? (
          <video
            alt={projectData.epilogueContent1.alt}
            autoPlay
            loop
            muted
            className={`${visualClass1}`}
            src={projectData.epilogueContent1}
          ></video>
        ) : (
          <img
            className={`${visualClass2}`}
            src={projectData.epilogueContent1}
            alt={projectData.epilogueContent1.alt}
          />
          
        )} </div>

            


          </section>
          <div className='flex justify-center items-center'>
          <h1 id='finalWords' className='text-3xl  sm:text-5xl font-Lora font-medium p-6 my-20 sm:p-10'>{projectData.finalWords} </h1>
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
