import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../Assets/Mockup 3.webp';
import img2 from '../Assets/Magazine.webp';
import img3 from '../Assets/output_file.webp';

function ImageFloater() {
  const imgArray = [img1, img2, img3];
  const [images, setImages] = useState([]);

  const handleOnClick = (e) => {
    if (images.length >= 2) {
      // If there are already 2 images, remove the oldest one
        setImages(currentImages => currentImages.slice(0));

      
    }
    const randomIndex = Math.floor(Math.random() * imgArray.length);
    const imageKey = Math.random(); // Unique key for React list rendering
    const newImage = {
      src: imgArray[randomIndex],
      x: e.clientX,
      y: e.clientY,
      rotate: Math.random() * 120 - 60, // Adjusts the range to -90 to 90
      key: imageKey,
    };

    setImages(currentImages => [...currentImages, newImage]);

    // Schedule the removal of this image after 3 seconds
    setTimeout(() => {
      setImages(currentImages => currentImages.filter(image => image.key !== imageKey));
    }, 2000);
  };

  // Cleanup on component unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      setImages([]); // Clear images array
    };
  }, []);

  return (
    <div id='imageFloater' className="w-screen imageFloater h-screen overflow-hidden absolute z-[19]" onClick={handleOnClick}>
      <AnimatePresence>
        {images.map(image => (
          <motion.img className={``}
            key={image.key}
            src={image.src}
            alt="Dynamic"
            initial={{
              scale: 0,
              clipPath: "circle(0% at 0% 0)",
              x: image.x - window.innerWidth / 2,
              y: image.y - window.innerHeight / 2,
              rotate: image.rotate,

            }}
            animate={{
              scale: 0.35,
              clipPath: "circle(150% at 0% 0)",
            }}
            exit={{
              scale: 0,
              clipPath: "circle(0% at 0% 0)",
              
            }}
            transition={{
              duration: 1,
              ease: "circInOut",
            }}
            style={{
              position: 'absolute',
              
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ImageFloater;
