import { useNavigate } from "react-router-dom";
import { appData } from "../data";
import "../styles/App.css";
import { PropTypes } from "prop-types";
import { IoArrowBack } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLink } from "react-icons/io5";
import ScrollToTop from "../components/scrollToTop.jsx";
import { GrAppleAppStore } from "react-icons/gr";

function App(props) {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const app = appData.find((item) => item.name == props.name);
  const logo = `/${props.name}/logo.png`;
  const img1 = `/${props.name}/img1.png`;
  const img2 = `/${props.name}/img2.png`;

  return (
    <div>
      <ScrollToTop />
      <button onClick={back} className="back-button">
        <IoArrowBack size={40} color={"#ffffffde"} />
      </button>
      <h1>{app.name}</h1>
      <div className="contact">
        <a href={app.repo}>
          <IoLogoGithub size="25px" />
        </a>
        {app.type === "Apple" ? (
          <a href={app.link}>
            <GrAppleAppStore size="25px" />
          </a>
        ) : (
          <a href={app.link}>
            <IoLink size="25px" />
          </a>
        )}
      </div>
      <img src={logo} alt={app.name} />
      <p>{app.description}</p>
      <img src={img1} alt={app.name} className="app-img" />
      <img src={img2} alt={app.name} className="app-img" />
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
};

export default App;
