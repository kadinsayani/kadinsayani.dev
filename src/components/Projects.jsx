import { projectData } from "../data";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <div className="project-container">
        {projectData.map((data, key) => {
          return (
            <Link key={key} to={`/project/${data.name}`}>
              <div className="project-item" key={key}>
                {data.name}
                <p>{data.description}</p>
                <div>
                  <a href={data.repo} target="_blank" rel="noopener noreferrer">
                    <FaGithub size="25px" />
                  </a>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
