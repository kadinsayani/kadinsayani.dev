import { useNavigate } from "react-router-dom";
import { projectData } from "../data";
import "../styles/App.css";
import { PropTypes } from "prop-types";
import { IoArrowBack } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";

function Project(props) {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const project = projectData.find((item) => item.name == props.name);

  return (
    <div>
      <button onClick={back} className="back-button">
        <IoArrowBack size={40} />
      </button>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <a href={project.repo}>
        <IoLogoGithub size="25px" />
      </a>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string,
};

export default Project;
