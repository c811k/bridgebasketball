import React from "react";
import Footer from "../../Footer";

function May() {
    return(
        <div>
            <div className="row mt-5">
                <div className="col-md-12">
                <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="/schedule" aria-label="Previous" id="left">
                                <span aria-hidden="true"><i class="fas fa-angle-left"></i></span>
                                </a>
                            </li>
                            <li class="page-item disabled">
                                <a class="page-link text-dark border-0" href="/schedule">MAY 2019</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="#" aria-label="Next" id="right">
                                <span aria-hidden="true"><i class="fas fa-angle-right"></i></span>
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
                                    Team 1 v Angry Birdz
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
    );
}

export default May;