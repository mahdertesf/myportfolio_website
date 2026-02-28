import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages & Core',
    items: [
      'Python', 'SQL', 'R', 'JavaScript', 'TypeScript',
      'Linux/Shell', 'Git', 'Docker', 'Kubernetes', 'REST APIs',
    ],
  },
  {
    title: 'Data Science & Statistics',
    items: [
      'Hypothesis Testing', 'A/B Testing', 'Experimental Design',
      'Bayesian Inference', 'Causal Inference', 'Time Series Analysis',
      'Statistical Modeling', 'Predictive Analytics',
    ],
  },
  {
    title: 'AI & Machine Learning',
    items: [
      'NLP', 'Computer Vision', 'Generative AI',
      'Reinforcement Learning', 'Recommender Systems', 'Graph ML (GNNs)',
    ],
  },
  {
    title: 'LLMs & Agentic AI',
    items: [
      'Gemini API', 'OpenAI API', 'LLaMA', 'RAG',
      'LoRA / PEFT', 'Prompt Engineering',
      'LangChain', 'LangGraph', 'CrewAI',
    ],
  },
  {
    title: 'Libraries & Frameworks',
    items: [
      'PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost',
      'LightGBM', 'CatBoost', 'Statsmodels', 'Hugging Face',
      'OpenCV', 'LlamaIndex', 'Pinecone', 'Weaviate',
    ],
  },
  {
    title: 'Visualization & BI',
    items: [
      'Tableau', 'Power BI', 'Plotly', 'Seaborn',
      'Matplotlib', 'Streamlit', 'Dash',
    ],
  },
  {
    title: 'Data Engineering & MLOps',
    items: [
      'AWS SageMaker', 'GCP Vertex AI', 'Databricks',
      'Spark', 'Kafka', 'Airflow', 'MLflow',
      'PostgreSQL', 'MongoDB',
    ],
  },
];

function SkillCard({ category, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="space-y-3"
    >
      <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.items.map((item, i) => (
          <span
            key={i}
            className="px-3 py-1.5 text-sm text-zinc-300 bg-zinc-900 rounded-md border border-zinc-800 hover:border-emerald-500/40 hover:text-zinc-100 transition-colors duration-200"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-zinc-900/30 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
