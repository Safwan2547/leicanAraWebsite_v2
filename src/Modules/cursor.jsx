import React, { useEffect, useState } from 'react';
import { animate, spring } from "motion";

function Cursor() {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [hovering, setHovering] = useState(null);
  const cursorSize = 30;
  const debounceDelay = 5; // 60fps

  useEffect(() => {
    const handleMouseMove = debounce((e) => {
      adjustCursorPosition(e.clientX, e.clientY);
    }, debounceDelay);

    const handleMouseOver = (e) => {
      const className = e.target.className;
      if (className.includes('textC')) setHovering('text');
      else if (className.includes('buttonC')) setHovering('button');
      else if (className.includes('textP')) setHovering('textP');
      else if (className.includes('footerC')) setHovering('footerC');
      else if (className.includes('enterC')) setHovering('enterC');
      else setHovering(null);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const debounce = (func, delay) => {
    let timer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };

  const adjustCursorPosition = (x, y) => {
    const element = document.getElementById('Cursor');
    animate(element, {
      left: `${x - cursorSize / 2}px`,
      top: `${y - cursorSize / 2}px`
    }, {
      easing: spring({ mass: 4, stiffness: 700, damping: 200 }),
    });
  };

  const getCursorClass = () => {
    switch (hovering) {
      case 'button':
        return '!opacity-100 !w-0 !h-0 cursor-none !bg-LunarTwilight';
      case 'text':
        return '!opacity-100 !w-1 !h-24 !border-white border-[1px] !border-opacity-30 backdrop-invert !bg-NightFall cursor-none';
      case 'textP':
        return '!opacity-100 !w-1 !h-10 !border-white border-[1px] !border-opacity-30 !bg-NightFall cursor-none';
      case 'enterC':
        return '!opacity-100 transition-all !border-opacity-95 drop-shadow-lg !bg-MainBeige ease-in-out !w-24 !h-24 !border-NightFall border-solid cursor-none';
      default:
        return '';
    }
  };

  const renderArrow = () => {
    if (hovering === 'enterC') {
      return (
        <div className='animate-pulse-slow flex transition-opacity duration-500 justify-center w-full h-full items-center'>
          <div className="scale-[100%]">
            <span className='font-Satoshi font-extralight text-LunarTwilight'>VIEW</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      id="Cursor"
      className={`${getCursorClass()} !opacity-100 transition-cursor hidden sm:block !duration-300 bg-LunarTwilight fixed rounded-full z-50`}
      style={{
        pointerEvents: "none"
      }}
    >
      {renderArrow()}
    </div>
  );
}

export default Cursor;
