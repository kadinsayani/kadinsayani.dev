import { useNavigate } from "react-router-dom";
import { projectData } from "../data";
import "../styles/App.css";
import { PropTypes } from "prop-types";
import { IoArrowBack } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLink } from "react-icons/io5";
import Slide from "../components/slide";
import ScrollToTop from "../components/scrollToTop.jsx";
import PianoImg from "/project2/PianoUnlock/img.png";
import CokeMachineImg from "/project2/CokeMachineUnlock/img.png";

function Project2(props) {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  const project = projectData.find((item) => item.name == props.name);

  return (
    <div>
      <ScrollToTop />
      <button onClick={back} className="back-button">
        <IoArrowBack size={40} color={"#edf5fc"} />
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
        <div className="PianoUnlock">
          <h2>Piano Unlock (Touch Interface)</h2>
          <img src={PianoImg} height={400} />
          <div className="skip">
            <h2>Detailed Sketches</h2>
            <Slide images={project.PianoUnlock.detailedImages} />
            <div className="writeup" style={{ textAlign: "left" }}>
              <ol>
                {project.PianoUnlock.detailedPoints.map(
                  (detailedPoint, index) => (
                    <li key={index}>{detailedPoint.point}</li>
                  )
                )}
              </ol>
              {project.PianoUnlock.detailedWriteup.map((p) => (
                <p key="p">{p}</p>
              ))}
            </div>
            <h2>Concept Sketches</h2>
            <Slide images={project.PianoUnlock.conceptImages} />
            <div className="writeup" style={{ textAlign: "left" }}>
              <ol>
                {project.PianoUnlock.conceptPoints.map(
                  (conceptPoint, index) => (
                    <li key={index}>{conceptPoint.point}</li>
                  )
                )}
              </ol>
              {project.PianoUnlock.conceptWriteup.map((p) => (
                <p key="p">{p}</p>
              ))}
            </div>
            <div>
              <h2>Video</h2>
              <iframe
                width="375"
                height="667"
                src="https://www.youtube.com/embed/gy0F1FTI8Qc"
                title="Piano Unlock Interface"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="CokeMachineUnlock">
          <h2>Coke Machine Unlock (Sensor Interface)</h2>
          <img src={CokeMachineImg} height={400} />
          <div className="skip">
            <h2>Detailed Sketches</h2>
            <Slide images={project.CokeMachineUnlock.detailedImages} />
            <div className="writeup" style={{ textAlign: "left" }}>
              <ol>
                {project.CokeMachineUnlock.detailedPoints.map(
                  (detailedPoint, index) => (
                    <li key={index}>{detailedPoint.point}</li>
                  )
                )}
              </ol>
              {project.CokeMachineUnlock.detailedWriteup.map((p) => (
                <p key="p">{p}</p>
              ))}
            </div>
            <h2>Concept Sketches</h2>
            <Slide images={project.CokeMachineUnlock.conceptImages} />
            <div className="writeup" style={{ textAlign: "left" }}>
              <ol>
                {project.CokeMachineUnlock.conceptPoints.map(
                  (conceptPoint, index) => (
                    <li key={index}>{conceptPoint.point}</li>
                  )
                )}
              </ol>
              {project.CokeMachineUnlock.conceptWriteup.map((p) => (
                <p key="p">{p}</p>
              ))}
            </div>
            <div>
              <h2>Video</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/sVWZkBENqEM?si=3fl6C4vs8p6g3HNu"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Project2.propTypes = {
  name: PropTypes.string,
};

export default Project2;
