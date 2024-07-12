import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';


function App() {
  return (
    <>
      {/* <CustomCursor /> */}
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
