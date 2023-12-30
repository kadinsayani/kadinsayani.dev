import "./App.css";
import Navbar from "../components/navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <ScrollRestoration />
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
