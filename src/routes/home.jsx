import "./App.css";
import Typing from "../components/typing";
import Apps from "../components/apps";
import Projects from "../components/projects";

export default function Home() {
  return (
    <div>
      <Typing />
      <Apps />
      <Projects />
    </div>
  );
}
