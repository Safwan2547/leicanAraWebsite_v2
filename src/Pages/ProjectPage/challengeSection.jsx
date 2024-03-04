import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

const ChallengeSection = ({ projectData, sectionLayout, margins }) => {
  const { challengeHead, challengeDescription, challengeContent1, challengeContent2 } = projectData;

  const controls = useAnimation();
  const ref=useRef(null);
  const  inView  = useInView(ref);

  const variants = {
    visible: { opacity: 1, transition: { duration: 0.5,delay:0.3, ease: "easeInOut" } },
    hidden: { opacity: 0},
  };

  useEffect(() => {
    console.log("approach inview: "+ inView)
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView]);


  return (
    <motion.section animate={controls} variants={variants} ref={ref} id='challenge' className={``}>
      <div className="w-full flex justify-center items-center flex-col sm:p-0 ">
        <div className='p-6 w-2/3 sm:p-0'>
          <p className='text-sm sm:text-2xl animateOnEntry textP font-light font-Satoshi'>Challenge:</p>
          <div id='line' className='h-20 rounded-sm w-[1px] animateOnEntry sm:w-0.5  bg-black'></div>
          <h1 id='challengeHead' className={`text-3xl animateOnEntry textC font-medium ${margins[2]} sm:text-5xl font-Lora`}>{challengeHead}</h1>
          <p id='challengeDescription' className={`font-Satoshi animateOnEntry ${margins[2]} textP text-balance hyphens-auto max-w-[35em] font-light opacity-80 text-sm sm:text-2xl`}>{challengeDescription}</p>
        </div>

        <div id='challengeLayout' className={sectionLayout}>
          {challengeContent1 && (
            challengeContent1.endsWith('.mp4') ? (
              <video alt={challengeContent1} autoPlay loop muted className={`${sectionLayout[1]}`}>
                <source src={challengeContent1} type="video/mp4" />
              </video>
            ) : (
              <img className={`${sectionLayout[1]}`} src={challengeContent1} alt={challengeContent1} />
            )
          )}

          {/* Challenge Content 2 */}
          {challengeContent2 && (
            challengeContent2.endsWith('.mp4') ? (
              <video alt={challengeContent2} autoPlay loop muted className={`${sectionLayout[2]}`}>
                <source src={challengeContent2} type="video/mp4" />
              </video>
            ) : (
              <img className={`${sectionLayout[2]}`} src={challengeContent2} alt={challengeContent2} />
            )
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ChallengeSection;
