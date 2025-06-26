import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

const Contact = () => {
  return (
    <>
      <SectionWrapper id="contact">
        <div className="flex flex-col items-center justify-center animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Contact Me
          </h2>

          {/* Main Contact Card */}
          <div className="
            bg-gradient-to-br from-gray-900 to-slate-900 
            rounded-lg border border-slate-700 shadow-xl 
            w-full max-w-4xl p-8 md:p-12 text-slate-300
          ">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-glow mb-4">Let's Connect</h3>
              <p className="text-lg text-slate-400 mb-8">
                I'm currently seeking new opportunities. Feel free to reach out via email, phone, or find me on the web.
              </p>
            </div>
            
            {/* Contact Details Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Email */}
              <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <FaEnvelope className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a
                    href="mailto:mahdertesfaye11@gmail.com"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 break-all"
                  >
                    mahdertesfaye11@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <FaPhoneAlt className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <a
                    href="tel:+251921957652"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    +251921957652
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-xl font-semibold text-white mb-6">Find me on the web</h4>
              <div className="flex justify-center gap-8">
                <a
                  href="https://github.com/mahdertesf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                >
                  <FaGithub size={40} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mahder-tesfaye-abebe-396095327/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedin size={40} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Enhanced Footer */}
      <footer className="w-full bg-slate-900 border-t border-slate-800 py-6 mt-16 text-center text-slate-400">
        <div className="flex justify-center gap-6 mb-4">
            <a href="https://github.com/mahdertesf" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors"><FaGithub size={24}/></a>
            <a href="https://www.linkedin.com/in/mahder-tesfaye-abebe-396095327/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors"><FaLinkedin size={24}/></a>
            <a href="mailto:mahdertesfaye11@gmail.com" aria-label="Email" className="hover:text-white transition-colors"><FaEnvelope size={24}/></a>
        </div>
        <p>
          © {new Date().getFullYear()} Mahder Tesfaye Abebe. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Contact;