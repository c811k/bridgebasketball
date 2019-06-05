import React from "react";
import Footer from "../../Footer";
import logo from "../../../assets/images/logo.jpg";

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
                                <a className="page-link text-dark border-0" href="/scores/week5" aria-label="Previous" id="left">
                                <span aria-hidden="true"><i className="fas fa-angle-left"></i></span>
                                </a>
                            </li>
                            <li className="page-item disabled text-center">
                                <div className="page-link text-dark border-0"><h5><i className="fas fa-calendar-week fa-2x"></i></h5><p className="small">WEEK 6 - JUNE 23, 2019</p></div>
                            </li>
                            <li className="page-item mt-3">
                                <a className="page-link text-dark border-0" href="/scores/week7" aria-label="Next" id="right">
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
                            4:30PM PT
                        </div>
                        <ul className="list-group flush">
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6>Angry Birdz <span className="text-muted small">(1-3)</span></h6>
                                    </div>
                                    {/* <div className="col-md-3 text-right align-bottom">
                                        <h5>35 <i class="fas fa-caret-left"></i></h5>
                                    </div> */}
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6>Double Up <span className="text-muted small">(4-0)</span></h6>
                                    </div>
                                    {/* <div className="col-md-3 text-right align-bottom">
                                        <h5 className="text-muted">29 <i class="fas fa-caret-left text-white"></i></h5>
                                    </div> */}
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <button className="btn btn-sm flex-fill rounded-0 border-right disabled">WATCH</button>
                                        <button className="btn btn-sm flex-fill rounded-0 border-right disabled">TEAM STATS</button>
                                        <button className="btn btn-sm flex-fill rounded-0 disabled">BOX SCORE</button>
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
                            5:30PM PT
                        </div>
                        <ul className="list-group flush">
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6>The Chosen <span className="text-muted small">(2-2)</span></h6>
                                    </div>
                                    {/* <div className="col-md-3 text-right align-bottom">
                                        <h5 className="text-muted">53 <i class="fas fa-caret-left text-white"></i></h5>
                                    </div> */}
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6>BH <span className="text-muted small">(1-3)</span></h6>
                                    </div>
                                    {/* <div className="col-md-3 text-right align-bottom">
                                        <h5>56 <i class="fas fa-caret-left"></i></h5>
                                    </div> */}
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <button className="btn btn-sm flex-fill rounded-0 border-right disabled">WATCH</button>
                                        <button className="btn btn-sm flex-fill rounded-0 border-right disabled">TEAM STATS</button>
                                        <button className="btn btn-sm flex-fill rounded-0 disabled">BOX SCORE</button>
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
                            6:30PM PT
                        </div>
                        <ul className="list-group flush">
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6>Lord of the Rims <span className="text-muted small">(3-1)</span></h6>
                                    </div>
                                    {/* <div className="col-md-3 text-right align-bottom">
                                        <h5>43 <i class="fas fa-caret-left"></i></h5>
                                    </div> */}
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h6>Fantastic <span className="text-muted small">(1-3)</span></h6>
                                    </div>
                                    {/* <div className="col-md-3 text-right align-bottom">
                                        <h5 className="text-muted">41 <i class="fas fa-caret-left text-white"></i></h5>
                                    </div> */}
                                </div>
                            </li>
                            <li className="list-group-item border-0">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <button className="btn btn-sm flex-fill rounded-0 border-right disabled">WATCH</button>
                                        <button className="btn btn-sm flex-fill rounded-0 border-right disabled">TEAM STATS</button>
                                        <button className="btn btn-sm flex-fill rounded-0 disabled">BOX SCORE</button>
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