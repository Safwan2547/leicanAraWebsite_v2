import { invariant } from 'framer-motion';
import { inView,animate } from 'motion';
import React, { useRef,useState, useEffect } from 'react';



function Introductory(){

//These define the margins    
    const margin=20;

    const marginExpression = `my-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin)} `;
// Use this to separate elements within sections
const marginExpression2 = `mt-${Math.floor(margin / 2)} sm:mt-${Math.floor(margin / 4)}`;
// Use this to separate things that should be close together, such as headers and descriptions, etc.
const marginExpression3 = `mt-${Math.floor(margin / 4)} sm:mt-${Math.floor(margin / 8)}`;


const introductoryAnimate=(target)=>{

    animate(
        target.querySelector('p'),
        { opacity: 1,transform: "scale(1)" },
        {  duration: 0.5,delay:0.1, easing:"ease-in-out" }
      );

    animate(
        target.querySelector('#line'),
        { opacity: 1,transform: "scale(1)" },
        {  duration: 0.5,delay:0.3, easing:"ease-in-out" }
      );

    animate(
      target.querySelector("h1"),
      { opacity: 1,transform: "scale(1)" },
      {  duration: 0.5,delay:0.5, easing:"ease-in-out" }
    );

  
    
    animate(
      target.querySelector('#introductoryDescription'),
      { opacity: 0.8,transform: "scale(1)" },
      {  duration: 0.5,delay:0.7, easing:"ease-in-out" }
    );
  
  
    
  
   }

   useEffect(()=>{
    inView("#group", ({ target }) => {

    introductoryAnimate(target);


    })

   })






return(


    <section id='Introductory' className={`relative justify-start ml-20
    flex just sm:mt-12 sm:mb-32`}>
     <div  className="w-full  sm:p-0 sm:w-2/3 ">
       <div id="group" className='p-6  sm:p-0'>
     <p className='text-sm sm:text-2xl textP font-light scale-[99%]  font-Satoshi'>Who we are:</p>
     <div id='line' className='h-20 rounded-sm w-[1px] sm:w-0.5 opacity-0 bg-black'></div>
     <h1 id='IntroductoryHead' className={`text-3xl opacity-0 scale-[99%] ${marginExpression3} textC font-medium sm:text-5xl font-Lora`}> 
     
     To Eliminate invisibility
   
     </h1>

     <p id='introductoryDescription' className={`opacity-0 font-Satoshi  textP text-balance hyphens-auto max-w-[35em] ${marginExpression3} font-light  text-sm sm:text-2xl`} >Our mission at LeicanAra is to create captivating designs that help our partners share their unique stories with the world. We aim to provide businesses with a soul, crafting ideas that truly connect with and inspire customers. </p>
      </div>
      <div className={`flex justify-center drop-shadow items-center w-full `}>

     </div>

     </div>

     </section>








);
}
export default Introductory;
