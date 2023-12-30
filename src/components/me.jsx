import { TypeAnimation } from "react-type-animation";
import "../styles/App.css";
import me from "../assets/memoji.png";
import { IoLogoGithub } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

function Me() {
  return (
    <>
      <img className="me-img" src={me} width="200" height="200" />
      <TypeAnimation
        sequence={[
          "> _",
          1000,
          "> Software Developer",
          1000,
          "> macOS",
          1000,
          "> iOS",
          1000,
          "> Web",
          1000,
          "> Systems",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        wrapper={"h2"}
      />
      <div className="contact">
        <a href="mailto:me@kadinsayani.dev">
          <IoMail size={30} />
        </a>
        <a href="https://www.linkedin.com/in/kadinsayani">
          <IoLogoLinkedin size={30} />
        </a>
        <a href="https://www.github.com/kadinsayani">
          <IoLogoGithub size={30} />
        </a>
      </div>
    </>
  );
}

export default Me;
