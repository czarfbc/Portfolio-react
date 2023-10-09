/* eslint-disable array-callback-return */
import "./Projects.css";
import assets from "../Assets/index.js";
import { useEffect, useState } from "react";

function Projects() {
  const [repository, setRepository] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/czarfbc/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepository(data);
      });
  }, []);

  return (
    <div id="projects" className="projects">
      <h2 className="projects_h2">Projetos</h2>
      <div className="projects_box">
        {repository.map((repo) => {
          switch (repo.language) {
            case "CSS":
              var iconProject = assets.css;
              break;

            case "JavaScript":
              iconProject = assets.js;
              break;

            case "SCSS":
              iconProject = assets.sass;
              break;

            case "TypeScript":
              iconProject = assets.typescript;
              break;

            case "Python":
              iconProject = assets.python;
              break;

            case "Java":
              iconProject = assets.java;
              break;

            default:
              break;
          }
          switch (repo.name) {
            case "Portfolio":
              var linkDeploy = "https://czar-portifolio.netlify.app/";
              break;

            case "Portfolio-react":
              linkDeploy = "https://cezarportfolio.netlify.app/";
              break;

            case "Pokedex":
              linkDeploy = "https://czar-pokedex.netlify.app/";
              break;

            case "New-Pokedex":
              linkDeploy = "https://cezar-newpokedex.netlify.app/";
              break;

            default:
              linkDeploy = repo.html_url;
              break;
          }

          if (repo.language != null) {
            return (
              <div className="projects_box_single">
                <h4>Linguagem predominante</h4>
                <img className="projects_img" src={iconProject} alt="" />
                <h5>{repo.name}</h5>
                <div className="projects_btn">
                  <a
                    className="projects_btn_a btn_a_1"
                    href={repo.html_url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    className="projects_btn_a btn_a_2"
                    href={linkDeploy}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Preview
                  </a>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Projects;
