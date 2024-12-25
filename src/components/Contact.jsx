import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';

const Contact = () => {
    return (
        <>
            <SectionWrapper id="contact">
                <h2 className="text-3xl font-bold mb-8 text-center animate-fadeIn">Contact Me</h2>
                <div className="bg-bg-dark p-6 border border-glow rounded-lg shadow-md animate-glowBorder flex flex-col gap-4">
                    <div className='flex items-center gap-3'>
                        <FaEnvelope className='w-6 h-6 text-primary'/>
                        <div>
                            <a href="mailto:mahdertesfaye11@gmail.com" className="block text-light hover:text-glow transition-colors duration-300 animate-fadeIn">mahdertesfaye11@gmail.com</a>
                            <a href="mailto:mahder.tesfaye@aait.edu.et" className="block text-light hover:text-glow transition-colors duration-300 animate-fadeIn">mahder.tesfaye@aait.edu.et</a>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaPhoneAlt className='w-6 h-6 text-primary'/>
                        <a href="tel:+251921957652" className="block text-light hover:text-glow transition-colors duration-300 animate-fadeIn">+251921957652</a>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaGithub className='w-6 h-6 text-primary'/>
                        <a href="https://github.com/mahdertesf" target="_blank" rel="noopener noreferrer" className="text-light hover:text-glow transition-colors duration-300 animate-fadeIn">github</a>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaLinkedin className='w-6 h-6 text-primary'/>
                        <a href="https://www.linkedin.com/in/mahder-tesfaye-abebe-396095327/" target="_blank" rel="noopener noreferrer" className="text-light hover:text-glow transition-colors duration-300 animate-fadeIn">linkedin</a>
                    </div>
                </div>
            </SectionWrapper>
            <footer className="bg-bg-dark p-4 text-center text-light mt-8">
                <p>&copy; {new Date().getFullYear()} Mahder Tesfaye. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Contact;