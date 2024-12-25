import React from 'react';
import SectionWrapper from './SectionWrapper';

const Education = () => {
    return (
        <SectionWrapper id="education" className='text-center'>
            <h2 className="text-3xl font-bold mb-8 text-center animate-fadeIn">Education</h2>
            <div className="bg-dark border border-glow p-6 rounded-lg shadow-md text-center animate-glowBorder animate-fadeIn">
                <h3 className="text-2xl font-semibold text-glow mb-3 animate-fadeIn">Addis Ababa University (Addis Ababa Institute of Technology)</h3>
                <p className="text-light animate-fadeIn">4th Year Electrical and Computer Engineering (BSc) Student</p>
            </div>
        </SectionWrapper>
    );
};

export default Education;