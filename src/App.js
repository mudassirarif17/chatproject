import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AnimatedCurs from './components/AnimatedCurs';


function App() {
  return (
    <>
      <AnimatedCurs />
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <Experience/>
      <Projects/>
      <Footer />
    </>
  );
}

export default App;
