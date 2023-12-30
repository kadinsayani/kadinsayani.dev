import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "../components/navbar";
import Home from "./home";

export default function Root() {
    const isHomeRoute = window.location.pathname === "/";

    if (isHomeRoute) {
        return (
            <div>
                <Navbar />
                <Home />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}
