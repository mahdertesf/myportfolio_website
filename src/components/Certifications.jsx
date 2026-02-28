import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const certifications = [
  { name: 'Machine Learning Specialization', issuer: 'DeepLearning.AI & Stanford University' },
  { name: 'Deep Learning Specialization', issuer: 'DeepLearning.AI' },
  { name: 'TensorFlow Specialization & TensorFlow Advanced Techniques', issuer: 'DeepLearning.AI' },
  { name: 'Natural Language Processing Specialization', issuer: 'DeepLearning.AI' },
  { name: 'Meta Full-Stack Developer Professional Certificate', issuer: 'Meta on Coursera' },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-zinc-900/30 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>

        <motion.p
          className="text-zinc-400 mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Holder of <span className="text-zinc-200 font-semibold">34+ certifications</span> in
          AI and Web Development from industry leaders.
        </motion.p>

        <motion.div
          className="grid sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-zinc-900/60 rounded-lg border border-zinc-800 hover:border-emerald-500/30 transition-colors duration-200"
            >
              <FaCheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-zinc-100 font-medium leading-snug">{cert.name}</p>
                <p className="text-zinc-500 text-sm mt-0.5">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-zinc-500 mt-8 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full list of verifiable certificates available upon request.
        </motion.p>
      </div>
    </section>
  );
};

export default Certifications;
