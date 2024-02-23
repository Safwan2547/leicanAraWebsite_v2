import React, { useEffect } from 'react';

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
    const parallaxFactor = 0.01;
    console.log(parallaxElements);

    const handleMouseMove = (e) => {
      xVal = e.clientX;
      yVal = e.clientY;

      parallaxElements.forEach((element) => {
        const xDisplacement = xVal - centerX;
        const yDisplacement = yVal - centerY;

        const elementX = element.offsetLeft + element.offsetWidth / 2;
        const elementY = element.offsetTop + element.offsetHeight / 2;

        const xParallax = xDisplacement - elementX;
        const yParallax = yDisplacement - elementY;

        element.style.transform = `translate(${xParallax * parallaxFactor}px, ${yParallax * parallaxFactor}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });

  // Return null if you don't need to render anything
  return null;
}

export default MouseParallax;
