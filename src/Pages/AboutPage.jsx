import React, { useEffect } from 'react';
import thumbNail from '../Assets/Artboard5.webp';
import { inView,animate,timeline } from "motion"

function AboutPage() {

    //The margin constants are used to determine the margin between sections
  //Must apply the biggest margin value
  //The value must be available for use in tailwindCss or the margin wont work
  const margin=20;
  const scrollTest=document.getElementById("#prologue");



// Use this to separate sections
const marginExpression = `mt-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin)}`;
// Use this to separate elements within sections
const marginExpression2 = `mt-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin / 4)}`;
// Use this to separate things that should be close together, such as headers and descriptions, etc.
const marginExpression3 = `mt-${Math.floor(margin / 4)} sm:mt-${Math.floor(margin / 8)}`;

const animations=({target})=>{

  animate(target.querySelector("#line"),{opacity:0},{duration:1});
}
const aboutPageAnimate=[
  // Initial state: set opacity to 0
  ["h4", { opacity: 0,y:5,transform:"scale(0.99)"}],
  ["#philosophyHead", { opacity: 0}],  
  ["#p1",{opacity:0}],
  ["#p2",{opacity:0}],
  ["#p3",{opacity:0}],


  // Final state: set opacity to desired value
  
  ["h4",{ opacity: 1,y:0,transform:"scale(1)"}, { duration: 1, easing:"cubic-bezier(.16,1.17,1,.98)"}],
  ["#line",{ opacity: 1,y:0,transform:"scale(1)"}, { duration: 1, easing:"cubic-bezier(.16,1.17,1,.98)"}],
  ["#philosophyHead",{ opacity: 1,y:0,transform:"scale(1)"}, { duration: 1, easing:"cubic-bezier(.16,1.17,1,.98)"}],
  ["#p1",{ opacity: 1,y:0,transform:"scale(1)"}, { duration: 1, easing:"cubic-bezier(.16,1.17,1,.98)"}],
  ["#p2",{ opacity: 1,y:0,transform:"scale(1)"}, { duration: 1, easing:"cubic-bezier(.16,1.17,1,.98)",at:"<"}],
  ["#p3",{ opacity: 1,y:0,transform:"scale(1)"}, { duration: 1, easing:"cubic-bezier(.16,1.17,1,.98)",at:"<"}],

];

useEffect(()=>{
timeline(aboutPageAnimate,{duration:2.5});


})

  return (
    <div>
      <section className='w-screen h-screen flex flex-col justify-center items-center' id="Landing">
      <div id='philosophy' className='w-full  sm:p-0 p-6 sm:w-2/3 font-Satoshi'>
          <h4 className=' opacity-0 text-sm sm:text-2xl  textP font-light font-Satoshi'>Philosophy:</h4>
          <div id='line' className='h-20 scale-[90] opacity-0 rounded-sm w-[1px] sm:w-0.5 bg-black'></div>
          <h1 id='philosophyHead'  className={`${marginExpression3} opacity-0 scale-[99%] text-3xl textC font-medium sm:text-5xl font-Lora`}> 
          Strings That Bind Us
            </h1>
         <p id='p1' className={`font-Satoshi opacity-0 text-2xl max-w-[35em] ${marginExpression2} font-light`}>From time beginning of time, we humans gathered around fires, sharing stories that formed a connection between us.
         </p>

      <p id='p2' className={` ${marginExpression3} opacity-0 font-Satoshi text-2xl max-w-[35em] font-light`}>At Leicanara, we inherit this tradition, recognizing storytelling as a 
      vibrant thread of human connection, a string binding us all together.
       We believe in the power of stories, each a precious gem, crafted in the heart and 
       polished by our time here. </p>

       <p id="p3" className={` ${marginExpression3} opacity-0 font-Satoshi text-2xl max-w-[35em] font-light`}>We invite you to join us around the warmth of our fire. 
       Let us spotlight your brand's uniqueness, its struggles and triumphs,
        spinning a narrative that resonates and inspires. Your story deserves to be told, 
        and with us, we will weave it into the rope that binds us all, one heartfelt string at a
         time. </p>

          </div>
      
        
      </section>
    </div>
  );
}

export default AboutPage;
