import './Mockup.css';
import assets from '../Assets/index.js';

function Mockup() {
  return (
    <div className="mockup">
      <div className="mockup_texto">
        <h1 className="mockup_h1">Oi, eu sou<br/>
        <span className="mockup_span">Cézar Fernando.</span>
        <br/>Desenvolvedor Front-end.</h1>
        <div className='projects_btn'>

          <a className='link-btn link-btn-1' href={assets.curriculo} download='curriculo-cezarfernando'><img className='btn_image' src={assets.cv_image} alt=''/>Download CV</a>

          <a className='link-btn link-btn-2' href='https://www.linkedin.com/in/cezar-fernando/' rel='noreferrer' target='_blank'><img className='btn_image' src={assets.linkedin2} alt=''/>Linkedin</a>   
          
        </div>
      </div>
      <img src={assets.mockup_image} alt=''/>
    </div>
  );
}
  
export default Mockup;