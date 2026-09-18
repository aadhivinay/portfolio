import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SapExpertise from './components/SapExpertise';
import BusinessProcesses from './components/BusinessProcesses';
import SapCapstone from './components/SapCapstone';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-ink-50 dark:bg-ink-950 transition-colors duration-300">
      <CustomCursor />
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero />
        <About />
        <SapExpertise />
        <BusinessProcesses />
        <SapCapstone />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
