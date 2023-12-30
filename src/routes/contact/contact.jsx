import { IoLogoGithub } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Contact() {
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
        </div>
    );
}
