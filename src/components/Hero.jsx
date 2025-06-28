import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FaMouse } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <SectionWrapper id="home">
      {/* Full-screen container with responsive padding */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
        
        {/* Background Radial Gradient */}
        <div className="absolute inset-0 z-0 bg-radial-gradient"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center">
          
          {/* Profile Picture */}
          <div className="mb-6 animate-fadeIn" style={{ animationDelay: '100ms', opacity: 0 }}>
            <div className="rounded-full border-4 border-glow/50 p-1 relative w-48 h-48 md:w-56 md:h-56 shadow-2xl shadow-glow/20">
              <img
                src="/assets/images/profile.png"
                alt="Mahder Tesfaye"
                className="object-cover object-center w-full h-full rounded-full"
              />
            </div>
          </div>
          
          {/* Name with refined responsive text sizes */}
          <h1 
            className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl animate-fadeIn bg-gradient-to-r from-glow to-primary bg-clip-text text-transparent"
            style={{ animationDelay: '300ms', opacity: 0 }}
          >
            Mahder Tesfaye Abebe
          </h1>
          
          {/* Title with responsive margin and max-width for readability */}
          <p 
            className="mt-4 md:mt-5 text-lg md:text-xl text-light max-w-prose animate-fadeIn"
            style={{ animationDelay: '500ms', opacity: 0 }}
          >
            Machine Learning Engineer | Full-Stack Web Developer
          </p>

          {/* Inspirational Quote with a robust, responsive container */}
          <div className="mt-6 md:mt-8 min-h-[80px] flex items-center justify-center">
            <TypeAnimation
              sequence={[
                1200, 
                '"Every challenge is an invitation to grow!"',
              ]}
              wrapper="p"
              cursor={true}
              speed={50}
              className="text-xl md:text-2xl font-semibold max-w-prose bg-gradient-to-r from-red-500 to-primary bg-clip-text text-transparent"
            />
          </div>

        </div>


        <div 
      
          className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2 text-light/70 animate-fadeIn"
          style={{ animationDelay: '900ms', opacity: 0 }}
        >
          <FaMouse className="text-2xl" />
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-6 bg-light/50 mt-1 animate-bounce"></div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Hero;
