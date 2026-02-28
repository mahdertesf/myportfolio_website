import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <section id="contact" className="py-20 md:py-28 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>

          <motion.p
            className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Open to new opportunities. Feel free to reach out. I'd love to hear from you.
          </motion.p>

          <motion.div
            className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <a
              href="mailto:mahdertesfaye11@gmail.com"
              className="flex items-center gap-3 p-4 bg-zinc-900/60 rounded-lg border border-zinc-800 hover:border-emerald-500/30 transition-colors group"
            >
              <FaEnvelope className="text-emerald-400 text-lg flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-zinc-500 uppercase tracking-wider">Email</p>
                <p className="text-zinc-300 text-sm group-hover:text-zinc-100 transition-colors break-all">
                  mahdertesfaye11@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+251921957652"
              className="flex items-center gap-3 p-4 bg-zinc-900/60 rounded-lg border border-zinc-800 hover:border-emerald-500/30 transition-colors group"
            >
              <FaPhoneAlt className="text-emerald-400 text-lg flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-zinc-500 uppercase tracking-wider">Phone</p>
                <p className="text-zinc-300 text-sm group-hover:text-zinc-100 transition-colors">
                  +251 921 957 652
                </p>
              </div>
            </a>
          </motion.div>

        </div>
      </section>

      <footer className="border-t border-zinc-800/50 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Mahder Tesfaye Abebe</p>
          <div className="flex items-center gap-5">
            <a href="mailto:mahdertesfaye11@gmail.com" className="hover:text-zinc-400 transition-colors">
              <FaEnvelope size={16} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
