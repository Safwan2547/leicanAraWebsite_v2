import React, { useRef,useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TransitionCover from './TransitionCover';
import TransitionLink from './TransitionLink';
import { animate, scroll, inView,timeline,spring, } from "motion";


// import DropdownMenu from './DropDown';

const Navbar = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navBar=document.getElementById("navBar");


    const navAnimations=[

      [navBar, { opacity: 0,y:0 }], 
      [navBar,{ opacity: 1, y:0}, { duration: 2, easing:"cubic-bezier(.16,1.17,1,.98)"}]
  
    ]
    useEffect(() => {

        animate("nav",{opacity:1}, {duration : 1,delay:1})
    },[]);

    
    useEffect(() => {

        const timer = setTimeout(() => setIsMounted(true),400);
         
        
      
        
      
        return () => {
          clearTimeout(timer)
        };
    
    }, []); 



    return (
        <nav id="navBar" className={`   appearance-none transition-color opacity-0 ease-expo 
        flex align-baseline justify-between fixed top-8 left-8 right-8 sm:left-5 sm:right-5 sm:top-8 sm:mr-5 sm:ml-5 z-10`} >
            
            <TransitionLink to="/" className='mix-blend-difference opacity-100 navItem antialiased transform transition-button duration-500 hover:scale-105
             hover:text-LunarTwilight hover:animate-pulse-slow 
             buttonC font-Satoshi text-4xl sm:text-4xl ease-in-out  font-light cursor-none'>
              LeicanAra</TransitionLink>
            <div className="links flex justify-between items-center space-x-8">
            <Link to="" className=' navItem opacity-80 sm:hidden bg-none  text-white font-bold w-full flex justify-center align-middle items-center h-6  rounded-full relative'>
          

            <button className=' w-8'>
            <div className="absolute inset-x-0 top-1/2 bg-black h-1 w-8 rounded-lg transform -rotate-90"></div>
            <div className="absolute inset-x-0 top-1/2 bg-black h-1 w-8 rounded-lg transform flex justify-between"></div>
            </button>

            
                </Link>
               
                <TransitionLink 
                  to="/AboutPage" 
                  className='navItem hover:animate-pulse-slow opacity-100 hover:text-LunarTwilight 
                  transform ease-in-out transition-button duration-500 hover:scale-110 hidden lg:block buttonC font-Satoshi text-2xl font-light cursor-none '>
                  about
                </TransitionLink>
                 {<TransitionLink to="/FAQPage"  className=' ease-in-out navItem hover:animate-pulse-slow opacity-100 hover:text-LunarTwilight transform transition-button duration-500 hover:scale-110 hidden lg:block buttonC font-Satoshi text-2xl font-light cursor-none '>faq</TransitionLink> }


            </div>
           
         
        </nav>
    );
};

export default Navbar;