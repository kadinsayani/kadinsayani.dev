import { useNavigate } from "react-router-dom";
import { appData } from "../data";
import "../styles/App.css";
import { PropTypes } from "prop-types";
import { IoArrowBack } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLink } from "react-icons/io5";

function App(props) {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const app = appData.find((item) => item.name == props.name);

  return (
    <div>
      <button onClick={back} className="back-button">
        <IoArrowBack size={40} color={"#ffffffde"} />
      </button>
      <h1>{app.name}</h1>
      <div className="contact">
        <a href={app.repo}>
          <IoLogoGithub size="25px" />
        </a>
        <a href={app.link}>
          <IoLink size="25px" />
        </a>
      </div>
      <p>{app.description}</p>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
};

export default App;
