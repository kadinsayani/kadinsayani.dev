import "../styles/App.css";
import { IoLogoGithub } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <div className="socials">
                <a href="mailto:me@kadinsayani.dev">
                    <IoMail size={20} />
                </a>
                <a href="https://www.linkedin.com/in/kadinsayani">
                    <IoLogoLinkedin size={20} />
                </a>
                <a href="https://www.github.com/kadinsayani">
                    <IoLogoGithub size={20} />
                </a>
            </div>
            <h1>Kadin Sayani</h1>
            <Link to="/blog" className="blog-link">
                Blog
            </Link>
        </div>
    );
}

export default Header;
