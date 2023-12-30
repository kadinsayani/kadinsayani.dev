import { appData } from "../../data";
import { IoLogoGithub } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <div className="app-container">
        {appData.map((data, key) => {
          return (
            <Link key={key} to={`${data.page}`}>
              <div className="app-item" key={key}>
                {data.name}
                <div>
                  <a href={data.repo} target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub size="25px" />
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
