import { TypeAnimation } from "react-type-animation";

function Typing() {
  return (
    <div>
      <TypeAnimation
        sequence={[
          "> _",
          1000,
          "> Software Developer",
          1000,
          "> Web",
          1000,
          "> Systems",
          1000,
          "> Mobile",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        wrapper={"h2"}
      />
    </div>
  );
}

export default Typing;
