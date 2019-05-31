import React from "react";
import Footer from "../../Footer";
import Game1 from "../../Teamstats/Game1";
import Game2 from "../../Teamstats/Game2";
import Game3 from "../../Teamstats/Game3";
import Watch1 from "../../Watch/Game1";
import Watch2 from "../../Watch/Game2";
import Watch3 from "../../Watch/Game3";
import Boxscore1 from "../../Boxscores/Game1";
import Boxscore2 from "../../Boxscores/Game2";
import Boxscore3 from "../../Boxscores/Game3";
import logo from "../../../assets/images/logo.jpg";

function Week1() {
    return(
        <div>
        <div className="container" id="scores">
            <div className="row mt-5">
                <div className="col-sm-6">
                    <h3 className="pb-3 border-bottom border-warning">S C O R E S</h3> 
                </div>
                <div className="col-sm-6 text-right">
                    <h3 className="pb-3 border-bottom text-secondary">S E A S O N<span className="text-warning"> 2 0 1 9 </span></h3>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item mt-3 disabled">
                                <div className="page-link text-white border-0" aria-label="Previous" id="left">
                                <span aria-hidden="true"><i className="fas fa-angle-left"></i></span>
                                </div>
                            </li>
                            <li className="page-item disabled text-center">
                                <div className="page-link text-dark border-0"><h5><i className="fas fa-calendar-week fa-2x"></i></h5><p className="small">WEEK 1 - APRIL 28, 2019</p></div>
                            </li>
                            <li className="page-item mt-3">
                                <a className="page-link text-dark border-0" href="/scores/week2" aria-label="Next" id="right">
                                <span aria-hidden="true"><i className="fas fa-angle-right"></i></span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-4 p-2">
                    <div className="card shadow-sm" id="score-card">
                        <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center" id="standing-header">
                            <img src={logo} alt="logo" height="50" width="50" id="scorelogo"/>
                            <span className="flex-grow-1 small"><span className="text-secondary">BRIDGE</span> <span className="text-warning">BASKETBALL</span></span>
                            Final
                        </div>
                        <ul className="list-group flush">
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <h6>Double Up <span className="text-muted small">(1-0)</span></h6>
                                    </div>
                                    <div className="col-sm-3 text-right">
                                        <h5>57 <i className="fas fa-caret-left"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <h6 className="text-muted">Fantastic <span className="text-muted small">(0-1)</span></h6>
                                    </div>
                                    <div className="col-sm-3 text-right">
                                        <h5 className="text-muted">29 <i className="fas fa-caret-left text-white"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-sm-12 d-flex justify-content-between">
                                        <div className="flex-fill border-right"><Watch1 /></div>
                                        <div className="flex-fill border-right"><Game1 /></div>
                                        <div className="flex-fill"><Boxscore1 /></div>
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
                                        <h6 className="text-muted">Angry Birdz <span className="text-muted small">(0-1)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        <h5 className="text-muted">36 <i className="fas fa-caret-left text-white"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6>The Chosen <span className="text-muted small">(1-0)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        <h5>39 <i className="fas fa-caret-left"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <div className="flex-fill border-right"><Watch2 /></div>
                                        <div className="flex-fill border-right"><Game2 /></div>
                                        <div className="flex-fill"><Boxscore2 /></div>
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
                                        <h6>Lord of the Rims <span className="text-muted small">(1-0)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        <h5>53 <i className="fas fa-caret-left"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6 className="text-muted">BH <span className="text-muted small">(0-1)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        <h5 className="text-muted">42 <i className="fas fa-caret-left text-white"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <div className="flex-fill border-right"><Watch3 /></div>
                                        <div className="flex-fill border-right"><Game3 /></div>
                                        <div className="flex-fill"><Boxscore3 /></div>
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

export default Week1;