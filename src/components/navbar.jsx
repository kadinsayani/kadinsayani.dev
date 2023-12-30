import { IoLogoGithub } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";
import me from "../assets/memoji.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="me">
        <img className="me-img" src={me} alt="Kadin Sayani" />
        <h2>Kadin Sayani</h2>
      </div>
      <div className="nav-links">
        <Link to="/">/home</Link>
        <Link to="/projects">/projects</Link>
        <Link to="/blog">/blog</Link>
        <Link to="/contact">/contact</Link>
      </div>
    </div>
  );
}
