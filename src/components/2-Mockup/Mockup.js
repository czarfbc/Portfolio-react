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
          <a className='link-btn link-btn-1' href='/'><img className='btn_image' src={assets.cv_image} alt='' style={{width: '1.6rem'}}/>Download CV</a>
          <a className='link-btn link-btn-2' href='/'><img className='btn_image' src={assets.linkedin2} alt=''/>Linkedin</a>   
        </div>
      </div>
      <img src={assets.mockup_image} alt=''/>
    </div>
  );
}
  
export default Mockup;