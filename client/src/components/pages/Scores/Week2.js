import React from "react";
import Footer from "../../Footer";
import Game4 from "../../Teamstats/Game4";
import Game5 from "../../Teamstats/Game5";
import Game6 from "../../Teamstats/Game6";
import Watch1 from "../../Watch/Game1";
import Watch2 from "../../Watch/Game2";
import Watch3 from "../../Watch/Game3";
import logo from "../../../assets/images/logo.jpg";

function Scores1() {
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
                        <ul class="pagination justify-content-center">
                            <li class="page-item mt-3">
                                <a class="page-link text-dark border-0" href="/scores/week1" aria-label="Previous" id="left">
                                <span aria-hidden="true"><i class="fas fa-angle-left"></i></span>
                                </a>
                            </li>
                            <li class="page-item disabled text-center">
                                <a class="page-link text-dark border-0"><h5>WEEK 2</h5><p class="small">MAY 5, 2019</p></a>
                            </li>
                            <li class="page-item mt-3">
                                <a class="page-link text-dark border-0" href="/scores/week3" aria-label="Next" id="right">
                                <span aria-hidden="true"><i class="fas fa-angle-right"></i></span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
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
                                        <h5>Fantastic <span className="text-muted small">(1-1)</span></h5>
                                    </div>
                                    <div className="col-md-3 text-right align-bottom">
                                        <h5>35 <i class="fas fa-caret-left"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h5 className="text-muted">Angry Birdz <span className="text-muted small">(0-2)</span></h5>
                                    </div>
                                    <div className="col-md-3 text-right align-bottom">
                                        <h5 className="text-muted">29 <i class="fas fa-caret-left text-white"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <a id="btn" className="btn btn-sm shadow-sm disabled">WATCH</a>
                                        {/* <a id="btn" className="btn btn-sm shadow-sm disabled">TEAM STATS</a> */}
                                        <Game4 />
                                        <button id="btn" className="btn btn-sm shadow-sm disabled">BOX SCORE</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
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
                                        <h5 className="text-muted">The Chosen <span className="text-muted small">(1-1)</span></h5>
                                    </div>
                                    <div className="col-md-3 text-right align-bottom">
                                        <h5 className="text-muted">53 <i class="fas fa-caret-left text-white"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h5>Lord of the Rims <span className="text-muted small">(2-0)</span></h5>
                                    </div>
                                    <div className="col-md-3 text-right align-bottom">
                                        <h5>56 <i class="fas fa-caret-left"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <button id="btn" className="btn btn-sm shadow-sm disabled">WATCH</button>
                                        {/* <a id="btn" className="btn btn-sm shadow-sm disabled">TEAM STATS</a> */}
                                        <Game5 />
                                        <button id="btn" className="btn btn-sm shadow-sm disabled">BOX SCORE</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
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
                                        <h5>Double Up <span className="text-muted small">(2-0)</span></h5>
                                    </div>
                                    <div className="col-md-3 text-right align-bottom">
                                        <h5>43 <i class="fas fa-caret-left"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h5 className="text-muted">BH <span className="text-muted small">(0-2)</span></h5>
                                    </div>
                                    <div className="col-md-3 text-right align-bottom">
                                        <h5 className="text-muted">41 <i class="fas fa-caret-left text-white"></i></h5>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <button id="btn" className="btn btn-sm shadow-sm disabled">WATCH</button>
                                        {/* <a id="btn" className="btn btn-sm shadow-sm disabled" href="/teamstats">TEAM STATS</a> */}
                                        <Game6 />
                                        <button id="btn" className="btn btn-sm shadow-sm disabled">BOX SCORE</button>
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

export default Scores1;