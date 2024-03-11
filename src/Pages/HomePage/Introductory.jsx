import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import ProjectTextBlock from '../ProjectPage/projectTextBlock';
import mediaContent from '../ProjectPage/mediaContent';
import minimalImg from '../../assets/introductory2.webp';

function Introductory() {
  // These define the margins
  const margin = 20;

  const marginExpression = `my-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin)}`;
  // Use this to separate elements within sections
  const marginExpression2 = `mt-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin / 4)}`;
  // Use this to separate things that should be close together, such as headers and descriptions, etc.
  const marginExpression3 = `mt-${Math.floor(margin / 4)} sm:mt-${Math.floor(margin / 8)}`;

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref );
  

  const variants = {
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    hidden: { opacity: 0},
  };

  useEffect(() => {
    console.log("intro inview: "+ inView)
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView]);

  return (
    <section
      id='Introductory'
      className={`relative h-[90vh] justify-start  flex just ${marginExpression}  `}
    >
      <div className="w-full flex justify-center items-center flex-col relative sm:p-0">
        <img src={minimalImg} alt="Minimalistic image" className="w-[32rem] left-36 aspect-video absolute object-cover" />
        <ProjectTextBlock sectionHead={" We tell stories to empower visibility!"} sectionName={""} sectionDescription={"LeicanAra is a branding-focused creative studio specializing in storytelling. We craft distinctive ideas that forge connections between businesses and customers, while eradicating market invisibility."}  />
      </div>
    </section>
  );
}

export default Introductory;
