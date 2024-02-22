// ProjectPage.jsx
// Serves as a template for the project pages
// Is dynamically generated based on the project
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import projects from './ProjectPage/Projects';
import Footer from '../Modules/Footer';
import Marquee from "react-fast-marquee";
import {scroll, animate, inView} from "motion"
import LandingSection from './ProjectPage/projectLanding';
import PrologueSection from './ProjectPage/prologueSection';
import AmbitionSection from './ProjectPage/ambitionSection';
import ChallengeSection from './ProjectPage/challengeSection';
import ApproachSection from './ProjectPage/approachSection';
import IdentitySection from './ProjectPage/identitySection';
import EpilogueSection from './ProjectPage/epilogueSection';


const ProjectPage = () => {
    const {projectKey} = useParams();
    const [projectData, setProjectData] = useState(null);
    let projectDetails;


    // The margin constants are used to determine the margin between sections
    // Must apply the biggest margin value
    // The value must be available for use in tailwindCss or the margin wont work
    const margin = 20;


    // Use this to separate sections
    const marginExpression = `mt-${
        Math.floor(margin / 2)
    } sm:mt-${
        Math.floor(margin)
    }`;
    // Use this to separate elements within sections
    const marginExpression2 = `mt-${
        Math.floor(margin / 2)
    } sm:mt-${
        Math.floor(margin / 4)
    }`;
    // Use this to separate things that should be close together, such as headers and descriptions, etc.
    const marginExpression3 = `mt-${
        Math.floor(margin / 4)
    } sm:mt-${
        Math.floor(margin / 8)
    }`;

    let margins = [marginExpression, marginExpression2, marginExpression3];

    // This variable is used to add depth by scaling the hovered element.
    const floater = ` transition-all duration-1000   ease-in-out `;

    // This serves as body text modifier
    const bodyMod = `text-balance hyphens-auto max-w-[35em]`;


    // These variables control the visual layout of the video and image elements
    // Layout1: columbs, designed for 2 landscape content one after the other
    const visualLayout1 = `flex  sm:w-3/4 flex-col ${marginExpression2} justify-center items-center w-[100vw]`;


    // Layout2: rows, designed for 2 portrait content next to each other for desktop and in columns for mobile
    const visualLayout2 =  ` *:w-1/2  flex sm:w-3/4 flex-col sm:flex-row ${marginExpression2} justify-center items-center w-[100vw]`;

    // Layout3: grid, designed for two landscape and one portrait content next to each other for desktop and in columns for mobile
    const visualLayout3 = `grid grid-cols-7 *:w-full grid-flow-col  gap-4  w-3/4 ${marginExpression2}  `;

    // Landscape Content
    const landScape = ` drop-shadow-2xl  p-1  col-span-4 col-start-1 object-cover ${marginExpression3}`;
    // Portrait Content
    const portrait = `${marginExpression3}   row-span-2 col-span-3 col-start-5 drop-shadow-2xl p-1  object-cover`;


    const getSectionLayout = (projectData, name) => {
        if (projectData) { // Iterate over projectData to find the correct project
            const sectionLayout = projectData[name];

            if (sectionLayout === 1) {
                return [visualLayout1, landScape, landScape]; // Return an array with visualLayout1, visualClass1, and visualClass2
            } else if (sectionLayout === 2) {
                return [visualLayout2, portrait, portrait]; // Return an array with visualLayout2, visualClass2, and visualClass2
            } else if (sectionLayout === 3) {
                return [visualLayout3, landScape, landScape, portrait]; // Return an array with visualLayout3, visualClass3, and visualClass3
            } else {
                return [visualLayout1, landScape, landScape];
            }
        }
        // Return a default layout if projectData is not available or if the project is not found
        return ["default-layout", "", ""]; // Default values for an array if layout not found
    };


    const aboutAnimationsEntry = (target) => {
        const elementsToAnimate = target.querySelectorAll(".animateOnEntry");

        elementsToAnimate.forEach((element) => {
            element.classList.add("opacity-0");

            animate(element, {
                opacity: 1,
                transform: "scale(1)"
            }, {
                duration: 1,
                easing: "ease-out"
            });
        });
    };


    useEffect(() => { // Fetch project details based on projectKey from Projects
        projectDetails = projects.find((project) => project.key === projectKey);

        if (projectDetails) {

            setProjectData(projectDetails);

            // Call the animations after the page has been built
            setTimeout(() => {
                inView(".pageWrap", ({target}) => {
                    aboutAnimationsEntry(target);
                    console.log("In view:", target);
                })
            }, 1000);


            console.log(getSectionLayout(projectDetails, 'identityLayout'))


        } else { // Handle project not found (optional)
            console.error(`Project with key "${projectKey}" not found`);
            // Set an empty object or handle it in a way that suits your application
            setProjectData({});

        }


    }, [projectKey]);


    return (
        <div className=" pageWrap text-NightFall leading-relaxed  overflow-hidden bg-white">
            {
            projectData ? (

                <>
                    <LandingSection projectData={projectData}/>


                    <section id='prologue'
                        className={
                            `relative justify-center items-center flex-col flex  ${marginExpression}`
                    }>
                        <PrologueSection projectData={projectData}
                            sectionLayout={
                                getSectionLayout(projectData, "prologueLayout")
                            }
                            margins={margins}/>
                    </section>

                    <section id='ambition'
                        className={`w-full flex-col items-center  sm:p-0  relative justify-center
                          flex ${marginExpression} `
                        }>

                        <AmbitionSection projectData={projectData}
                            sectionLayout={
                                getSectionLayout(projectData, "ambitionLayout")
                            }
                            margins={margins}/>

                    </section>
                    <section id='challenge'
                        className={
                            `flex flex-col justify-center ${marginExpression} items-center w-[100vw]`
                    }>

                        <ChallengeSection projectData={projectData}
                            sectionLayout={
                                getSectionLayout(projectData, "challengeLayout")
                            }
                            margins={margins}/>
                    </section>


                    <section id="projectInfo3"
                        className={
                            `flex flex-col ${marginExpression} justify-center items-center`
                    }>
                        <ApproachSection projectData={projectData}
                            sectionLayout={
                                getSectionLayout(projectData, "approachLayout")
                            }
                            margins={margins}/>

                    </section>
                    <section id='projectInfo4'
                        className={
                            ` ${marginExpression} flex flex-col justify-center items-center`
                    }>
                        <IdentitySection projectData={projectData}
                            sectionLayout={
                                getSectionLayout(projectData, "identityLayout")
                            }
                            margins={margins}/>

                    </section>

                    <section id='projectInfo5'
                        className={
                            `${marginExpression} flex flex-col justify-center items-center`
                    }>

                        <EpilogueSection projectData={projectData}
                            sectionLayout={
                                getSectionLayout(projectData, "epilogueLayout")
                            }
                            margins={margins}/>


                    </section>
                    <div className='flex justify-center items-center'>
                        <h1 id='finalWords' className='text-3xl  sm:text-5xl font-Lora font-medium p-6 my-20 sm:p-10'>
                            {
                            projectData.finalWords
                        } </h1>
                    </div>


                </>
            ) : (
                <p>Loading...</p>
            )
        } </div>

    );
};

export default ProjectPage;
