import React from "react";
import Footer from "../Footer";

function Schedule() {
    return(
        <div>
        <div className="container" id="schedule">
            <div className="row mt-5">
                <div className="col-md-6">
                    <h3 className="pb-3 border-bottom border-warning">S C H E D U L E</h3> 
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
                                <a class="page-link text-dark border-0" href="/schedule">APRIL 2019</a>
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
                <div className="col-md-12">
                    <div className="card shadow-sm">
                        <div className="card-header border-0 font-weight-bold" id="back">
                            <div className="row">
                                <div className="col-md-4">
                                    MATCH UP
                                </div>
                                <div className="col-md-4 text-center">
                                    APRIL 7, 2019
                                </div>
                                <div className="col-md-4 text-right">
                                    TIME (PT)
                                </div>
                            </div>
                        </div>
                        <ul className="list-group list-group flush">
                            <li className="list-group-item border-0 rounded-0 bg-light">
                            <div className="row">
                                <div className="col-md-6">
                                    TEAM 1 v TEAM 2
                                </div>
                                <div className="col-md-6 text-right">
                                    4:30PM
                                </div>
                            </div>
                            </li>
                            <li className="list-group-item border-0">
                            <div className="row">
                                <div className="col-md-6">
                                    TEAM 3 v TEAM 4
                                </div>
                                <div className="col-md-6 text-right">
                                    5:30PM
                                </div>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="card shadow-sm">
                        <div className="card-header border-0 font-weight-bold" id="back">
                            <div className="row">
                                <div className="col-md-4">
                                    MATCH UP
                                </div>
                                <div className="col-md-4 text-center">
                                    APRIL 14, 2019
                                </div>
                                <div className="col-md-4 text-right">
                                    TIME (PT)
                                </div>
                            </div>
                        </div>
                        <ul className="list-group list-group flush">
                            <li className="list-group-item border-0 rounded-0 bg-light">
                            <div className="row">
                                <div className="col-md-6">
                                    TEAM 1 v TEAM 4
                                </div>
                                <div className="col-md-6 text-right">
                                    4:30PM
                                </div>
                            </div>
                            </li>
                            <li className="list-group-item border-0">
                            <div className="row">
                                <div className="col-md-6">
                                    TEAM 2 v TEAM 3
                                </div>
                                <div className="col-md-6 text-right">
                                    5:30PM
                                </div>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="card shadow-sm">
                        <div className="card-header font-weight-bold" id="back">
                            <div className="row">
                                <div className="col-md-4">
                                    MATCH UP
                                </div>
                                <div className="col-md-4 text-center">
                                    APRIL 28, 2019
                                </div>
                                <div className="col-md-4 text-right">
                                    TIME (PT)
                                </div>
                            </div>
                        </div>
                        <ul className="list-group list-group flush">
                            <li className="list-group-item border-0 bg-light rounded-0">
                            <div className="row">
                                <div className="col-md-6">
                                    TEAM 2 v TEAM 4
                                </div>
                                <div className="col-md-6 text-right">
                                    4:30PM
                                </div>
                            </div>
                            </li>
                            <li className="list-group-item border-0">
                            <div className="row">
                                <div className="col-md-6">
                                    TEAM 1 v TEAM 3
                                </div>
                                <div className="col-md-6 text-right">
                                    5:30PM
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

export default Schedule;