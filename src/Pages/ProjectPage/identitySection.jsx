import React from 'react';

const IdentitySection = ({ projectData, sectionLayout, margins }) => {
  const { identityHead, identityDescription, identityContent1, identityContent2 } = projectData;

  return (
    <section id='identity' className={`flex flex-col justify-center items-center ${margins[0]}`}>
      <div className="w-full sm:p-0 p-6 sm:w-2/3 font-Satoshi">
        <h4 className='text-sm sm:text-2xl textP font-light font-Satoshi'>Identity:</h4>
        <div className='h-20 rounded-sm w-[1px] sm:w-0.5 bg-black'></div>
        <h1 className={`${margins[2]} text-3xl textC font-medium sm:text-5xl font-Lora`}>{identityHead}</h1>
        <p className={`font-Satoshi textP opacity-80 ${margins[2]} text-balance hyphens-auto max-w-[35em] font-light text-sm sm:text-2xl`}>{identityDescription}</p>
      </div>

      <div className={sectionLayout[0]}>
        {identityContent1 && identityContent1.endsWith('.mp4') ? (
          <video alt={identityContent1} autoPlay loop muted className={`${sectionLayout[1]}`} src={identityContent1}></video>
        ) : (
          <img className={`${sectionLayout[2]}`} src={identityContent1} alt={identityContent1} />
        )}

        {identityContent2 && identityContent2.endsWith('.mp4') ? (
          <video alt={identityContent2} autoPlay loop muted className={`${sectionLayout[1]}`} src={identityContent2}></video>
        ) : (
          <img className={`${sectionLayout[2]}`} src={identityContent2} alt={identityContent2} />
        )}
      </div>
    </section>
  );
};

export default IdentitySection;
