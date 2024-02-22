import React from 'react';

const EpilogueSection = ({ projectData, sectionLayout, margins }) => {
  const { epilogueHead, epilogueDescription, epilogueContent1 } = projectData;

  return (
    <section id='epilogue' className={`${margins[0]} flex flex-col justify-center items-center`}>
      <div className="w-full sm:p-0 p-6 sm:w-2/3 font-Satoshi">
        <h4 className='text-sm sm:text-2xl textP font-light font-Satoshi'>Epilogue:</h4>
        <div className='h-20 rounded-sm w-[1px] sm:w-0.5 bg-black'></div>
        <h1 className={`${margins[2]} text-3xl textC font-medium sm:text-5xl font-Lora`}>{epilogueHead}</h1>
        <p className={`font-Satoshi textP ${margins[2]} text-balance hyphens-auto max-w-[35em] font-light text-sm sm:text-2xl opacity-80`}>{epilogueDescription}</p>
      </div>

      <div className={sectionLayout[0]}>
        {epilogueContent1 && epilogueContent1.endsWith('.mp4') ? (
          <video alt={epilogueContent1.alt} autoPlay loop muted className={`${sectionLayout[1]}`} src={epilogueContent1}></video>
        ) : (
          <img className={`${sectionLayout[2]}`} src={epilogueContent1} alt={epilogueContent1} />
        )}
      </div>
    </section>
  );
};

export default EpilogueSection;
