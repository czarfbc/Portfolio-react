import './Mockup.css';
import assets from '../Assets/index.js';
import { TypeAnimation } from 'react-type-animation';

function Mockup() {
  return (
    <div className="mockup">

      <div className="mockup_texto">
        <h1 className="mockup_h1">Oi, eu sou<br/>
        <span className="mockup_span">Cézar Fernando.</span>
        <br/>
          <TypeAnimation
            sequence={[
              
              '',
              1500,

              'Desenvolvedor Full-Stack Jr',
              1500, 
              
            ]}
            wrapper="div"
            cursor={true}
            repeat={false}
          />
        </h1>

        <div className='projects_btn mockup_btn'>

          <a className='link-btn link-btn-1' href={assets.curriculo} download='curriculo-cezarfernando'><img className='btn_image' src={assets.cv_image} alt=''/>Download CV</a>

          <a className='link-btn link-btn-2' href='https://www.linkedin.com/in/cezar-fernando/' rel='noreferrer' target='_blank'><img className='btn_image' src={assets.linkedin2} alt=''/>Linkedin</a>   
          
        </div>
      </div>
      
      <img className='mockup_image' src={assets.mockup_image} alt=''/>
    </div>
  );
}
  
export default Mockup;