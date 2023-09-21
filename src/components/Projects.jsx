import { projectData } from "../data";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <h2>CPSC 581 Projects</h2>
      <div className="project-container">
        {projectData.map((data, key) => {
          return (
            <Link key={key} to={`${data.page}`}>
              <div className="project-item" key={key}>
                {data.name}
                <p>{data.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
