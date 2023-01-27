import './AboutMe.css';
import czar from '../Image/czar.jpg';

function AboutMe() {
    return (
      <div className="aboutMe">
        <img className='about_image' src={czar} alt=''/>
        <div className="about_texto">
            <h2 className='about_h2'>Sobre mim</h2>
            <h3 className='about_h3'>Meu nome é Cézar Fernando e sou um apaixonado por tecnologia. Comecei a trilhar o caminho da programação em 2017 com Python e C#, programando jogos na Unity, e agora em tecnologia para desenvolvimento front-end, estudando para ser um desenvolvedor Fullstack.</h3>
        </div>
      </div>
    );
  }
  
export default AboutMe;