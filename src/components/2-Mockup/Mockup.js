import './Mockup.css';
import mockup from '../Image/mockup.webp'

function Mockup() {
    return (
      <div className="mockup">
        <div className="mockup_texto">
            <h1 className="mockup_h1">Oi, eu sou<br/>
            <span className="mockup_span">Cézar Fernando.</span>
            <br/>Desenvolvedor Front-end.</h1>
            <a className='neonBtn' href='/'>Linkedin</a>
        </div>
        <img src={mockup} alt=''/>
      </div>
    );
  }
  
export default Mockup;