import { appData } from "../data";
import { FaGithub } from "react-icons/fa";
import "../styles/App.css";

function Apps() {
  return (
    <>
      <h2>Apps</h2>
      <div className="app-container">
        {appData.map((data, key) => {
          return (
            <div className="app-item" key={key}>
              {data.name}
              <div>
                <a href={data.repo} target="_blank" rel="noopener noreferrer">
                  <FaGithub size="25px" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Apps;
