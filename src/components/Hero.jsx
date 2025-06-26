import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FaMouse } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <SectionWrapper id="home">
      {/* Full-screen container */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
        
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
          
          {/* Name with Gradient Text */}
          <h1 
            className="text-4xl font-bold sm:text-5xl p-3 md:text-6xl lg:text-7xl animate-fadeIn bg-gradient-to-r from-glow to-primary bg-clip-text text-transparent"
            style={{ animationDelay: '300ms', opacity: 0 }}
          >
            Mahder Tesfaye Abebe
          </h1>
          
          {/* Title */}
          <p 
            className="mt-3 text-lg md:text-xl text-light max-w-2xl animate-fadeIn"
            style={{ animationDelay: '500ms', opacity: 0 }}
          >
            Machine Learning Engineer | Full-Stack Web Developer
          </p>

          {/* --- ENHANCED INSPIRATIONAL QUOTE --- */}
          {/* Container is taller to accommodate larger text and prevent layout shift */}
          <div className="mt-8 h-20 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                // Wait 1.2 seconds after the title appears, then start typing
                1200, 
                '"Every challenge is an invitation to grow!"',
              ]}
              wrapper="p"
              cursor={true}
              speed={50}
              // New classes for a colorful, large, and bold appearance
              className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-red-500 to-primary bg-clip-text text-transparent"
            />
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-light/70 animate-fadeIn"
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