import './App.css';
import Header from './components/1-Header/Header';
import Mockup from './components/2-Mockup/Mockup';
import AboutMe from './components/3-AboutMe/AboutMe';
import Projects from './components/4-Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Mockup/>
      <AboutMe/>
      <Projects/>
    </div>
  );
}

export default App;