import { useNavigate } from "react-router-dom";
import { projectData } from "../data";
import "../styles/App.css";
import { PropTypes } from "prop-types";
import { IoArrowBack } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLink } from "react-icons/io5";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
  position: "absolute",
  bottom: "0",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "800px",
};

const buttonStyle = {
  background: "#b620e0",
  border: "0px",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <IoArrowBackCircleSharp size="20px" color="#ffffffde" />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <IoArrowForwardCircleSharp size="20px" color="#ffffffde" />
    </button>
  ),
};

function Project(props) {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const project = projectData.find((item) => item.name == props.name);

  return (
    <div>
      <button onClick={back} className="back-button">
        <IoArrowBack size={40} color={"#ffffffde"} />
      </button>
      <h1>{project.name}</h1>
      <div className="contact">
        <a href={project.repo}>
          <IoLogoGithub size="25px" />
        </a>
        <a href={project.link}>
          <IoLink size="25px" />
        </a>
      </div>
      <h2>{project.project}</h2>
      <p>{project.description}</p>
      <h2>Detailed Sketches</h2>
      <div className="slide-container">
        <Slide {...properties}>
          {project.conceptImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <p>{project.conceptWriteup}</p>
      <h2>Concept Sketches</h2>
      <div className="slide-container">
        <Slide {...properties}>
          {project.detailedImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <p>{project.detailedWriteup}</p>
      <h2>Video</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/RtVM1qv3i3Y?si=p7L_hvGaUazbKtmp"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string,
};

export default Project;
