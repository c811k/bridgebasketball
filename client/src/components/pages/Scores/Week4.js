import React from "react";
import Footer from "../../Footer";
import logo from "../../../assets/images/logo.jpg";
import Game10 from "../../Teamstats/Game10";
import Game11 from "../../Teamstats/Game11";
import Game12 from "../../Teamstats/Game12";
import Boxscore10 from "../../Boxscores/Game10";
import Boxscore11 from "../../Boxscores/Game11";
import Boxscore12 from "../../Boxscores/Game12";
import Watch10 from "../../Watch/Game10";
import Watch11 from "../../Watch/Game11";
import Watch12 from "../../Watch/Game12";

function Week4() {
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
                                <a className="page-link text-dark border-0" href="/scores/week3" aria-label="Previous" id="left">
                                <span aria-hidden="true"><i className="fas fa-angle-left"></i></span>
                                </a>
                            </li>
                            <li className="page-item disabled text-center">
                                <div className="page-link text-dark border-0"><h5><i className="fas fa-calendar-week fa-2x"></i></h5><p className="small">WEEK 4 - JUNE 2, 2019</p></div>
                            </li>
                            <li className="page-item mt-3">
                                <a className="page-link text-dark border-0" href="/scores/week5" aria-label="Next" id="right">
                                <span aria-hidden="true"><i className="fas fa-angle-right"></i></span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-4 p-2">
                    <div className="card shadow-sm" id="score-card">
                        {/* <div className="row">
                        <div className="col-md-12"> */}
                        <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center" id="standing-header">
                            <img src={logo} alt="logo" height="50" width="50" id="scorelogo"/>
                            <span className="flex-grow-1">
                                <span className="text-secondary">BRIDGE</span> 
                                <span className="text-warning">BASKETBALL</span>
                            </span>
                            <span>Final</span>
                        </div>
                        <ul className="list-group flush">
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6 className="text-muted">The Chosen <span className="text-muted small">(2-2)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        <h5 className="text-muted">47 <i class="fas fa-caret-left text-white"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6>Double Up <span className="text-muted small">(4-0)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        <h5>58 <i class="fas fa-caret-left"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <div className="flex-fill border-right"><Watch10 /></div>
                                        <div className="flex-fill border-right"><Game10 /></div>
                                        <div className="flex-fill"><Boxscore10 /></div>
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
                                        <h6>BH <span className="text-muted small">(1-3)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        <h5>55 <i class="fas fa-caret-left"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6 className="text-muted">Fantastic <span className="text-muted small">(1-3)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        <h5 className="text-muted">53 <i class="fas fa-caret-left text-white"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <div className="flex-fill border-right"><Watch11 /></div>
                                        <div className="flex-fill border-right"><Game11 /></div>                                       <div className="flex-fill"><Boxscore11 /></div>
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
                                        <h6>Angry Birdz <span className="text-muted small">(1-3)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        <h5>59 <i class="fas fa-caret-left"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6 className="text-muted">Lord of the Rims <span className="text-muted small">(3-1)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        <h5 className="text-muted">52 <i class="fas fa-caret-left text-white"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <div className="flex-fill border-right"><Watch12 /></div>
                                        <div className="flex-fill border-right"><Game12 /></div>
                                        <div className="flex-fill"><Boxscore12 /></div>
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

export default Week4;