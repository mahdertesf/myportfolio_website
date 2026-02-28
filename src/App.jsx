import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
