import { IoLogoGithub, IoMail, IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";
import me from "../assets/memoji.png";

export default function Navbar() {
    return (
        <div className="navbar">
            <a href="https://kadinsayani.dev">
                <div className="me">
                    <img className="me-img" src={me} alt="Kadin Sayani" />
                    <h2>Kadin Sayani</h2>
                </div>
            </a>
            <div className="nav-links">
                <Link to="/">/home</Link>
                <Link to="/projects">/projects</Link>
                <Link to="/blog">/blog</Link>
                <Link to="/contact">/contact</Link>
            </div>
        </div>
    );
}
