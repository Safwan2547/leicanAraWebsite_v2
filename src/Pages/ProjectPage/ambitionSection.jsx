import React from 'react';

const AmbitionSection = ({ projectData, sectionLayout, margins }) => {
  const { ambitionHead, ambitionDescription, ambitionContent1, ambitionContent2 } = projectData;

  return (
    <section id='ambition' className={``}>
      <div className="w-full flex justify-center items-center flex-col sm:p-0 ">
        <div className='p-6 w-2/3 sm:p-0'>
          <p className='text-sm sm:text-2xl animateOnEntry textP font-light font-Satoshi'>Ambition:</p>
          <div id='line' className='h-20 rounded-sm w-[1px] animateOnEntry sm:w-0.5 scale-y-0 bg-black'></div>
          <h1 id='ambitionHead' className={`text-3xl animateOnEntry textC font-medium ${margins[2]} sm:text-5xl font-Lora`}>{ambitionHead}</h1>
          <p id='ambitionDescription' className={`font-Satoshi animateOnEntry ${margins[2]} textP text-balance hyphens-auto max-w-[35em] font-light opacity-80 text-sm sm:text-2xl`}>{ambitionDescription}</p>
        </div>

        <div id='ambitionLayout' className={sectionLayout}>
          {ambitionContent1 && (
            ambitionContent1.endsWith('.mp4') ? (
              <video alt={ambitionContent1} autoPlay loop muted className={`${sectionLayout[1]}`}>
                <source src={ambitionContent1} type="video/mp4" />
              </video>
            ) : (
              <img className={`${sectionLayout[1]}`} src={ambitionContent1} alt={ambitionContent1} />
            )
          )}

          {/* Ambition Content 2 */}
          {ambitionContent2 && (
            ambitionContent2.endsWith('.mp4') ? (
              <video alt={ambitionContent2} autoPlay loop muted className={`${sectionLayout[2]}`}>
                <source src={ambitionContent2} type="video/mp4" />
              </video>
            ) : (
              <img className={`${sectionLayout[2]}`} src={ambitionContent2} alt={ambitionContent2} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default AmbitionSection;
