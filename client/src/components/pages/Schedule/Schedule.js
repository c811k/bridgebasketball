import React from "react";
import { Link, Route } from "react-router-dom";
import Footer from "../../Footer";
import May from "./May";

function Schedule(props) {
    return(
        <div>
        <div className="container" id="schedule">
            <div className="row mt-5">
                <div className="col-md-6">
                    <h3 className="pb-3 border-bottom border-warning">S C H E D U L E</h3> 
                </div>
                <div className="col-md-6 text-right">
                    <h3 className="pb-3 border-bottom text-secondary">S E A S O N<span className="text-warning"> 2 0 1 9 </span></h3>
                </div>
            </div>
            <Route exact path={`${props.match.url}/may`} component={May} />

            <div className="row mt-5">
                <div className="col-md-12">
                <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <Link to={`${props.match.url}/may`} class="page-item disabled">
                                <a class="page-link text-dark border-0" aria-label="Previous" id="left">
                                <span aria-hidden="true"><i class="fas fa-angle-left"></i></span>
                                </a>
                            </Link>
                            <li class="page-item disabled">
                                <a class="page-link text-dark border-0" href="/schedule">APRIL 2019</a>
                            </li>
                            <Link to={`${props.match.url}/may`} class="page-item">
                                <a class="page-link text-dark border-0" aria-label="Next" id="right">
                                <span aria-hidden="true"><i class="fas fa-angle-right"></i></span>
                            </a>
                            </Link>
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
                                    APRIL 28, 2019
                                </div>
                                <div className="col-md-4 text-right">
                                    TIME (PT)
                                </div>
                            </div>
                        </div>
                        <ul className="list-group list-group flush">
                            <li className="list-group-item border-0 rounded-0">
                            <div className="row">
                                <div className="col-md-6">
                                    Double Up v Fantastic
                                </div>
                                <div className="col-md-6 text-right">
                                    4:30PM
                                </div>
                            </div>
                            </li>
                            <li className="list-group-item border-0 bg-light">
                            <div className="row">
                                <div className="col-md-6">
                                    Angry Birdz v The Chosen
                                </div>
                                <div className="col-md-6 text-right">
                                    5:30PM
                                </div>
                            </div>
                            </li>
                            <li className="list-group-item border-0">
                            <div className="row">
                                <div className="col-md-6">
                                    Lord of the Rims v BH
                                </div>
                                <div className="col-md-6 text-right">
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

export default Schedule;