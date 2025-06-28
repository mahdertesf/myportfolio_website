import React from 'react';
import SectionWrapper from './SectionWrapper';
import ReactPlayer from 'react-player/youtube';
import { FaGithub, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';

// --- COMPONENT START ---
const Projects = () => {

  // --- DATA ---
  const Special_Projects = [
    {
      title: 'Fine-Tune Gemma2 models',
      description: 'A web app with a simple UI to fine-tune Gemma2 models for different NLP tasks.',
      github_link: "https://github.com/mahdertesf/Mahder-AI",
      youtube_link: "https://youtu.be/PIFOzK_SzVI"
    },
    {
      title: "Telegram Channel Hate Content Analyzer",
      description: "A web app to analyze hate content in Telegram channels using custom Transformer Encoders.",
      github_link: "https://github.com/mahdertesf/Mahder-AI",
      youtube_link: "https://youtu.be/VUNmOHDsebY"
    },
    {
      title: 'College Management System | Full-Stack App',
      description: 'A full-stack web app for my university to streamline academic management, featuring role-based access and AI-powered study tools via the Gemini API.',
      github_link: 'https://github.com/mahdertesf/fullstackproject6',
      youtube_link: 'https://youtu.be/Xv6TKKgXb9k'
    }
  ];

  const web_projects = [
    {
      title: 'Landing Page for a Virtual Reality Platform',
      description: 'A modern and engaging landing page for a Virtual Reality platform designed to attract and convert users.',
      image: '/assets/images/virtual.png',
      link: 'https://github.com/mahdertesf/VirtualR'
    },
    {
      title: 'School Website',
      description: 'A 6-page responsive website for "Verzantlias School for Future," built with React and TailwindCSS.',
      image: '/assets/images/school.png',
      link: 'https://github.com/mahdertesf/Verzantlias-School-for-Future-Website'
    },
    {
      title: 'Hotel Management System Dashboard',
      description: "As a project manager and frontend lead, I architected the user authentication system and developed the main dashboard. My role also involved managing the team's Git workflow, including reviewing and merging all frontend pull requests.",
      image: '/assets/images/hotel-dashboard.png',
      link: 'https://github.com/Hotel-Translyvania/Hotel-Management-System' 
    }
  ];

  const course_projects = [
    { 
      title: 'Image Segmentation (U-Net)', 
      description: 'Implemented the U-Net architecture from scratch using TensorFlow for semantic image segmentation on the CARLA autonomous driving dataset, enabling detailed scene understanding.', 
      image: '/assets/images/unet.png', 
      // --- LINK UPDATED HERE ---
      link: 'https://github.com/mahdertesf/image-Segmentation-with-UNet' 
    },
    { 
      title: 'Face Recognition System (FaceNet)', 
      description: 'Built a recognition system using a pre-trained FaceNet model and triplet loss for high-accuracy face verification.', 
      image: '/assets/images/face.png', 
      link: 'https://github.com/mahdertesf/Face-Recognition-System' 
    },
    { 
      title: 'Sign Language Recognition', 
      description: 'Developed a TensorFlow multi-class classifier for sign language, achieving over 95% validation accuracy.', 
      image: '/assets/images/sign.png', 
      link: 'https://github.com/mahdertesf/Sign-Language-Recognition' 
    },
    { 
      title: 'Transfer Learning (InceptionV3)', 
      description: 'Fine-tuned a pre-trained InceptionV3 model for human vs. horse classification, achieving 98.6% validation accuracy.', 
      image: '/assets/images/transfer.png', 
      link: 'https://github.com/mahdertesf/Transfer-Learning-InceptionV3-' 
    },
    { 
      title: 'Jazz Music Generation', 
      description: 'Built an LSTM-based system for generating novel jazz melodies, demonstrating creativity in AI.', 
      image: '/assets/images/jazz.png', 
      link: 'https://github.com/mahdertesf/Jazz-Music-Generation' 
    },
    { 
      title: 'Neural Machine Translation', 
      description: 'Created an attention-based model for converting human-readable dates to machine-readable formats.', 
      image: '/assets/images/translate.png', 
      link: 'https://github.com/mahdertesf/Neural-Machine-Translation' 
    },
  ];

  // --- RENDER ---
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center animate-fadeIn">Projects Showcase</h2>

      {/* --- Section 1: Featured Projects --- */}
      <div className='mb-20'>
        <h3 className="text-2xl sm:text-3xl font-semibold text-glow mb-8 text-center">Featured Projects</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Special_Projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg border border-slate-700 shadow-xl overflow-hidden flex flex-col group">
              <div className="w-full aspect-video bg-black overflow-hidden">
                <ReactPlayer
                  url={project.youtube_link}
                  width="100%" height="100%"
                  playing={true} muted={true} loop={true} controls={false}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-slate-300 text-base leading-relaxed flex-grow">{project.description}</p>
                <div className="flex items-center gap-4 mt-6">
                  <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md text-sm font-medium transition-colors">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.youtube_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-red-700/80 hover:bg-red-600/80 rounded-md text-sm font-medium transition-colors">
                    <FaYoutube /> YouTube
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Section 2: Web Applications & Design --- */}
      <div className='mb-20'>
        <h3 className="text-2xl sm:text-3xl font-semibold text-glow mb-8 text-center">Web Applications & Design</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {web_projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg border border-slate-700 shadow-xl overflow-hidden flex flex-col group">
              <div className="w-full aspect-video bg-black overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-slate-300 text-base leading-relaxed flex-grow">{project.description}</p>
                {project.link && (
                  <div className="flex items-center gap-4 mt-6">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md text-sm font-medium transition-colors">
                      <FaGithub /> View on GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* --- Section 3: Machine Learning Case Studies --- */}
      <div className='mb-12'>
        <div className='text-center mb-8'>
          <h3 className="text-2xl sm:text-3xl font-semibold text-glow mb-4">Machine Learning Case Studies</h3>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            A few among the hundreds of projects I did through advanced specializations on <a href='https://www.deeplearning.ai/' target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">DeepLearning.AI</a>, covering core concepts in NLP, Computer Vision, and sequence models.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {course_projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg border border-slate-700 shadow-xl overflow-hidden flex flex-col group">
              <div className="w-full aspect-video bg-black overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed flex-grow">{project.description}</p>
                  <div className="flex items-center gap-4 mt-6">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md text-sm font-medium transition-colors">
                          <FaGithub /> View on GitHub
                      </a>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Final "See More" Button --- */}
      <div className="text-center mt-16">
        <a href='https://github.com/mahdertesf' target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105">
          <FaGithub /> See More on My GitHub Profile
        </a>
      </div>

    </SectionWrapper>
  );
};

export default Projects;