import React from 'react';

const LandingSection = ({ projectData }) => {
  const { title, mainHeader, thumbnail2 } = projectData;

  return (
    <div id='landing' className='w-screen h-screen overflow-hidden'>
      <div className='w-full h-full justify-center flex overflow-hidden items-center' id='thumbnail'>
        <div id="headerInfo" className='drop-shadow-lg flex absolute justify-evenly align-baseline bottom-16 w-full items-center border-black flex-row'>
          <h1 className='uppercase textC animateOnEntry text-6xl sm:text-7xl text-white tracking-wider font-normal font-Satoshi'>{title}</h1>
          <p className='text-2xl text-white overflow-hidden textP align-baseline font-Satoshi font-light'>{mainHeader}</p>
        </div>
        <img className='w-screen object-cover sm:h-[100vh]' src={thumbnail2} alt="Project Thumbnail" />
      </div>
    </div>
  );
};

export default LandingSection;
