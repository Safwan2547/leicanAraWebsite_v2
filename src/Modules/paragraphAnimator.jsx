import React, { useEffect,useRef } from 'react';
import { motion, useScroll, useTransform,useSpring } from 'framer-motion';

const AnimatedParagraph = (inputText,textSize) => {
  // Ensure this is a string. The error could happen if this was not properly defined or mistyped.
  const paragraph = inputText.inputText || "default";
  const words = paragraph.split(" "); // Splitting the string into an array of words.
  const ref = useRef(null)

  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end end"]

    
    
  }) 
  useEffect(() => {
    console.log("text size="+textSize);
  }, [textSize]);
  
  return (
      <div ref={ref} className={` h-12 top-24   align-baseline w-1/2  z-10 text-${textSize}xl max-w-xl mx-auto`}>
        {words.map((word, index) => {
          // Calculate start and end range for each word based on its position in the array
          const rangeStart = 1-(index / words.length);
          const rangeEnd = 1-(index + 1) / words.length;

          const opacity = useSpring(useTransform(scrollYProgress, [rangeStart, rangeEnd], [0, 1]),{ stiffness: 100, damping: 10 });

          return (
            <motion.span key={index} style={{ opacity }} className="mr-2">
              {word}
            </motion.span>
          );
        })}
      </div>
  );
};

export default AnimatedParagraph;