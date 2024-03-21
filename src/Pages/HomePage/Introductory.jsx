import React,{useEffect,useRef} from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import AnimatedParagraph from '../../Modules/paragraphAnimator';
// import minimalImg from '../../assets/introductory2.webp';


function Introductory() {
  const margin = 20;
  const marginExpression = `my-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin)}`;

  const scrollRef = useRef(null); // Create a ref for the scrollable element


  return (
    <section ref={scrollRef}
      id="Introductory"
      className={`relative  h-[80vh]  justify-start ${marginExpression} `}
    >
      <div className="  w-full flex flex-col items-center  sm:p-0">
        {/* <img src={minimalImg} alt="Minimalistic image" className="w-[32rem] aspect-video object-cover z-0" /> */}
        
        
      </div>
      
      {/* <div className="sticky h-12 top-48 border-2 border-solid align-baseline w-1/2 left-12 z-10"> */}
      <AnimatedParagraph  inputText="We tell stories to empower visibility!" textStyle="text-5xl font-Lora" />
          <AnimatedParagraph scrollRef={scrollRef} textStyle="text-3xl font-satoshi-light" inputText="Halifax Based studio" />

        {/* </div> */}

    </section>
  );
}


export default Introductory;
