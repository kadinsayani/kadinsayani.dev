import { appData } from "../data";
import { IoLogoGithub } from "react-icons/io5";
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
                  <IoLogoGithub size="25px" />
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
