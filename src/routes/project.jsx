import { useNavigate } from "react-router-dom";
import { projectData } from "../data";
import "../styles/App.css";
import { PropTypes } from "prop-types";
import { BiArrowBack } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

function Project(props) {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const project = projectData.find((item) => item.name == props.name);

  return (
    <div>
      <button onClick={back} className="back-button">
        <BiArrowBack size={40} />
      </button>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <a href={project.repo}>
        <FaGithub size="25px" />
      </a>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string,
};

export default Project;
