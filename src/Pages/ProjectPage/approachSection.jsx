import React from 'react';

const ApproachSection = ({ projectData, sectionLayout, margins }) => {
  const { approachHead, approachDescription, approachContent1, approachContent2, approachContent3 } = projectData;

  return (
    <section id='approach' className={`flex flex-col justify-center items-center ${margins[0]}`}>
      <div className="w-full sm:p-0 p-6 sm:w-2/3 font-Satoshi">
        <h4 className='text-sm sm:text-2xl textP font-light font-Satoshi'>Approach:</h4>
        <div className='h-20 rounded-sm w-[1px] sm:w-0.5 bg-black'></div>
        <h1 className={`${margins[2]} text-3xl textC font-medium sm:text-5xl font-Lora`}>{approachHead}</h1>
        <p className={`text-balance hyphens-auto max-w-[35em] font-Satoshi opacity-80 textP ${margins[2]} font-light text-sm sm:text-2xl`}>{approachDescription}</p>
      </div>

      <div className={sectionLayout[0]}>
        {approachContent1 && approachContent1.endsWith('.mp4') ? (
          <video alt={approachContent1} autoPlay loop muted className={`${sectionLayout[1]}`} src={approachContent1}></video>
        ) : (
          <img className={`${sectionLayout[1]}`} src={approachContent1} alt={approachContent1} />
        )}

        {approachContent2 && approachContent2.endsWith('.mp4') ? (
          <video alt={approachContent2} autoPlay loop muted className={`${sectionLayout[2]}`} src={approachContent2}></video>
        ) : (
          <img className={`${sectionLayout[2]}`} src={approachContent2} alt={approachContent2} />
        )}

        {/* Render approachContent3 if it exists */}
        {approachContent3 && (
          approachContent3.endsWith('.mp4') ? (
            <video alt={approachContent3} autoPlay loop muted className={`${sectionLayout[3]}`} src={approachContent3}></video>
          ) : (
            <img className={`${sectionLayout[3]}`} src={approachContent3} alt={approachContent3} />
          )
        )}
      </div>
    </section>
  );
};

export default ApproachSection;
