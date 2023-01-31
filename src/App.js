import './App.css';
import Header from './components/1-Header/Header';
import Mockup from './components/2-Mockup/Mockup';
import AboutMe from './components/3-AboutMe/AboutMe';
import Projects from './components/4-Projects/Projects';
import Skills from './components/5-Skills/Skills';
import Footer from './components/6-Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Mockup/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;