import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import landingVid from '../../Assets/Website landing 1.mp4';

function LandingPage() {
  const controls = useAnimation();
  const controlsHeader = useAnimation();

  const landingAnimations = [
    ['.landingAnimations', { clipPath:"circle(150% at 0% 0)", opacity: 1 }, {duration:1.5, ease: "cubic-bezier(.16,1.17,1,.98)" }],
    ['.landingAnimations', { opacity: 1, scale: 1 }, {duration:1.5, ease: "cubic-bezier(.42,0,.13,1.17)" ,at: "<" }]
  ];

  useEffect(() => {
    controls.start({ opacity: 1, scale: 1 });
    controlsHeader.start({ opacity: 1 });
  }, [controls, controlsHeader]);

  return (
    <div className="">
      <div className={`transition-opacity overflow-hidden duration-1000 sm:ml-0 overflow-x-hidden flex flex-col sm:flex-wrap justify-center sm:items-center sm:justify-items-start h-screen prose prose-sm lg:prose-xl text-MainBeige relative`}>
        <div className="z-1 w-screen h-screen absolute flex justify-center items-center outline-none">
          <motion.video
            className="w-full  scale-90 absolute sm:scale-[50%] border-none overflow-hidden object-cover hover:none"
            controls={false} autoPlay muted loop
            
            transition={{ duration: 3,ease: "circInOut" }}
            src={landingVid}
            type="video/mp4"
          />
        </div>

        <div strength={100} className='opacity-100 text-NightFall hidden sm:flex sm:absolute hover:text-LunarTwilight transition-text duration-200 bottom-[10%] w-2/3 flex-col z-3 perspective-800'>
          <motion.h1
            style={{ clipPath: 'circle(0% at 0% 0)' }}
            data-speed="6"
            id='hero_line'
            className={`relative  landingAnimations scale-[90%] font-extralight tracking-wide textC mb-5 opacity-100 landingItem1 group text-NightFall font-Lora sm:text-5xl text-center leading-none`}
            initial={{  clipPath: 'circle(0% at 0% 0)', scale: 0.90 }}
            animate={{ clipPath: 'circle(150% at 0% 0)',scale: 1}}
            transition={{delay:0.7, duration: 1.5,ease: "circInOut" }}
          >
            <span className='textC text-LunarTwilight opacity-100 font-normal text-8xl'>Storytellers</span> <span className='opacity-100'>for</span> <br></br><span className='opacity-100'>the</span> <span className='textC font-normal text-LunarTwilight opacity-100 text-8xl'>Visionaries</span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
