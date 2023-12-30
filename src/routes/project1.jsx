import { useNavigate } from "react-router-dom";
import { projectData } from "../data";
import "../styles/App.css";
import { PropTypes } from "prop-types";
import { IoArrowBack } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLink } from "react-icons/io5";
import Slide from "../components/slide";
import ScrollToTop from "../components/scrollToTop.jsx";

function Project1(props) {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  const project = projectData.find((item) => item.name == props.name);

  return (
    <div>
      <ScrollToTop />
      <button onClick={back} className="back-button">
        <IoArrowBack size={40} color={"#ffffffde"} />
      </button>
      <div className="project-item-container">
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
        <img src={project.img} />
        <div className="skip">
          <h2>Detailed Sketches</h2>
          <Slide images={project.detailedImages} />
          <div className="writeup" style={{ textAlign: "left" }}>
            <ol>
              {project.detailedPoints.map((detailedPoint, index) => (
                <li key={index}>{detailedPoint.point}</li>
              ))}
            </ol>
            {project.detailedWriteup.map((p) => (
              <p key="p">{p}</p>
            ))}
          </div>
          <h2>Concept Sketches</h2>
          <Slide images={project.conceptImages} />
          <div className="writeup" style={{ textAlign: "left" }}>
            <ol>
              {project.conceptPoints.map((conceptPoint, index) => (
                <li key={index}>{conceptPoint.point}</li>
              ))}
            </ol>
            {project.conceptWriteup.map((p) => (
              <p key="p">{p}</p>
            ))}
          </div>
          <div>
            <h2>Video</h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/19pYyHMV0e8?si=QKF4ZsyqyruV9cjB"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

Project1.propTypes = {
  name: PropTypes.string,
};

export default Project1;
