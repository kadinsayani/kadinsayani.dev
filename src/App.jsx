import "./App.css";
import Me from "./components/Me";
import Apps from "./components/Apps";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="center-container">
          <PacmanLoader color="#ffffffde" aria-label="Loading Spinner" />
        </div>
      ) : (
        <div>
          <Header />
          <Me />
          <Apps />
          <p>Kadin Sayani © 2023</p>
        </div>
      )}
    </div>
  );
}

export default App;
