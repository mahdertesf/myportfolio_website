import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FaCheckCircle, FaLinkedin, FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  return (
    <SectionWrapper id="certifications">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center animate-fadeIn">
        Certifications & Training
      </h2>

      <div className="flex justify-center animate-fadeIn">
        {/* Main Card Container */}
        <div className="
          bg-gradient-to-br from-gray-900 to-slate-900 
          rounded-lg border border-slate-700 shadow-xl 
          w-full max-w-4xl p-8 md:p-12 text-center
        ">
          
          {/* Header Icon */}
          <div className="flex justify-center mb-6">
            <FaCertificate className="text-5xl text-cyan-400" />
          </div>

          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            I've validated my skills with <strong className="text-white">34+ certifications</strong> across AI and Web Development from industry leaders, including these highlights from Coursera:
          </p>

          {/* List of Certifications */}
          <ul className="space-y-4 text-slate-300 text-left max-w-2xl mx-auto">
            <li className="flex items-start gap-4">
              <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-white">Machine Learning Specialization</strong> (deeplearning.ai, Stanford): Mastered core ML algorithms and best practices.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-white">Deep Learning Specialization</strong> (deeplearning.ai): Deep dive into CNNs, RNNs, and Transformers using TensorFlow.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-white">TensorFlow: Advanced Techniques Specialization</strong> (deeplearning.ai): Expertise in the Functional API, custom layers, and generative AI.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-white">Natural Language Processing Specialization</strong> (deeplearning.ai): Applied advanced NLP techniques for real-world applications.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-white">Meta Back-End & Front-End Developer Certificates</strong>: Comprehensive full-stack development skills with modern technologies.
              </span>
            </li>
          </ul>

          {/* LinkedIn Link */}
          <p className="text-base text-slate-400 mt-10">
            For a complete list of verifiable certificates, please visit my
            <a 
              href="https://www.linkedin.com/in/mahder-tesfaye-abebe-396095327/" 
              className="inline-flex items-center gap-2 font-semibold text-cyan-400 hover:underline ml-2" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn Profile <FaLinkedin />
            </a>.
          </p>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default Certifications;