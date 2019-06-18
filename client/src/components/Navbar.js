import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white px-3">
                <a className="navbar-brand" href="/"><img src={logo} alt="logo" height="50" width="50" /><span className="text-secondary">BRIDGE</span> <span className="text-warning">BASKETBALL</span></a>
                <button className="navbar-toggler border-0 " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto mb-1">
                    <li className="btn nav-item">
                        <Link to="/scores/week5" className={window.location.pathname === "/scores/week5" ? "nav-link active rounded shadow-sm" : "nav-link rounded"}>SCORES</Link>
                    </li>
                    <li className="btn nav-item">
                        <Link to="/schedule/june" className={window.location.pathname === "/schedule/june" ? "nav-link active rounded shadow-sm" : "nav-link rounded"}>SCHEDULE</Link>
                    </li>
                    <li className="btn nav-item">
                        <Link to="/standing" className={window.location.pathname === "/standing" ? "nav-link active rounded shadow-sm" : "nav-link rounded"}>STANDING</Link>
                    </li>
                    <li className="btn nav-item">
                        <Link to="/stats" className={window.location.pathname === "/stats" ? "nav-link active rounded shadow-sm" : "nav-link rounded"}>STATS</Link>
                    </li>
                    <li className="btn nav-item">
                        <Link to="/players/1" className={window.location.pathname === "/players/1" ? "nav-link active rounded shadow-sm" : "nav-link rounded"}>PLAYERS</Link>
                    </li>
                    <li className="btn nav-item">
                        <Link to="/rules" className={window.location.pathname === "/rules" ? "nav-link active rounded shadow-sm" : "nav-link rounded"}>RULES</Link>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;