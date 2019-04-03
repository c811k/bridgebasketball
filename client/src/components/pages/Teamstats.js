import React from "react";
import Footer from "../Footer";

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
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header ml-auto bg-white border-0 font-weight-bold">
                                FIELD GOAL %
                            </div>
                            <div className="card-body">
                            <label>TEAM 1</label>
                            <div className="progress rounded-pill mt-2">
                                <div className="progress-bar bg-warning " role="progressbar" style={{ width: `43.8%` }}>43.8%</div>
                            </div>
                            <hr className="my-3" />
                            <div className="progress rounded-pill mb-3">
                                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `42.3%`}}>42.3%</div>
                            </div>
                            <label>TEAM 2</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header ml-auto bg-white border-0 font-weight-bold">
                                3 POINT %
                            </div>
                            <div className="card-body">
                            <label>TEAM 1</label>
                            <div className="progress rounded-pill mt-2">
                                <div className="progress-bar bg-warning " role="progressbar" style={{ width: `43.8%` }}>41.8%</div>
                            </div>
                            <hr className="my-3" />
                            <div className="progress rounded-pill mb-3">
                                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `42.3%`}}>34.3%</div>
                            </div>
                            <label>TEAM 2</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header ml-auto bg-white border-0 font-weight-bold">
                                3 POINTS
                            </div>
                            <div className="card-body">
                            <label>TEAM 1</label>
                            <div className="progress rounded-pill mt-2">
                                <div className="progress-bar bg-warning " role="progressbar" style={{ width: `11%` }}>11</div>
                            </div>
                            <hr className="my-3" />
                            <div className="progress rounded-pill mb-3">
                                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `3%`}}>3</div>
                            </div>
                            <label>TEAM 2</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header ml-auto bg-white border-0 font-weight-bold">
                                FREE THROW %
                            </div>
                            <div className="card-body">
                            <label>TEAM 1</label>
                            <div className="progress rounded-pill mt-2">
                                <div className="progress-bar bg-warning " role="progressbar" style={{ width: `56%` }}>56.3%</div>
                            </div>
                            <hr className="my-3" />
                            <div className="progress rounded-pill mb-3">
                                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `83%`}}>83%</div>
                            </div>
                            <label>TEAM 2</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header ml-auto bg-white border-0 font-weight-bold">
                                REBOUNDS
                            </div>
                            <div className="card-body">
                            <label>TEAM 1</label>
                            <div className="progress rounded-pill mt-2">
                                <div className="progress-bar bg-warning " role="progressbar" style={{ width: `45%` }}>45</div>
                            </div>
                            <hr className="my-3" />
                            <div className="progress rounded-pill mb-3">
                                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `54%`}}>54</div>
                            </div>
                            <label>TEAM 2</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header ml-auto bg-white border-0 font-weight-bold">
                                ASSISTS
                            </div>
                            <div className="card-body">
                            <label>TEAM 1</label>
                            <div className="progress rounded-pill mt-2">
                                <div className="progress-bar bg-warning " role="progressbar" style={{ width: `23%` }}>23</div>
                            </div>
                            <hr className="my-3" />
                            <div className="progress rounded-pill mb-3">
                                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `11%`}}>11</div>
                            </div>
                            <label>TEAM 2</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header ml-auto bg-white border-0 font-weight-bold">
                                STEALS
                            </div>
                            <div className="card-body">
                            <label>TEAM 1</label>
                            <div className="progress rounded-pill mt-2">
                                <div className="progress-bar bg-warning " role="progressbar" style={{ width: `3%` }}>3</div>
                            </div>
                            <hr className="my-3" />
                            <div className="progress rounded-pill mb-3">
                                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `11%`}}>11</div>
                            </div>
                            <label>TEAM 2</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header ml-auto bg-white border-0 font-weight-bold">
                                BLOCKS
                            </div>
                            <div className="card-body">
                            <label>TEAM 1</label>
                            <div className="progress rounded-pill mt-2">
                                <div className="progress-bar bg-warning " role="progressbar" style={{ width: `3%` }}>3</div>
                            </div>
                            <hr className="my-3" />
                            <div className="progress rounded-pill mb-3">
                                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `1%`}}>1</div>
                            </div>
                            <label>TEAM 2</label>
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