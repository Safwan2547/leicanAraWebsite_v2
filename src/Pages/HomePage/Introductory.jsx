import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

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
      className={`relative h-[30vh] justify-start ml-10 flex just ${marginExpression} sm:ml-24 sm:mb-32`}
    >
      <div className="w-full sm:p-0 sm:w-2/3">
        <motion.div
          ref={ref}
          
          animate={controls}
          variants={variants}
          id="group"
          className={`p-6 sm:p-0`}
        >
          <h1
            id='IntroductoryHead'
            className={`text-3xl ${marginExpression3} textC font-light sm:text-5xl font-Lora`}
          >
            We tell stories to empower visibility!
          </h1>
          <p
            id='introductoryDescription'
            className={`font-satoshi-light ${marginExpression3} textP hyphens-auto max-w-[45rem] font-light text-pretty text-xl sm:text-2xl`}
          >
            LeicanAra is a branding-focused creative studio specializing in storytelling. We craft
            distinctive ideas that forge connections between businesses and customers, while
            eradicating market invisibility.
          </p>
        </motion.div>
        <div className={`flex justify-center drop-shadow items-center w-full`}></div>
      </div>
    </section>
  );
}

export default Introductory;
