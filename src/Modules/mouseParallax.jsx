import React, { useEffect } from 'react';
import {animate,spring, scroll, inView } from "motion"

/**
 * MouseParallax - A function designed to create a parallax effect relative to the mouse position.
 *
 * Approach:
 * 1. Get all elements with the class 'mouseParallax'.
 * 2. Get the mouse position on mouse movement.
 * 3. Establish the center point of the viewport.
 * 4. Calculate the displacement between the mouse and the center point.
 * 5. Translate each target element based on the mouse displacement, reduced by a factor,
 *    ensuring elements never leave the viewport.
 */
function MouseParallax() {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.mouseParallax');
    let xVal = 0;
    let yVal = 0;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const parallaxFactor = 0.02;
    console.log(parallaxElements);

    const handleMouseMove = (e) => {
      xVal = e.clientX;
      yVal = e.clientY;
      const skewFactor=-0.05
      parallaxElements.forEach((element) => {
        const xDisplacement = xVal - centerX;
        const yDisplacement = yVal - centerY;

        const elementX = element.offsetLeft + element.offsetWidth / 2;
        const elementY = element.offsetTop + element.offsetHeight / 2;

        const xParallax = xDisplacement - elementX;
        const yParallax = yDisplacement - elementY;

        const speed=element.dataset.speed;
        

        animate(element, {
          translateX: xParallax * parallaxFactor*speed,
          translateY: yParallax * parallaxFactor*speed,
        }, {
          // Adjust the duration to control the "drag" effect
         easing: spring({mass:10,stiffness:300, damping: 500,
           }) // Custom easing to give a feeling of inertia
       });
        
        // element.style.transform = `translate(${xParallax * parallaxFactor}px, ${yParallax * parallaxFactor}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    console.log('MouseParallax mounted' + parallaxElements[0]);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  },[]);

  // Return null if you don't need to render anything
  return null;
}

export default MouseParallax;
