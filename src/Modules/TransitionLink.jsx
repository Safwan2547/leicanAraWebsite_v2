import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { animate } from 'motion';

const TransitionLink = ({ to, children, className }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setIsTransitioning(true);

    // Animate the opacity of the entire page to 0
    animate(document.documentElement, { opacity: 0 }, { duration: 0.5 });

    // After a short delay, navigate to the new route
    setTimeout(() => {
      window.scrollTo(0, 0);
      navigate(to);

      // After navigation, animate the opacity of the entire page back to 1
      setTimeout(() => {
        animate(document.documentElement, { opacity: 1 }, { duration: 0.5 });
      }, 500); // Short delay before animating to ensure the new content is rendered
    }, 500); // Adjust the delay as needed
  };

  // Render the link
  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default TransitionLink;
