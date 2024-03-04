import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import ProjectTextBlock from './projectTextBlock';

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
    <motion.section animate={controls} variants={variants} ref={ref} id='challenge' className={`${margins[0]}`}>
      <div className="w-full flex justify-center items-center flex-col sm:p-0 ">

        <ProjectTextBlock sectionHead={challengeHead} sectionName={"Challenge"} sectionDescription={challengeDescription} margins={margins} />
        

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
