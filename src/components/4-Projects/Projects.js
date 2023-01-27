import './Projects.css';
import css3 from '../Image/logo-CSS3.png';

function Projects() {
    return (
      <div className="projects">
        <h2 className="projects_h2">Projetos</h2>
        <div className='projects_box'>
            <div className='projects_box_single'>
              <h4>Linguagem predominante</h4>
              <img className='projects_img' src={css3} alt=''/>
              <h5>Lorem Ipsum</h5>
              <div className='projects_btn'>
                <a className='projects_btn_a btn_a_1' href='/'>Github</a>
                <a className='projects_btn_a btn_a_2' href='/'>Preview</a>
              </div>
            </div>
            <div className='projects_box_single'>
              <h4>Linguagem predominante</h4>
              <img className='projects_img' src={css3} alt=''/>
              <h5>Lorem Ipsum</h5>
              <div className='projects_btn'>
                <a className='projects_btn_a btn_a_1' href='/'>Github</a>
                <a className='projects_btn_a btn_a_2' href='/'>Preview</a>
              </div>
            </div>
            <div className='projects_box_single'>
              <h4>Linguagem predominante</h4>
              <img className='projects_img' src={css3} alt=''/>
              <h5>Lorem Ipsum</h5>
              <div className='projects_btn'>
                <a className='projects_btn_a btn_a_1' href='/'>Github</a>
                <a className='projects_btn_a btn_a_2' href='/'>Preview</a>
              </div>
            </div>
        </div> 
      </div>
    );
  }
  
export default Projects;