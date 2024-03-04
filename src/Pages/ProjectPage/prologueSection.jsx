// PrologueSection.jsx
import React, { useEffect,useRef } from 'react';
import { useAnimation,motion, useInView } from 'framer-motion';

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
      <div className="w-full flex justify-center items-center flex-col sm:p-0 ">
        <div id='prologueText' className='p-6 w-2/3  sm:p-0'>
          <p className='text-sm sm:text-2xl animateOnEntry textP font-light font-Satoshi'>Prologue:</p>
          <div id='line' className='h-20  rounded-sm w-[1px] animateOnEntry sm:w-0.5  bg-black'></div>
          <h1 id='prologue' className={`text-3xl animateOnEntry textC font-medium ${margins[2]} sm:text-5xl font-Lora`}>{prologueHead}</h1>
          <p id='prologueDescription' className={`font-Satoshi animateOnEntry ${margins[2]} textP text-balance hyphens-auto max-w-[35em] font-light opacity-80 text-sm sm:text-2xl`}>{prologueDescription}</p>
        </div>

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
