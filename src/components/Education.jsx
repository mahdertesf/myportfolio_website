import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

// Optional: Add your university logo to your assets folder and import it
// import aauLogo from '../assets/images/aau-logo.png'; // Example path

const Education = () => {
    return (
        <SectionWrapper id="education">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center animate-fadeIn">Education</h2>
            
            <div className="flex justify-center animate-fadeIn">
                {/* Main education card with hover effects */}
                <div className="
                    bg-slate-800/50 p-8 rounded-lg border border-slate-700 
                    shadow-xl w-full max-w-4xl 
                    flex flex-col md:flex-row items-center gap-8 
                    hover:border-cyan-400 hover:scale-[1.02] transition-all duration-300 ease-in-out
                ">
                    
                    {/* Optional Logo Column - Uncomment and provide the image path */}
                    {/* 
                    <div className="flex-shrink-0">
                        <img 
                            src={aauLogo} 
                            alt="Addis Ababa University Logo" 
                            className="h-24 w-24 rounded-full object-cover bg-white p-2"
                        />
                    </div>
                    */}

                    {/* Details Column */}
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-1">Addis Ababa University</h3>
                        <p className="text-lg text-slate-400 mb-4">Addis Ababa Institute of Technology (AAiT)</p>
                        
                        <div className="space-y-3 mt-4">
                            <p className="flex items-center justify-center md:justify-start gap-3 text-slate-200">
                                <FaGraduationCap className="text-cyan-400 text-xl" />
                                <span>B.Sc. in Electrical and Computer Engineering</span>
                            </p>
                            <p className="flex items-center justify-center md:justify-start gap-3 text-slate-200">
                                <FaCalendarAlt className="text-cyan-400 text-xl" />
                                <span>Expected Graduation: June 2026</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};

export default Education;