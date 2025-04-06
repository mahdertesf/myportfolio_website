import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SiPytorch } from "react-icons/si";

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
            { name: 'Jupyter Notebooks', icon: 'devicon-jupyter-plain colored' },
            { name: 'Git', icon: 'devicon-git-plain colored' },
            { name: 'GitHub', icon: 'devicon-github-original colored' },
            { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
            { name: 'Postman', icon: 'devicon-postman-plain colored' },
            {name:"Insomnia", icon: 'devicon-insomnia-plain colored'},
        ]
    };

    return (
        <SectionWrapper id="skills">
            <h2 className="text-3xl font-bold mb-8 text-center animate-fadeIn text-white">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                {Object.keys(skills).map((category) => (
                    <div key={category} className="border border-gray-700 p-6 rounded-lg shadow-lg animate-glowBorder relative hover:bg-gray-800 transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-4 animate-fadeIn text-white">{category}</h3>
                        <ul className="list-none pl-4">
                            {skills[category].map((skill, index) => (
                                <li key={index} className="mb-6 text-gray-300 animate-fadeIn flex flex-col items-center">
                                    <span className="mb-2">{skill.name}</span>
                                    {skill.name === 'PyTorch' ? (
                                        <SiPytorch size={48} color="#EE4C2C" />
                                    ) : (
                                        <i className={`${skill.icon} text-6xl`}></i>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;