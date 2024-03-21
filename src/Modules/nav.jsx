import React, { useRef,useState, useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
import TransitionCover from './TransitionCover';
import TransitionLink from './TransitionLink';
import NavMenu from './navMenu';

import { animate, scroll, inView,timeline,spring, } from "motion";


// import DropdownMenu from './DropDown';

const Navbar = ({toggleNav,navOpen}) => {
    const [isMounted, setIsMounted] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    const buttonRef = useRef(null);

    const location = useLocation();

    useEffect(() => {
        setIsMounted(true);
    }, []);



    const navBar=document.getElementById("navBar");
  


    const getNavbarTitle = () => {
      switch (location.pathname) {
          case '/starfall':
              return ' x Starfall';
          case '/svava':
              return ' x Sväva';
          default:
              return '';
      }
  };


    const navAnimations=[

      [navBar, { opacity: 1 }], 
      [navBar,{ opacity: 1, y:-10}, { duration: 2, easing:"cubic-bezier(.16,1.17,1,.98)"}]
      
  
    ]
    useEffect(() => {

        animate("nav",{opacity:1}, {duration : 1,delay:1,easing:"ease-in-out"})
        const timer = setTimeout(() => setIsMounted(true), 400);
        return () => clearTimeout(timer);
    },[location]);

    
    useEffect(() => {

        const timer = setTimeout(() => setIsMounted(true),400);

                animate("nav",{opacity:1}, {duration : 1,delay:1,easing:"ease-in-out"})

         
        
      
        
        
        return () => {
          clearTimeout(timer)
        };
    
    }, []); 



    return (
        <nav id="navBar" className={`  appearance-none transition-color opacity-0 ease-expo 
        flex align-baseline justify-between fixed top-8 left-8 right-8 sm:left-5 sm:right-5 sm:top-8 sm:mr-5 sm:ml-5 z-20 `}  >
            <div onClick={()=>toggleNav(false)}>
              
            <TransitionLink to="/" className={`${navOpen?"text-MainBeige":"text-NightFall" } opacity-90 navItem antialiased transform transition-button duration-500 hover:scale-110
             hover:text-LunarTwilight hover:animate-pulse-slow 
             buttonC font-satoshi-light text-4xl sm:text-4xl ease-in-out   cursor-none`} >
                LeicanAra </TransitionLink> <span className={`textP  text-3xl font-satoshi-light ${navOpen?"text-MainBeige":"text-NightFall" } transition-all duration-500 `}> {getNavbarTitle()}</span>
              </div>
            <div className="links flex justify-between items-center space-x-8">
           
               
               
                 
                 <button className={` h-full w-24 group justify-center items-center flex-col flex  ease-in-out navItem hover:animate-pulse-slow   transform transition-button duration-500 hover:scale-110 relative buttonC font-Satoshi text-2xl font-light cursor-none `} onClick={()=>toggleNav(true)} >
                    <div className={`group-hover:bg-LunarTwilight  buttonC absolute ease-in-out cursor-none  h-[0.2rem] ${navOpen?"bg-MainBeige w-10 rotate-45":"w-12 translate-y-1 bg-NightFall" } rounded-xl  transition-all duration-1000 `}></div>
                    <div className={` group-hover:bg-LunarTwilight buttonC cursor-none h-[0.2rem] ${navOpen?"bg-MainBeige w-10 rotate-[315deg]":"w-8  bg-NightFall -translate-y-1" } rounded-lg ease-in-out absolute transition-all duration-1000 `}></div>

                     </button>
                 


            </div>
           
         
        </nav>
    );
};

export default Navbar;