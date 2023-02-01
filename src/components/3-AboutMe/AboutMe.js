import './AboutMe.css';
import assets from '../Assets/index.js';

function AboutMe() {
  return (
    <div id='aboutMe' className="aboutMe">
      
      <div className="aboutMe-box">
        <img className='about_image' src={assets.czar_image} alt=''/>
        <div className="about_texto">
          <h2 className='about_h2'>Sobre mim</h2>
          <h3 className='about_h3'>Meu nome é Cézar Fernando e sou um apaixonado por tecnologia. Comecei a trilhar o caminho da programação em 2017 com Python e C#, programando jogos na Unity, e agora em tecnologia para desenvolvimento front-end, estudando para ser um desenvolvedor Fullstack.</h3>
        </div>
      </div>

      <div className='contacts'>
        <div>
          <div className='contact'>
            <p>Endereço de email</p>
            <a href='mailto:cezarfbc@gmail.com'>cezarfbc@gmail.com</a>
          </div>

          <div className='contact'>
            <p>Github</p>
            <a href='https://github.com/czarfbc' rel='noreferrer' target='_blank'>@github.com/czarfbc</a>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default AboutMe;