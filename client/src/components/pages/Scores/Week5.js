import React from "react";
import Footer from "../../Footer";
import logo from "../../../assets/images/logo.jpg";
import Game13 from "../../Teamstats/Game13";
import Game14 from "../../Teamstats/Game14";
import Game15 from "../../Teamstats/Game15";
import Boxscore13 from "../../Boxscores/Game13";
import Boxscore14 from "../../Boxscores/Game14";
import Boxscore15 from "../../Boxscores/Game15";
import Watch13 from "../../Watch/Game13";
import Watch15 from "../../Watch/Game15";

function Week5() {
    return(
        <div>
        <div className="container" id="scores">
            <div className="row mt-5">
                <div className="col-md-6">
                    <h3 className="pb-3 border-bottom border-warning">S C O R E S</h3> 
                </div>
                <div className="col-md-6 text-right">
                    <h3 className="pb-3 border-bottom text-secondary">S E A S O N<span className="text-warning"> 2 0 1 9 </span></h3>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item mt-3">
                                <a className="page-link text-dark border-0" href="/scores/week4" aria-label="Previous" id="left">
                                <span aria-hidden="true"><i className="fas fa-angle-left"></i></span>
                                </a>
                            </li>
                            <li className="page-item disabled text-center">
                                <div className="page-link text-dark border-0"><h5><i className="fas fa-calendar-week fa-2x"></i></h5><p className="small">WEEK 5 - JUNE 9, 2019</p></div>
                            </li>
                            <li className="page-item mt-3">
                                <a className="page-link text-dark border-0" href="/scores/week6" aria-label="Next" id="right">
                                <span aria-hidden="true"><i className="fas fa-angle-right"></i></span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4 p-2">
                    <div className="card shadow-sm" id="score-card">
                        <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center" id="standing-header">
                            <img src={logo} alt="logo" height="50" width="50" id="scorelogo"/>
                            <span className="flex-grow-1 small"><span className="text-secondary">BRIDGE</span> <span className="text-warning">BASKETBALL</span></span>
                            Final
                        </div>
                        <ul className="list-group flush">
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6>Angry Birdz <span className="text-muted small">(2-3)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        <h5>41 <i class="fas fa-caret-left"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6 className="text-muted">BH <span className="text-muted small">(1-4)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        <h5 className="text-muted">39 <i class="fas fa-caret-left text-white"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                    <div className="flex-fill border-right"><Watch13 /></div>
                                        <div className="flex-fill border-right"><Game13 /></div>
                                        <div className="flex-fill"><Boxscore13 /></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 p-2">
                    <div className="card shadow-sm" id="score-card">
                        <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center" id="standing-header">
                            <img src={logo} alt="logo" height="50" width="50" id="scorelogo"/>
                            <span className="flex-grow-1 small"><span className="text-secondary">BRIDGE</span> <span className="text-warning">BASKETBALL</span></span>
                            Final
                        </div>
                        <ul className="list-group flush">
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6>Fantastic <span className="text-muted small">(2-3)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        <h5>58 <i class="fas fa-caret-left"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6 className="text-muted">The Chosen <span className="text-muted small">(2-3)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right align-bottom">
                                        <h5 className="text-muted">52 <i class="fas fa-caret-left text-white"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <button className="btn btn-sm flex-fill rounded-0 border-right disabled">WATCH</button>
                                        <div className="flex-fill border-right"><Game14 /></div>
                                        <div className="flex-fill"><Boxscore14 /></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 p-2">
                    <div className="card shadow-sm" id="score-card">
                        <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center" id="standing-header">
                            <img src={logo} alt="logo" height="50" width="50" id="scorelogo"/>
                            <span className="flex-grow-1 small"><span className="text-secondary">BRIDGE</span> <span className="text-warning">BASKETBALL</span></span>
                            Final
                        </div>
                        <ul className="list-group flush">
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6>Double Up <span className="text-muted small">(5-0)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right align-bottom">
                                        <h5>52 <i class="fas fa-caret-left"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6 className="text-muted">Lord of the Rims <span className="text-muted small">(3-2)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right align-bottom">
                                        <h5 className="text-muted">51 <i class="fas fa-caret-left text-white"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <div className="flex-fill border-right"><Watch15 /></div>
                                        <div className="flex-fill border-right"><Game15 /></div>
                                        <div className="flex-fill"><Boxscore15 /></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>

    );
}

export default Week5;