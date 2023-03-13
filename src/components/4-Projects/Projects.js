/* eslint-disable array-callback-return */
import './Projects.css';
import assets from '../Assets/index.js';
import { useEffect, useState } from 'react';

function Projects() {
  
  const [rep, setRep] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/czarfbc/repos')
    .then(res => res.json()).then(data => {
      setRep(data)
    })
  }, [])
  
  return (
    <div id='projects' className="projects">
      <h2 className="projects_h2">Projetos</h2>
      <div className='projects_box'>
      
      {rep.map(repo => {
        switch (repo.language) {
          case "CSS":
            var iconProject = assets.css_image
            break;

          case "JavaScript":
            iconProject = assets.js_image
            break;

          case "SCSS":
            iconProject = assets.sass_image
            break;

          default:
            break;
        }

        if (repo.language != null) {
          return (
          
            <div className='projects_box_single'>
              <h4>Linguagem predominante</h4>
              <img className='projects_img' src={iconProject} alt=''/>
              <h5>{repo.name}</h5>
              <div className='projects_btn'>
                <a className='projects_btn_a btn_a_1' href={repo.html_url} rel='noreferrer' target='_blank'>Github</a>
                <a className='projects_btn_a btn_a_2' href={repo.html_url} rel='noreferrer' target='_blank'>Preview</a>
              </div>
            </div>
            
          )
        }

      })}
      </div> 
    </div>
  );
}

export default Projects;