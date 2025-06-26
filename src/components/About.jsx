import React from 'react';
import SectionWrapper from './SectionWrapper';
import ReactPlayer from 'react-player/youtube';
import { FaLightbulb, FaGlobe, FaBrain, FaTools, FaLink, FaGithub, FaCogs } from 'react-icons/fa';


import mahderAiImage from '/assets/images/special_project/mahderai.png'; 

const About = () => {
    const fineTuningDemoUrl = 'https://youtu.be/PIFOzK_SzVI';
    const analyzerDemoUrl = 'https://youtu.be/VUNmOHDsebY';

    return (
        <SectionWrapper id="about">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center animate-fadeIn">About Me</h2>

            <div className='p-6 md:p-10 rounded-xl shadow-2xl border border-glow animate-glowBorder bg-gradient-to-br from-gray-900 to-slate-900 flex flex-col gap-12 text-slate-300 animate-fadeIn'>

                {/* --- Quick Summary Section --- */}
                <ul className="space-y-5 text-lg">
                    {/* ... (Your 5 summary points with icons remain here) ... */}
                    <li className="flex items-start gap-4"><FaLightbulb className="text-cyan-400 mt-1.5 flex-shrink-0 text-xl" /><p>Designing and deploying real-world, AI-driven web solutions</p></li>
                    <li className="flex items-start gap-4"><FaGlobe className="text-cyan-400 mt-1.5 flex-shrink-0 text-xl" /><p>Crafting seamless and responsive fullstack applications</p></li>
                    <li className="flex items-start gap-4"><FaBrain className="text-cyan-400 mt-1.5 flex-shrink-0 text-xl" /><p>Enthusiastic about Deep Learning, Natural Language Processing, and Computer Vision</p></li>
                    <li className="flex items-start gap-4"><FaTools className="text-cyan-400 mt-1.5 flex-shrink-0 text-xl" /><p>Experienced in model training, fine-tuning, and scalable ML deployment</p></li>
                    <li className="flex items-start gap-4"><FaLink className="text-cyan-400 mt-1.5 flex-shrink-0 text-xl" /><p>Passionate about connecting cutting-edge AI research with practical product development</p></li>
                </ul>

                {/* --- Core Expertise Section --- */}
                <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
                    <h3 className="text-2xl font-semibold mb-6 text-glow text-center">My Core Expertise</h3>
                    <div className="flex justify-center">
                        <div className="bg-slate-900 p-6 rounded-lg border border-slate-600 text-center flex flex-col md:max-w-xl hover:border-cyan-400 hover:scale-[1.02] transition-all duration-300 ease-in-out">
                            <h4 className="flex items-center justify-center gap-3 font-bold text-xl mb-3 text-white"><FaCogs /> End-to-End Solutions</h4>
                            <p className="flex-grow leading-relaxed">I build and deploy complete AI-powered applications, handling everything from model architecture in TensorFlow to crafting responsive React frontends and robust Django backends.</p>
                        </div>
                    </div>
                </div>

                {/* --- Featured Project Section --- */}
                <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
                    <h3 className="text-2xl font-semibold mb-8 text-glow text-center">Featured Project: MahderAI</h3>
                    
                    {/* Project Introduction: Screenshot, Description, GitHub Link */}
                    <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
                        <img 
                            src={mahderAiImage} 
                            alt="MahderAI application screenshot" 
                            className="rounded-lg shadow-lg w-full h-auto border-2 border-slate-600"
                        />
                        <div className="flex flex-col gap-4 text-center md:text-left">
                            <p className="text-slate-300 text-lg leading-relaxed">
                                This personal R&D platform is where I prototype and showcase my end-to-end AI development capabilities.
                            </p>
                            <a href="https://github.com/mahdertesf/Mahder-AI" target="_blank" rel="noopener noreferrer" 
                               className="flex items-center justify-center gap-2 mx-auto md:mx-0 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 w-fit">
                                <FaGithub />
                                View Code on GitHub
                            </a>
                        </div>
                    </div>

                    <hr className="my-8 border-slate-700" />

                    {/* Video Demos Section */}
                    <h4 className="text-xl font-semibold text-glow text-center mb-6">See It In Action</h4>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold text-lg text-white text-center">Fine-Tuning Interface</p>
                            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-2xl bg-black ring-1 ring-slate-700 hover:ring-2 hover:ring-cyan-400 transition-all duration-300">
                                <ReactPlayer url={fineTuningDemoUrl} width="100%" height="100%" controls={true} playing={true} muted={true} loop={true} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold text-lg text-white text-center">Hate Content Analyzer</p>
                            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-2xl bg-black ring-1 ring-slate-700 hover:ring-2 hover:ring-cyan-400 transition-all duration-300">
                                <ReactPlayer url={analyzerDemoUrl} width="100%" height="100%" controls={true} playing={true} muted={true} loop={true} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default About;