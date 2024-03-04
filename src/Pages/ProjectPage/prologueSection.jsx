// PrologueSection.jsx
import React, { useEffect,useRef } from 'react';
import { useAnimation,motion, useInView } from 'framer-motion';
import ProjectTextBlock from './projectTextBlock';

const PrologueSection = ({ projectData, sectionLayout,margins }) => {
  const { prologueHead, prologueDescription, prologueContent1, prologueContent2 } = projectData;

  const controls = useAnimation();
  const ref=useRef(null);
  const  inView  = useInView(ref);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1,ease:"easeInOut" } },
    hide: { opacity: 0 },
  };
useEffect(() => {
  if (inView) {
    controls.start('visible');
  } else {
    controls.start('hide');
  }
},[inView])

   


  

  return (
    <motion.section animate={controls} variants={variants} ref={ref} id='prologue' className={``}>
      <div className="w-full  flex justify-between items-center flex-col sm:p-0 ">
        <ProjectTextBlock sectionHead={prologueHead} sectionName={"Prologue"} sectionDescription={prologueDescription} margins={margins} />

        <div id='prologueLayout' className={sectionLayout}>
          {prologueContent1 && (
            prologueContent1.endsWith('.mp4') ? (
              <video alt={prologueContent1} autoPlay loop muted className={`${sectionLayout[1]}`}>
                <source src={prologueContent1} type="video/mp4" />
              </video>
            ) : (
              <img className={`${sectionLayout[1]}`} src={prologueContent1} alt={prologueContent1} />
            )
          )}

          {/* Prologue Content 2 */}
          {prologueContent2 && (
            prologueContent2.endsWith('.mp4') ? (
              <video alt={prologueContent2} autoPlay loop muted className={`${sectionLayout[2]}`}>
                <source src={prologueContent2} type="video/mp4" />
              </video>
            ) : (
              <img className={`${sectionLayout[2]}`} src={prologueContent2} alt={prologueContent2} />
            )
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default PrologueSection;
