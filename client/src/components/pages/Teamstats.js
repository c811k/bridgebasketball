import React from "react";
import Footer from "../Footer";
import "./style.css";

function Teamstats() {
    return(
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h3 className="pb-3 border-bottom border-warning">T E A M <span className="text-warning">S T A T S</span></h3> 
                    </div>
                    <div className="col-md-6 text-right">
                        <h3 className="pb-3 border-bottom">S E A S O N<span className="text-warning"> 2 0 1 9 </span></h3>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 text-center">
                        <h4>WEEK 1 <span className="text-secondary">GAME 1</span></h4>
                        <h6>April 28, 2019</h6>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                FIELD GOAL %
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    Double Up
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: `38.0%` }}></div>
                                    </div>
                                    38.0%
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center">
                                    Fantastic
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `23.5%`}}></div>
                                    </div>
                                    23.5%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                3 POINT %
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    Double Up
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: `43.2%` }}></div>
                                    </div>
                                    43.2%
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center">
                                    Fantastic
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `6.3%`}}></div>
                                    </div>
                                    6.3%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                FREE THROW %
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    Double Up
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: `50%` }}></div>
                                    </div>
                                    50%
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center">
                                    Fantastic
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `57.1%`}}></div>
                                    </div>
                                    57.1%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                3 POINTS
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    Double Up
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: `16%` }}></div>
                                    </div>
                                    16
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center">
                                    Fantastic
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `1%`}}></div>
                                    </div>
                                    1
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                REBOUNDS
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    Double Up
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: `33%` }}></div>
                                    </div>
                                    33
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center">
                                    Fantastic
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `35%`}}></div>
                                    </div>
                                    35
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                ASSISTS
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    Double Up
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: `15%` }}></div>
                                    </div>
                                    15
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center">
                                    Fantastic
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `3%`}}></div>
                                    </div>
                                    3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                STEALS
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    Double Up
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: `8%` }}></div>
                                    </div>
                                    8
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center">
                                    Fantastic
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `4%`}}></div>
                                    </div>
                                    4
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                BLOCKS
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    Double Up
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: `0%` }}></div>
                                    </div>
                                    0
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center">
                                    Fantastic
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `2%`}}></div>
                                    </div>
                                    2
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                               FOULS
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    Double Up
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: `9%` }}></div>
                                    </div>
                                    9
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center">
                                    Fantastic
                                    <div className="progress flex-fill mx-3">
                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `8%`}}></div>
                                    </div>
                                    8
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Teamstats;