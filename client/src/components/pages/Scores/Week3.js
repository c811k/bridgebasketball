import React from "react";
import Footer from "../../Footer";
import Game7 from "../../Teamstats/Game7";
import Game8 from "../../Teamstats/Game8";
import Game9 from "../../Teamstats/Game9";
import Boxscore7 from "../../Boxscores/Game7";
import Boxscore8 from "../../Boxscores/Game8";
import Boxscore9 from "../../Boxscores/Game9";
import Watch7 from "../../Watch/Game7";
import Watch8 from "../../Watch/Game8";
import Watch9 from "../../Watch/Game9";
import logo from "../../../assets/images/logo.jpg";

function Week3() {
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
                                <a className="page-link text-dark border-0" href="/scores/week2" aria-label="Previous" id="left">
                                <span aria-hidden="true"><i className="fas fa-angle-left"></i></span>
                                </a>
                            </li>
                            <li className="page-item disabled text-center">
                                <div className="page-link text-dark border-0"><h5><i className="fas fa-calendar-week fa-2x"></i></h5><p className="small">WEEK 3 - MAY 26, 2019</p></div>
                            </li>
                            <li className="page-item mt-3">
                                <a className="page-link text-dark border-0" href="/scores/week4" aria-label="Next" id="right">
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
                                        <h6 className="text-muted">Angry Birdz <span className="text-muted small">(0-3)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right align-bottom">
                                        <h5 className="text-muted">38 <i class="fas fa-caret-left text-white"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6>Double Up <span className="text-muted small">(3-0)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right align-bottom">
                                        <h5>72 <i class="fas fa-caret-left"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <div className="flex-fill border-right"><Watch7 /></div>
                                        <div className="flex-fill border-right"><Game7 /></div>
                                        <div className="flex-fill"><Boxscore7 /></div>
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
                                        <h6>Lord of the Rims <span className="text-muted small">(3-0)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right align-bottom">
                                        <h5>56 <i class="fas fa-caret-left"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6 className="text-muted">Fantastic <span className="text-muted small">(1-2)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right align-bottom">
                                        <h5 className="text-muted">45 <i class="fas fa-caret-left text-white"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <div className="flex-fill border-right"><Watch8 /></div>
                                        <div className="flex-fill border-right"><Game8 /></div>
                                        <div className="flex-fill"><Boxscore8 /></div>
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
                                        <h6 className="text-muted">BH <span className="text-muted small">(0-3)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right align-bottom">
                                        <h5 className="text-muted">44 <i class="fas fa-caret-left text-white"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6>The Chosen <span className="text-muted small">(2-1)</span></h6>
                                    </div>
                                    <div className="col-md-3 text-right align-bottom">
                                        <h5>48 <i class="fas fa-caret-left"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <div className="flex-fill border-right"><Watch9 /></div>
                                        <div className="flex-fill border-right"><Game9 /></div>
                                        <div className="flex-fill"><Boxscore9 /></div>
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

export default Week3;