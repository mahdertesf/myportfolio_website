import React from 'react';
import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center animate-fadeIn">About Me</h2>

      <div className="flex justify-center animate-fadeIn">
        <div className="bg-gradient-to-br from-gray-900 to-slate-900 p-8 md:p-12 rounded-xl shadow-2xl border border-glow animate-glowBorder max-w-4xl w-full">
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed text-center">
            Results-driven <span className="text-white font-semibold">AI and backend engineer</span> with{' '}
            <span className="text-cyan-400 font-semibold">5+ years</span> of experience building production-grade
            AI agent systems and scalable backend architectures. Specializing in{' '}
            <span className="text-white font-semibold">autonomous AI agents</span>,{' '}
            <span className="text-white font-semibold">RAG pipelines</span>, and{' '}
            <span className="text-white font-semibold">LLM-powered workflows</span> backed by
            robust Python backends (Django, FastAPI, Flask). Proven impact: reduced support tickets by{' '}
            <span className="text-cyan-400 font-semibold">40%</span> with a RAG chatbot, cut financial fraud by{' '}
            <span className="text-cyan-400 font-semibold">30%</span> with real-time ML, and architected
            microservices that slashed API latency by{' '}
            <span className="text-cyan-400 font-semibold">40%</span>.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
