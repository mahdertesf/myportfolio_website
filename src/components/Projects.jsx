import React from 'react';
import SectionWrapper from './SectionWrapper';

const Projects = () => {
  const projects = [
    {
      title: 'Fullstack Little Lemon Restaurant Website',
      description: 'A complete website for Little Lemon restaurant built with Django, including reservation management and menu display functionalities.',
      image: '/assets/images/lemon.png', 
      link: 'https://github.com/mahdertesf/Meta_django_web_framework_final_project'
    },
    {
      title: 'Landing Page for a Virtual Reality Platform',
      description: 'A landing page for a Virtual Reality platform designed to attract users with a modern and engaging interface and interactive elements.',
      image: '/assets/images/virtual.png',
      link: 'https://github.com/mahdertesf/VirtualR'
    },
    {
      title: 'School Website',
      description: '6 pages website for a school called Verzantlias School for Future using react and tailwindcss',
      image: '/assets/images/school.png',
      link: 'https://github.com/mahdertesf/Verzantlias-School-for-Future-Website'
    },
    {
      title: 'Object Detection System',
      description: 'Developed an object detection system for autonomous driving using YOLO, with image pre-processing and real-time bounding box detection. Implemented in Python with TensorFlow and Keras, using the drive.ai dataset for training and testing.',
      image: '/assets/images/yolo.png',
      link: 'https://github.com/mahdertesf/Autonomous-Driving---Car-Detection-using-YOLO'
    },
    {
        title: 'A face recognition system using a pre-trained FaceNet model',
        description: 'A face recognition system using a pre-trained FaceNet model to encode face images into 128-dimensional vectors. This project includes face verification and recognition functionalities, leveraging triplet loss for training. The system can verify if a person is who they claim to be and recognize authorized individuals without the need for ID cards.',
        image: '/assets/images/face.png',
        link: 'https://github.com/mahdertesf/Face-Recognition-System'
    },
      {
        title: 'Sign Language Recognition',
        description: 'Developed a multi-class classifier using TensorFlow on a sign language dataset, achieving 99% accuracy in training and over 95% accuracy in the validation dataset within 15 epochs, enhancing accessibility for the hearing impaired. used data from https://www.kaggle.com/datasets/datamunge/sign-language-mnist ',
        image: '/assets/images/sign.png',
        link: 'https://github.com/mahdertesf/Sign-Language-Recognition'
      },
      {
        title: 'Transfer Learning (InceptionV3)',
        description: 'Fine-tuned a pre-trained InceptionV3 model for binary classification (human vs. horse), achieving 99.9% training accuracy and 98.66% validation accuracy in just 3 epochs, improving model efficiency.',
        image: '/assets/images/transfer.png',
        link: 'https://github.com/mahdertesf/Transfer-Learning-InceptionV3-'
      },
     
        {
        title: 'Jazz Music Generation',
          description: 'Built an LSTM-based system for jazz melody prediction, demonstrating creativity in AI-generated music.',
          image: '/assets/images/jazz.png',
          link: 'https://github.com/mahdertesf/Jazz-Music-Generation'
      },
        {
        title: 'Emoji Prediction',
          description: 'Developed an LSTM-based classifier with custom embeddings to predict emojis for input sentences, enhancing user interaction in messaging apps.',
          image: '/assets/images/emoji.png',
           link: 'https://github.com/mahdertesf/Emoji-Prediction'
      },
      {
        title: 'Neural Machine Translation',
        description: 'Created an attention-based model for converting human-readable dates to machine-readable formats, improving data processing accuracy.',
        image: '/assets/images/translate.png',
        link: 'https://github.com/mahdertesf/Neural-Machine-Translation'
      },
      {
        title: 'CBOW Word Embedding',
        description: 'Designed a 2-layer neural network from scratch to train word embeddings, enhancing natural language understanding.',
        image: '/assets/images/cbow.png',
         link: 'https://github.com/mahdertesf/CBOW-Word-Embedding'
      },
      {
        title: 'Trigger Word Detection',
        description: 'Built a high-accuracy model for audio trigger word detection, contributing to the improvement of voice-activated systems.',
         image: '/assets/images/voice.png',
        link: 'https://github.com/mahdertesf/trigger-word-detection-'
      },
    {
        title: 'Named Entity Recognition (NER) Using GRU',
        description: 'Built NER System Using Gated Reccurent Units',
        image: '/assets/images/gru.png',
        link: 'https://github.com/mahdertesf/Named-Entity-Recognition-NER-Using-GRU'
    },
      {
        title: 'Binary Classification Neural Network',
        description: 'Designed and trained a deep neural network from scratch using numpy only for binary classification tasks (e.g., cat vs. dog).',
        image: '/assets/images/network.png',
        link: 'https://github.com/mahdertesf/Neural_network_from_scratch'
      },
      {
        title: 'Question duplicates identifier',
        description: 'Built a model using LSTM that will identify duplicate questions from quora using Siemens Network',
        image: '/assets/images/duplicate.png',
        link: 'https://github.com/mahdertesf/Question-duplicate-identifier'
      },
  ];

  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center animate-fadeIn">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-glow p-4 rounded-lg shadow-md animate-glowBorder relative transition-all duration-300 group">
            <div className="overflow-hidden relative pb-[56.25%] rounded-lg  group-hover:scale-105 transition-transform duration-300">
              <img src={project.image} alt={project.title} className="object-contain absolute top-0 left-0 w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-glow animate-fadeIn">{project.title}</h3>
            <p className="text-light animate-fadeIn ">{project.description}</p>
              <a href={project.link} className=' mt-3 inline-block text-primary hover:text-glow border-b border-primary  transition-colors duration-300 animate-fadeIn'>See Project</a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;