import React,{useEffect,useRef} from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import AnimatedParagraph from '../../Modules/paragraphAnimator';
// import minimalImg from '../../assets/introductory2.webp';


function Introductory() {
  const margin = 20;
  const marginExpression = `my-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin)}`;

  const scrollRef = useRef(null); // Create a ref for the scrollable element


  return (
    <section 
    scrollRef={scrollRef}
      id="Introductory"
      className={`relative  h-[70vh] overflow-clip  justify-start ${marginExpression} `}
    >
      <div className="  w-full flex flex-col items-center  sm:p-0">
        {/* <img src={minimalImg} alt="Minimalistic image" className="w-[32rem] aspect-video object-cover z-0" /> */}
        
        
      </div>
      
      <div className=" h-12 top-[50vh] max-w-[35rem] text-wrap align-baseline  z-10">
      <AnimatedParagraph  inputText="We tell stories to empower visibility!" textStyle="text-5xl font-Lora" />
        <AnimatedParagraph  textStyle="text-3xl font-satoshi-light " inputText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        " />


        </div>

    </section>
  );
}


export default Introductory;
