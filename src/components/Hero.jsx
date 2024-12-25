import React from 'react';
import SectionWrapper from './SectionWrapper';

const Hero = () => {
  return (
    <SectionWrapper id="hero">
      <div className="flex flex-col items-center justify-center pt-20 pb-20 md:pt-24 md:pb-24  ">
        <div className="rounded-full border-4 border-glow relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden animate-glowBorder cursor-pointer">
          <img
            src="/assets/images/profile.png"
            alt="Profile"
            className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h2 className="mt-6 text-4xl font-bold text-center md:text-5xl lg:text-6xl animate-fadeIn text-glow">
          Mahder Tesfaye Abebe
        </h2>
        <p className="mt-2 text-lg text-center text-light animate-fadeIn">
          Machine Learning Engineer | Fullstack Web Developer
        </p>
      
      </div>
    </SectionWrapper>
  );
};

export default Hero;