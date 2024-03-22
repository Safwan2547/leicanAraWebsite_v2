import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../Assets/Mockup 3.webp';
import img2 from '../Assets/Magazine.webp';
import img3 from '../Assets/output_file.webp';
import img4 from '../Assets/Ecostellar v4.webp';
import img5 from '../Assets/StarFall Logo Showcase v4.webp';
import img6 from '../Assets/Container-Mockup.webp';

function ImageFloater() {
  const imgArray = [img1, img2, img3,img4,img5,img6];
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Added state to keep track of the current index


  const handleOnClick = (e) => {

    // Calculate a random end position within a range
  const maxX = 100; // Max horizontal movement range, adjust as needed
  const maxY = -50; // Max vertical movement range, adjust as needed
  
  

    const imageKey = Math.random(); // Unique key for React list rendering
// Apply boundary conditions

    const newImage = {
      src: imgArray[currentIndex],
      x: e.clientX - window.innerWidth / 2,
      y: e.clientY - window.innerHeight / 2,
      rotate: Math.random() * 120 - 60, // Adjusts the range to -90 to 90
      maxY, // Random end Y position
      key: imageKey,
    };
    setCurrentIndex((currentIndex + 1) % imgArray.length);

    if (images.length >= 2) {
        // setImages(currentImages => currentImages.slice(1));
        setTimeout(() => {    setImages(currentImages => [...currentImages, newImage]);
        },500);

      
    }
    else{
      setImages(currentImages => [...currentImages, newImage]);

    }

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

  const imageVariants = {
    initial: (image) => ({
      scale: 0.5,
      clipPath: "circle(0% at 0% 0)",
      x: image.x,
      y: image.y,
      rotate: image.rotate,
    }),
    animate: (image) => ({
      scale: 0.35,
      clipPath: "circle(150% at 0% 0)",
      // x: image.x + image.endX,
      y: image.y + image.maxY,
      rotate: 0,
      transition: {
        scale: { duration: 1, ease: "anticipate" },
        clipPath: { duration: 1, ease: "anticipate" },
        x: { duration: 3, ease: "easeInOut"},
        y: { duration: 3, ease: "easeOut" },
      },
    }),
    exit: {
      scale: 0,
      clipPath: "circle(0% at 0% 0)",
      transition: { duration: 1, ease: "circInOut" },
    },
  };

  return (
    <div id='imageFloater' className="w-screen imageFloater h-screen overflow-hidden absolute z-[19]" onClick={handleOnClick}>
      <AnimatePresence>
        {images.map(image => (
          <motion.img
            className="absolute z-[21]"
            key={image.key}
            src={image.src}
            alt="Dynamic"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={image}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ImageFloater;
