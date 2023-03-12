import './Projects.css';
import assets from '../Assets/index.js';

function Projects() {
  return (
    <div id='projects' className="projects">
      <h2 className="projects_h2">Projetos</h2>
      <div className='projects_box'>

        <div className='projects_box_single'>
          <h4>Linguagem predominante</h4>
          <img className='projects_img' src={assets.css_image} alt=''/>
          <h5>Portfólio_v1.0</h5>
          <div className='projects_btn'>
            <a className='projects_btn_a btn_a_1' href='https://github.com/czarfbc/Portfolio' rel='noreferrer' target='_blank'>Github</a>
            <a className='projects_btn_a btn_a_2' href='https://czar-portifolio.netlify.app/' rel='noreferrer' target='_blank'>Preview</a>
          </div>
        </div>

        <div className='projects_box_single'>
          <h4>Linguagem predominante</h4>
          <img className='projects_img' src={assets.css_image} alt=''/>
          <h5>Pokedex_v1.0</h5>
          <div className='projects_btn'>
            <a className='projects_btn_a btn_a_1' href='https://github.com/czarfbc/Pokedex' rel='noreferrer' target='_blank'>Github</a>
            <a className='projects_btn_a btn_a_2' href='https://czar-pokedex.netlify.app/' rel='noreferrer' target='_blank'>Preview</a>
          </div>
        </div>

        <div className='projects_box_single'>
          <h4>Linguagem predominante</h4>
          <img className='projects_img' src={assets.js_image} alt=''/>
          <h5>Previsao_Tempo_v0.1</h5>
          <div className='projects_btn'>
            <a className='projects_btn_a btn_a_1' href='https://github.com/czarfbc/Previsao-tempo' rel='noreferrer' target='_blank'>Github</a>
            <a className='projects_btn_a btn_a_2' href='https://github.com/czarfbc/Previsao-tempo' rel='noreferrer' target='_blank'>Preview</a>
          </div>
        </div>

        <div className='projects_box_single'>
          <h4>Linguagem predominante</h4>
          <img className='projects_img' src={assets.sass_image} alt=''/>
          <h5>Portal-Noticias</h5>
          <div className='projects_btn'>
            <a className='projects_btn_a btn_a_1' href='https://github.com/czarfbc/Portal-Noticias' rel='noreferrer' target='_blank'>Github</a>
            <a className='projects_btn_a btn_a_2' href='https://github.com/czarfbc/Portal-Noticias' rel='noreferrer' target='_blank'>Preview</a>
          </div>
        </div>

        <div className='projects_box_single'>
          <h4>Linguagem predominante</h4>
          <img className='projects_img' src={assets.js_image} alt=''/>
          <h5>To-do-list</h5>
          <div className='projects_btn'>
            <a className='projects_btn_a btn_a_1' href='https://github.com/czarfbc/To-do-list-nodejs' rel='noreferrer' target='_blank'>Github</a>
            <a className='projects_btn_a btn_a_2' href='https://github.com/czarfbc/To-do-list-nodejs' rel='noreferrer' target='_blank'>Preview</a>
          </div>
        </div>

        <div className='projects_box_single'>
          <h4>Linguagem predominante</h4>
          <img className='projects_img' src={assets.js_image} alt=''/>
          <h5>Pedra-Papel-Tesoura</h5>
          <div className='projects_btn'>
            <a className='projects_btn_a btn_a_1' href='https://github.com/czarfbc/Pedra--Papel--Tesoura' rel='noreferrer' target='_blank'>Github</a>
            <a className='projects_btn_a btn_a_2' href='https://github.com/czarfbc/Pedra--Papel--Tesoura' rel='noreferrer' target='_blank'>Preview</a>
          </div>
        </div>

      </div> 
    </div>
  );
}

export default Projects;