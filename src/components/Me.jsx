import { TypeAnimation } from "react-type-animation";
import "../styles/App.css";
import me from "../assets/memoji.png";

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
    </>
  );
}

export default Me;
