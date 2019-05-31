import React from "react";
import Footer from "../../Footer";

function April() {
    return(
        <div>
        <div className="container" id="schedule">
            <div className="row mt-5">
                <div className="col-sm-6">
                    <h3 className="pb-3 border-bottom border-warning">S C H E D U L E</h3> 
                </div>
                <div className="col-sm-6 text-right">
                    <h3 className="pb-3 border-bottom text-secondary">S E A S O N<span className="text-warning"> 2 0 1 9 </span></h3>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <button className="page-link text-white border-0" aria-label="Previous" id="left">
                                <span aria-hidden="true"><i className="fas fa-angle-left"></i></span>
                                </button>
                            </li>
                            <li className="page-item disabled text-center">
                                <a className="page-link text-dark border-0" href="/schedule"><h5><i className="far fa-calendar-alt fa-2x"></i></h5><span className="small">APRIL</span></a>
                            </li>
                            <li className="page-item mt-3">
                                <a className="page-link text-dark border-0" href="/schedule/may" aria-label="Next" id="right">
                                <span aria-hidden="true"><i className="fas fa-angle-right"></i></span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-12">
                    <div className="card shadow-sm">
                        <div className="card-header border-0 font-weight-bold" id="back">
                            <div className="row">
                                <div className="col-sm-4">
                                    MATCH UP
                                </div>
                                <div className="col-sm-4 text-center">
                                    APRIL 28TH
                                </div>
                                <div className="col-sm-4 text-right">
                                    TIME (PT)
                                </div>
                            </div>
                        </div>
                        <ul className="list-group list-group flush">
                            <li className="list-group-item border-0 rounded-0">
                            <div className="row">
                                <div className="col-sm-8">
                                    Double Up v Fantastic
                                </div>
                                <div className="col-sm-4 text-right">
                                    4:30PM
                                </div>
                            </div>
                            </li>
                            <li className="list-group-item border-0 bg-light">
                            <div className="row">
                                <div className="col-sm-8">
                                    Angry Birdz v The Chosen
                                </div>
                                <div className="col-sm-4 text-right">
                                    5:30PM
                                </div>
                            </div>
                            </li>
                            <li className="list-group-item border-0">
                            <div className="row">
                                <div className="col-sm-8">
                                    Lord of the Rims v BH
                                </div>
                                <div className="col-sm-4 text-right">
                                    6:30PM
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

export default April;