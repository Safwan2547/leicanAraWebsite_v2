import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import ProjectTextBlock from './projectTextBlock';

const ApproachSection = ({ projectData, sectionLayout, margins }) => {
  const { approachHead, approachDescription, approachContent1, approachContent2, approachContent3 } = projectData;

  const controls = useAnimation();
  const ref=useRef(null);
  const  inView  = useInView(ref);

  const variants = {
    visible: { opacity: 1, transition: { duration: 0.5,delay:0.3, ease: "easeInOut" } },
    hidden: { opacity: 0},
  };

  useEffect(() => {
    console.log("approach inview: "+ inView)
    
  }, [inView]);


  return (
    <motion.section animate={controls} ref={ref} variants={variants} id='approach' className={`flex flex-col justify-center items-center ${margins[0]}`}>
      
      <ProjectTextBlock sectionHead={approachHead} sectionName={"Approach"} sectionDescription={approachDescription} margins={margins} />
      <div className={sectionLayout[0]}>
        {approachContent1 && approachContent1.endsWith('.mp4') ? (
          <video alt={approachContent1} autoPlay loop muted className={`${sectionLayout[1]}`} src={approachContent1}></video>
        ) : (
          <img className={`${sectionLayout[1]}`} src={approachContent1} alt={approachContent1} />
        )}

        {approachContent2 && approachContent2.endsWith('.mp4') ? (
          <video alt={approachContent2} autoPlay loop muted className={`${sectionLayout[2]}`} src={approachContent2}></video>
        ) : (
          <img className={`${sectionLayout[2]}`} src={approachContent2} alt={approachContent2} />
        )}

        {/* Render approachContent3 if it exists */}
        {approachContent3 && (
          approachContent3.endsWith('.mp4') ? (
            <video alt={approachContent3} autoPlay loop muted className={`${sectionLayout[3]}`} src={approachContent3}></video>
          ) : (
            <img className={`${sectionLayout[3]}`} src={approachContent3} alt={approachContent3} />
          )
        )}
      </div>
    </motion.section>
  );
};

export default ApproachSection;
