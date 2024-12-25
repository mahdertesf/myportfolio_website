import React from 'react';
import SectionWrapper from './SectionWrapper';

const About = () => {
    const summary = "I'm a highly motivated and innovative Machine Learning Engineer and Full-Stack Web Developer with a deep-seated passion for exploring the intricacies of AI and its practical applications. My journey has been driven by a desire to understand AI architectures from the ground up, with a particular focus on the underlying mathematical and engineering principles that make these systems work. My dual expertise allows me to bridge the gap between complex algorithms and user-facing applications.";
    const research = "Currently, I am working on the innovative use of deep learning for text-to-image and image-to-text encryption. I am developing a unique neural network architecture that synergizes Convolutional Neural Networks (CNNs) with sequence models like LSTMs and Transformers. This architecture aims to compress and encrypt large volumes of text data, such as entire books, into a single, compact image. This encrypted data can then be interpreted back into text, allowing for a novel method of compression and encryption with variable output sizes. I am exploring various architectures, such as GRUs, LSTMs, and Transformers, fine-tuning them with techniques like residual networks to overcome the challenges of vanishing and exploding gradients in deep neural networks.";
    const favoritePaper = "My favorite research paper is 'Attention is All You Need' by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, and Łukasz Kaiser. This paper has been foundational in the development of modern AI, especially in NLP and the development of models like GPT.";
    return (
        <SectionWrapper id="about">
             <h2 className="text-3xl font-bold mb-8 text-center animate-fadeIn">About Me</h2>
              <div className=' p-6 rounded-lg shadow-lg border border-glow animate-glowBorder flex flex-col gap-4'>
                   <p className='text-light animate-fadeIn'>{summary}</p>
                   <h3 className="text-2xl font-semibold mt-4 animate-fadeIn text-glow">Currently Working On</h3>
                   <p className="text-light animate-fadeIn">{research}</p>
                    <h3 className="text-2xl font-semibold mt-4 animate-fadeIn text-glow">Future Research Interests in AI</h3>
                   <p className="text-light animate-fadeIn">Computer Vision, Natural Language Processing, and Reinforcement Learning and their applications.</p>
                   <h3 className="text-2xl font-semibold mt-4 animate-fadeIn text-glow">Favorite Paper</h3>
                   <p className="text-light animate-fadeIn">{favoritePaper}</p>
              </div>
        </SectionWrapper>
    );
};

export default About;