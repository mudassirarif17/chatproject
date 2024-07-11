import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CustomCursor from './components/CustomCursor';


function App() {
  return (
    <>
      <CustomCursor />
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <Experience/>
      <Projects/>
    </>
  );
}

export default App;
