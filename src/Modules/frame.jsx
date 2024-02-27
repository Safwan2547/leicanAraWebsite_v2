import { useEffect } from "react";
import { animate, timeline } from "motion";

function Frame() {
  const exhibitAnimation = [
    ['.landingExhibit', { opacity: 1, transform: "scale(1)" }, { delay: 0.3, easing: "ease-in-out" }]
  ];

  useEffect(() => {
    timeline(exhibitAnimation, { duration: 1, delay: 2 }, { defaultOptions: { easing: "ease-in-out" } });

}   , []);

  return (
    <div data-speed="4" className="landingExhibit frame mouseParallax opacity-0  w-[100vw] flex justify-center items-center h-[100vh] absolute">
      {/* Add rectangular frame */}
      <div className="rounded-lg absolute scale-125 opacity-80 left-50 bottom-50 w-64 h-96 border-2 border-LunarTwilight"></div>
    </div>
  );
}

export default Frame;
