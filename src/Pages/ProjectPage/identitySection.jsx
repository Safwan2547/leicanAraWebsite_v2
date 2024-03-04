import React, { useEffect,useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

const IdentitySection = ({ projectData, sectionLayout, margins }) => {
  const { identityHead, identityDescription, identityContent1, identityContent2 } = projectData;

  const controls = useAnimation();
  const ref=useRef(null);
  const  inView  = useInView(ref);

  const variants = {
    visible: { opacity: 1, transition: { duration: 0.5,delay:0.3, ease: "easeInOut" } },
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
    <motion.section
      id="identity"
      className={`flex flex-col justify-center items-center ${margins[0]}`}
      ref={ref}
      
      animate={controls}
      variants={variants}
    >
      <div className="w-full sm:p-0 p-6 sm:w-2/3 font-Satoshi">
        <h4 className="text-sm sm:text-2xl textP font-light font-Satoshi">Identity:</h4>
        <div className="h-20 rounded-sm w-[1px] sm:w-0.5 bg-black"></div>
        <h1 className={`${margins[2]} text-3xl textC font-medium sm:text-5xl font-Lora`}>{identityHead}</h1>
        <p className={`font-Satoshi textP opacity-80 ${margins[2]} text-balance hyphens-auto max-w-[35em] font-light text-sm sm:text-2xl`}>{identityDescription}</p>
      </div>

      <motion.div
       
        className={sectionLayout[0]}
        animate={controls}
        variants={variants}
      >
        {identityContent1 && identityContent1.endsWith('.mp4') ? (
          <motion.video
            alt={identityContent1}
            autoPlay
            loop
            muted
            className={`${sectionLayout[1]}`}
            src={identityContent1}
          ></motion.video>
        ) : (
          <motion.img
            className={`${sectionLayout[2]}`}
            src={identityContent1}
            alt={identityContent1}
          />
        )}

        {identityContent2 && identityContent2.endsWith('.mp4') ? (
          <motion.video
            alt={identityContent2}
            autoPlay
            loop
            muted
            className={`${sectionLayout[1]}`}
            src={identityContent2}
          ></motion.video>
        ) : (
          <motion.img
            className={`${sectionLayout[2]}`}
            src={identityContent2}
            alt={identityContent2}
          />
        )}
      </motion.div>
    </motion.section>
  );
};

export default IdentitySection;
