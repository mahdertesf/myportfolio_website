import React from 'react';
import SectionWrapper from './SectionWrapper';
// Import the necessary icons from the react-icons library
import { SiPytorch, SiHuggingface } from "react-icons/si";
import { FaServer } from "react-icons/fa";

const Skills = () => {
    const skills = {
        Languages: [
            { name: 'Python', icon: 'devicon-python-plain colored' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
            { name: 'SQL', icon: 'devicon-mysql-plain colored' },
            { name: 'HTML', icon: 'devicon-html5-plain colored' },
            { name: 'CSS', icon: 'devicon-css3-plain colored' },
            { name: 'Java', icon: 'devicon-java-plain colored' } 
        ],
        Frameworks: [
            { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored' },
            { name: 'Keras', icon: 'devicon-keras-plain colored' },
            { name: 'NumPy', icon: 'devicon-numpy-original colored' },
            { name: 'NLTK', icon: 'devicon-nltk-plain colored' }, 
            { name: 'Django', icon: 'devicon-django-plain colored' },
            { name: 'React', icon: 'devicon-react-original colored' },
            { name: 'TailwindCSS', icon: 'devicon-tailwindcss-plain colored' },
            { name: 'Matplotlib', icon: 'devicon-matplotlib-plain colored' } 
        ],
        Tools: [
            { name: 'Jupyter', icon: 'devicon-jupyter-plain colored' },
            { name: 'Git', icon: 'devicon-git-plain colored' },
            { name: 'GitHub', icon: 'devicon-github-original colored' },
        ],
        "Cloud & MLOps": [
            { name: 'Hugging Face', icon: 'SiHuggingface' }, // Special case
            { name: 'DigitalOcean', icon: 'devicon-digitalocean-plain colored' },
            { name: 'RunPod.io', icon: 'FaServer' } // Special case
        ]
    };

    return (
        <SectionWrapper id="skills">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center animate-fadeIn text-white">Skills & Technologies</h2>
            
            {/* Updated grid to handle 4 columns on large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                
                {Object.keys(skills).map((category) => (
                    <div key={category} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 shadow-lg hover:border-cyan-400 hover:scale-[1.02] transition-all duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold mb-6 text-glow">{category}</h3>
                        
                        {/* Grid for skills within a category */}
                        <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                            {skills[category].map((skill, index) => (
                                <div key={index} className="flex flex-col items-center gap-2 text-slate-300">
                                    {/* Icon rendering logic */}
                                    <div className="text-5xl h-14 flex items-center justify-center">
                                        {skill.name === 'PyTorch' ? (
                                            <SiPytorch color="#EE4C2C" />
                                        ) : skill.name === 'Hugging Face' ? (
                                            <SiHuggingface color="#FFD21E" />
                                        ) : skill.name === 'RunPod.io' ? (
                                            <FaServer color="#9A42F6" />
                                        ) : (
                                            <i className={skill.icon}></i>
                                        )}
                                    </div>
                                    <span className="text-sm font-medium">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;