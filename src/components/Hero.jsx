import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <motion.div
            className="flex-shrink-0 lg:order-last"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-44 h-44 sm:w-52 sm:h-52 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden ring-4 ring-zinc-800 shadow-2xl shadow-emerald-500/5">
              <img
                src="/assets/images/profile.png"
                alt="Mahder Tesfaye Abebe"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-emerald-400 font-medium text-sm uppercase tracking-widest mb-4">
                AI and backend engineer
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-50 tracking-tight leading-[1.1]">
                Mahder Tesfaye
                <br />
                <span className="text-zinc-400">Abebe</span>
              </h1>
            </div>

            <p className="text-zinc-400 leading-relaxed max-w-2xl text-base sm:text-lg mx-auto lg:mx-0">
              Results-driven engineer with 5+ years deploying production-grade AI systems
              and scalable backend architectures. I build autonomous AI agents, RAG pipelines,
              and LLM-powered workflows on robust Python backends — delivering measurable
              impact like 40% fewer support tickets, 30% less fraud, and 40% lower API latency at scale.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="mailto:mahdertesfaye11@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-zinc-950 bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
              >
                <FaEnvelope /> Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
