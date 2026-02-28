import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    title: 'Senior Generative AI Engineer',
    company: 'ChipChip',
    location: null,
    period: 'Sep 2025 - Feb 2026',
    bullets: [
      'Engineered a robust, multilingual e-commerce chatbot utilizing LangChain, LangGraph, and the Gemini API, enabling users to search for goods, compare prices across different marketplaces, and place orders.',
      'Implemented conversational capabilities supporting both voice and text inputs in multiple languages, including Amharic, English, and Afaan Oromo.',
      'Developed an AI-powered agent using LangGraph to fully automate product ordering, product catalog additions, and mobile app UI interactions, replacing manual workflows.',
      'Automated complex desktop workflows leveraging the Gemini API, streamlining internal operations and driving significant operational efficiency.',
    ],
  },
  {
    title: 'Senior Data Scientist',
    company: 'IE Networks',
    location: null,
    period: 'Mar 2022 - Jun 2025',
    bullets: [
      'Led the design and execution of three high-impact machine learning initiatives for a leading payment gateway, optimizing transaction security and enhancing customer experience metrics.',
      'NLP & Generative AI: Developed advanced NLP models and RAG pipelines using LangChain and OpenAI to automate customer inquiries, analyzing text data to reduce support ticket volume by 40%.',
      'Predictive Fraud Modeling: Designed and trained real-time classification models using TensorFlow and Scikit-learn to detect anomalous transaction patterns, successfully reducing financial chargebacks by 30%.',
      'Business Intelligence: Engineered data visualization pipelines and dashboards to interpret complex B2B datasets, deriving actionable insights that contributed to a 15% increase in client acquisition.',
    ],
  },
  {
    title: 'AI Researcher',
    company: "Kenya's Inaugural AI Institute to Advance Innovation",
    location: null,
    period: 'Jan 2023 - Jan 2025',
    bullets: [
      'Spearheaded research initiatives focused on developing and deploying foundational AI technologies tailored specifically for the African continent.',
      'Collaborated with cross-functional teams to build localized machine learning models aimed at driving regional innovation and solving unique socio-economic challenges.',
    ],
  },
  {
    title: 'Remote Machine Learning Consultant (Contract)',
    company: 'Oasis Outsourcing',
    location: null,
    period: 'Mar 2023 - Sep 2023',
    bullets: [
      'Developed and deployed a sophisticated financial forecasting system by integrating NLP for sentiment analysis with a Time-Series model for market prediction.',
      'Achieved a 20% improvement in predictive accuracy over existing client benchmarks.',
      'Engineered an automated data and model execution pipeline using n8n, eliminating manual data gathering work equivalent to three full-time junior analysts.',
    ],
  },
  {
    title: 'Remote Computer Vision Engineer (Contract)',
    company: 'Arcy',
    location: null,
    period: 'Jun 2022 - Dec 2022',
    bullets: [
      'Designed and deployed a high-accuracy machine vision system for warehouse automation.',
      'Fine-tuned YOLO (PyTorch) and TensorFlow models, achieving 99.5% accuracy in object detection and classification.',
      'Deployed the system as a containerized microservice on a GPU instance using Docker, reducing manual inventory labor by 80%.',
    ],
  },
  {
    title: 'Backend Python Developer',
    company: 'Addis Pay Financial Technology',
    location: null,
    period: 'Oct 2020 - Jan 2022',
    bullets: [
      'Served as a key contributor in migrating a monolithic architecture to a microservices-based system in a high-traffic FinTech environment.',
      'Developed and deployed robust backend services using Django, Flask, and FastAPI.',
      'The migration resulted in a 40% reduction in API latency and enabled 60% faster feature delivery.',
      'Established CI/CD pipelines using Git for streamlined deployments.',
    ],
  },
  {
    title: 'Data Science Intern',
    company: 'The ACTS AI Institute (ACAII)',
    location: null,
    period: 'Feb 2020 - Aug 2020',
    bullets: [
      'Provided foundational data support for national-level AI initiatives, accelerating project timelines for senior researchers.',
      'Extracted and cleaned large-scale datasets using SQL, Pandas, and NumPy; developed interactive dashboards with Matplotlib and Seaborn for data visualization.',
    ],
  },
];

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-8 border-l-2 border-zinc-800 hover:border-emerald-500/50 transition-colors duration-300 group"
    >
      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-emerald-500 transition-colors duration-300" />

      <div className="pb-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-zinc-50">{exp.title}</h3>
            <p className="text-emerald-400 font-medium">{exp.company}</p>
          </div>
          <div className="text-sm text-zinc-500 flex-shrink-0 sm:text-right">
            <span>{exp.period}</span>
            {exp.location && <span className="block">{exp.location}</span>}
          </div>
        </div>

        <ul className="space-y-2 mt-3">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="text-zinc-400 leading-relaxed flex gap-3 text-[15px]">
              <span className="mt-[9px] w-1 h-1 bg-zinc-600 rounded-full flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
