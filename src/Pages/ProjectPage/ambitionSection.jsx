import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import ProjectTextBlock from './projectTextBlock';
import MediaContent from './mediaContent';

const AmbitionSection = ({ projectData, sectionLayout, margins }) => {
  const { ambitionHead, ambitionDescription, ambitionContent1, ambitionContent2 } = projectData;

  const controls = useAnimation();
  const ref=useRef(null);
  const  inView  = useInView(ref);

  const variants = {
    visible: { opacity: 1, transition: { duration: 0.5,delay:0.3, ease: "easeInOut" } },
    hidden: { opacity: 0},
  };

  useEffect(() => {
    console.log("ambition inview: "+ inView)
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView]);

  return (
    <motion.section
   
  
      id='ambition'
      className={`${margins[0]} `}
    >
      <motion.div  className="w-full flex justify-center items-center flex-col sm:p-0 ">
        <ProjectTextBlock sectionHead={ambitionHead} sectionName={"Ambition"} sectionDescription={ambitionDescription} margins={margins} />

        <motion.div animate={controls}
      variants={variants} ref={ref} id='ambitionLayout' className={sectionLayout}>
          <MediaContent media={ambitionContent1}  isVideo={ambitionContent1 && ambitionContent1.endsWith('.mp4')} className={sectionLayout[1]} />
          <MediaContent media={ambitionContent2} alt={ambitionContent2} isVideo={ambitionContent2 && ambitionContent2.endsWith('.mp4')} className={sectionLayout[2]} />
    
        </motion.div >
      </motion.div >
    </motion.section>
  );
};

export default AmbitionSection;
