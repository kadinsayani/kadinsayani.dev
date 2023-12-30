import { TypeAnimation } from "react-type-animation";

function Typing() {
    return (
        <div>
            <TypeAnimation
                sequence={[
                    "> _",
                    1000,
                    "> Software Developer",
                    100000000000,
                    "",
                ]}
                speed={50}
                repeat={Infinity}
                wrapper={"h2"}
            />
        </div>
    );
}

export default Typing;
