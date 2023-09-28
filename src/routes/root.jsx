import "../styles/App.css";
import Me from "../components/me";
import Apps from "../components/apps";
import Projects from "../components/projects";
import Header from "../components/header";
import { useEffect } from "react";
// import { PacmanLoader } from "react-spinners";

function Root() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <div>
      {/* {isLoading ? (
        <div className="center-container">
          <PacmanLoader color="#ffffffde" aria-label="Loading Spinner" />
        </div>
      ) : ( */}
      <div>
        <Header />
        <Me />
        <Apps />
        <Projects />
        <p>Kadin Sayani © 2023</p>
      </div>
      {/* )} */}
    </div>
  );
}

export default Root;
