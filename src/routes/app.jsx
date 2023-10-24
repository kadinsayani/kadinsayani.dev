import { useNavigate } from "react-router-dom";
import { appData } from "../data";
import "../styles/App.css";
import { PropTypes } from "prop-types";
import { IoArrowBack } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLink } from "react-icons/io5";
import ScrollToTop from "../components/scrollToTop.jsx";
import { GrAppleAppStore } from "react-icons/gr";
import { useEffect, useState } from "react";

function App(props) {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const [logoLoaded, setLogoLoaded] = useState(false);
  const [img1Loaded, setImg1Loaded] = useState(false);
  const [img2Loaded, setImg2Loaded] = useState(false);

  const app = appData.find((item) => item.name == props.name);
  const logo = `/${props.name}/logo.png`;
  const img1 = `/${props.name}/img1.png`;
  const img2 = `/${props.name}/img2.png`;

  useEffect(() => {
    const logoImage = new Image();
    logoImage.onload = () => {
      setLogoLoaded(true);
    };
    logoImage.src = logo;

    const img1Image = new Image();
    img1Image.onload = () => {
      setImg1Loaded(true);
    };
    img1Image.src = img1;

    const img2Image = new Image();
    img2Image.onload = () => {
      setImg2Loaded(true);
    };
    img2Image.src = img2;
  }, [logo, img1, img2]);

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
      {logoLoaded && <img src={logo} alt={app.name} />}
      <p>{app.description}</p>
      <div className="app-img-container">
        {img1Loaded && <img src={img1} alt={app.name} className="app-img" />}
        {img2Loaded && <img src={img2} alt={app.name} className="app-img" />}
      </div>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
};

export default App;
