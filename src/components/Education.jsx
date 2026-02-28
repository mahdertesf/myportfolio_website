import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const coursework = [
  'Machine Learning', 'Data Mining', 'Data Structures & Algorithms',
  'Natural Language Processing', 'Computer Vision', 'Image Processing',
  'Information Retrieval', 'Database Systems', 'Software Development',
];

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <FaGraduationCap className="text-emerald-400 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-50">Addis Ababa University</h3>
              <p className="text-zinc-500 text-sm">Addis Ababa, Ethiopia</p>
            </div>
          </div>

          <p className="text-zinc-200 font-medium text-lg mb-6">
            Bachelor of Science in Electrical and Computer Engineering
          </p>

          <div>
            <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-sm text-zinc-400 bg-zinc-800/80 rounded-md border border-zinc-700/50"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
