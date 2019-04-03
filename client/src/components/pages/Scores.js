import React from "react";
import Footer from "../Footer";
import logo from "../../assets/images/logo.png";

function Scores() {
    return(
        <div>
        <div className="container" id="scores">
            <div className="row mt-5">
                <div className="col-md-6">
                    <h3 className="pb-3 border-bottom border-warning">S C O R E S</h3> 
                </div>
                <div className="col-md-6 text-right">
                    <h3 className="pb-3 border-bottom">S E A S O N<span className="text-warning"> 2 0 1 9 </span></h3>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="/schedule">WEEK 1</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center" id="standing-header">
                            <img src={logo} alt="logo" height="37.5" width="112.5" id="scorelogo"/>
                            4:30PM PT
                        </div>
                        <ul className="list-group flush">
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>LAKERS <span className="text-muted small">(1-0)</span></h5>
                                    </div>
                                    <div className="col-md-6 text-right align-bottom">
                                        <h4>98</h4>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>LAKERS <span className="text-muted small">(1-0)</span></h5>
                                    </div>
                                    <div className="col-md-6 text-right align-bottom">
                                        <h4>98</h4>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 text-right">
                                        <a id="btn" className="btn btn-sm mr-3 shadow-sm" href="/teamstats">TEAM STATS</a>
                                        <button id="btn" className="btn btn-sm shadow-sm">BOX SCORE</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center" id="standing-header">
                            <img src={logo} alt="logo" height="37.5" width="112.5" id="scorelogo"/>
                            5:30PM PT
                        </div>
                        <ul className="list-group list-group flush">
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>LAKERS <span className="text-muted small">(1-0)</span></h5>
                                    </div>
                                    <div className="col-md-6 text-right align-bottom">
                                        <h4>98</h4>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>LAKERS <span className="text-muted small">(1-0)</span></h5>
                                    </div>
                                    <div className="col-md-6 text-right align-bottom">
                                        <h4>98</h4>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 text-right">
                                        <a id="btn" className="btn btn-sm mr-3 shadow-sm" href="/teamstats">TEAM STATS</a>
                                        <button id="btn" className="btn btn-sm shadow-sm">BOX SCORE</button>
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

export default Scores;