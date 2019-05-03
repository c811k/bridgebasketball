import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white px-3">
                <a className="navbar-brand" href="/"><img src={logo} alt="logo" height="50" width="50" /><span className="text-secondary">B R I D G E</span> <span className="text-warning">B A S K E T B A L L</span></a>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto mb-1">
                    <li className="btn nav-item">
                        <Link to="/scores" className={window.location.pathname === "/scores" ? "nav-link active rounded shadow-sm" : "nav-link rounded"}>SCORES</Link>
                    </li>
                    <li className="btn nav-item disabled">
                        <Link to="#" className={window.location.pathname === "/schedule" ? "nav-link active rounded shadow-sm" : "nav-link rounded"}>SCHEDULE</Link>
                    </li>
                    <li className="btn nav-item">
                        <Link to="/standing" className={window.location.pathname === "/standing" ? "nav-link active rounded shadow-sm" : "nav-link rounded"}>STANDING</Link>
                    </li>
                    <li className="btn nav-item">
                        <Link to="/stats" className={window.location.pathname === "/stats" ? "nav-link active rounded shadow-sm" : "nav-link rounded"}>STATS</Link>
                    </li>
                    <li className="btn nav-item disabled">
                        <Link to="#" className={window.location.pathname === "/players" ? "nav-link active rounded shadow-sm" : "nav-link rounded"}>PLAYERS</Link>
                    </li>
                    <li className="btn nav-item">
                        <Link to="/rules" className={window.location.pathname === "/rules" ? "nav-link active rounded shadow-sm" : "nav-link rounded"}>RULES</Link>
                    </li>
                    {/* <li className="btn nav-item">
                        <Link to="/login" className={window.location.pathname === "/login" ? "nav-link active rounded shadow-sm" : "nav-link rounded"}>LOGIN</Link>
                    </li> */}
                </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;