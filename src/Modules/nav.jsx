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
    },[]);

    
    useEffect(() => {

        const timer = setTimeout(() => setIsMounted(true),400);

                animate("nav",{opacity:1}, {duration : 1,delay:1,easing:"ease-in-out"})

         
        
      
        
        
        return () => {
          clearTimeout(timer)
        };
    
    }, []); 



    return (
        <nav id="navBar" className={`  appearance-none transition-color opacity-0 ease-expo 
        flex align-baseline justify-between fixed top-8 left-8 right-8 sm:left-5 sm:right-5 sm:top-8 sm:mr-5 sm:ml-5 z-10 `}  >
            <div onClick={()=>toggleNav(false)}>
              
            <TransitionLink to="/" className={`${navOpen?"text-MainBeige":"text-NightFall" } opacity-90 navItem antialiased transform transition-button duration-500 hover:scale-110
             hover:text-LunarTwilight hover:animate-pulse-slow 
             buttonC font-Satoshi text-4xl sm:text-4xl ease-in-out  font-light cursor-none`} >
                LeicanAra </TransitionLink> <span className={`textP  text-3xl font-light font-Satoshi ${navOpen?"text-MainBeige":"text-NightFall" } transition-all duration-500 `}> {getNavbarTitle()}</span>
              </div>
            <div className="links flex justify-between items-center space-x-8">
           
               
               
                 
                 <button className={`${navOpen?"text-MainBeige":"text-NightFall" }  ease-in-out navItem hover:animate-pulse-slow  hover:text-LunarTwilight transform transition-button duration-500 hover:scale-110 hidden lg:block buttonC font-Satoshi text-2xl font-light cursor-none `} onClick={()=>toggleNav(true)} > Menu</button>
                 


            </div>
           
         
        </nav>
    );
};

export default Navbar;