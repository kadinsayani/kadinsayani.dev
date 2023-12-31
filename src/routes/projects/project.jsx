import { appData } from "../../data";
import "../App.css";
import { PropTypes } from "prop-types";
import { IoLogoGithub } from "react-icons/io5";
import { IoLink } from "react-icons/io5";
import { GrAppleAppStore } from "react-icons/gr";
import { useEffect, useState } from "react";

export default function Project(props) {
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
      {img1Loaded && <img src={img1} alt={app.name} className="app-img" />}
      {img2Loaded && <img src={img2} alt={app.name} className="app-img" />}
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string,
};
