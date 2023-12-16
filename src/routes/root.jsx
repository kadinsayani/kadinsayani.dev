import "../styles/App.css";
import Me from "../components/me";
import Apps from "../components/apps";
// import Projects from "../components/projects";
import Header from "../components/header";
import ScrollToTop from "../components/scrollToTop";

function Root() {
  return (
    <div>
      <ScrollToTop />
      <div>
        <Header />
        <Me />
        <Apps />
        <p>Kadin Sayani © 2023</p>
      </div>
    </div>
  );
}

export default Root;
