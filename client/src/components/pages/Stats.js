import React, { Component } from "react";
import Footer from "../Footer";
import profile from "../../assets/images/profile.JPG"

class Stats extends Component {

    state = {
        userData: []
    }

    render() {
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h3 className="pb-3 border-bottom border-warning">S T A T I S T I C S</h3> 
                    </div>
                    <div className="col-md-6 text-right">
                        <h3 className="pb-3 border-bottom text-secondary">S E A S O N<span className="text-warning"> 2 0 1 9 </span></h3>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-5">
                                <img className="img-fluid rounded mt-3" src={profile} alt="profile" id="playerpic" />
                            </div>
                            <div className="col-md-7 mt-3 text-right">
                                P O I N T S 
                            </div>    
                        </div>
        
                        <div className="row mt-3">
                            <div className="col-md-12">
                            <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Benjamin Lee <br />
                                                <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>22.6</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Kevin Shim <br />
                                                <span className="small text-muted font-italic font-weight-light">Fantastic</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                21.7
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                               James Choi, #25 <br />
                                               <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                19.3
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-8">
                                                Steve Joo <br />
                                                <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-4 text-right">
                                                18.8 
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-8">
                                                Isak Shin <br />
                                                <span className="small text-muted font-italic font-weight-light">Double Up</span>
                                            </div>
                                            <div className="col-md-4 text-right">
                                                17.8
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>    
                    </div>
                    
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-5">
                                <img className="img-fluid rounded mt-3" src={profile} alt="profile" height="150" id="playerpic" />
                            </div>
                            <div className="col-md-7 mt-3 text-right">
                                R E B O U N D S
                            </div>    
                        </div>
        
                        <div className="row mt-3">
                            <div className="col-md-12">
                            <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Moses Kim <br /> 
                                                <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>15.0</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Isak Shin <br />
                                                <span className="small text-muted font-italic font-weight-light">Double Up</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                14.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                John Hong <br />
                                                <span className="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                11.8
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                James Choi, #25 <br />
                                                <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                11.3
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Smith Kang <br />
                                                <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                10.6
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>    
                    </div>

                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-5">
                                <img className="img-fluid rounded mt-3" src={profile} alt="profile" id="playerpic" />
                            </div>
                            <div className="col-md-7 mt-3 text-right">
                               A S S I S T S
                            </div>    
                        </div>
        
                        <div className="row mt-3">
                            <div className="col-md-12">
                            <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Isak Shin <br />
                                                <span className="small text-muted font-italic font-weight-light">Double Up</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>5.4</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                David Lee <br />
                                                <span className="small text-muted font-italic font-weight-light">Angry Birdz</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                5.2
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                John Hong <br />
                                                <span className="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                3.7
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Andrew Kim <br />
                                                <span className="small text-muted font-italic font-weight-light">Angry Birdz</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                3.3
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Benjamin Lee <br />
                                                <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                3.2
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-5">
                                <img className="img-fluid rounded mt-3" src={profile} alt="profile" id="playerpic" />
                            </div>
                            <div className="col-md-7 mt-3 text-right">
                                F I E L D <span className="text-warning">G O A L</span> %
                            </div>    
                        </div>
        
                        <div className="row mt-3">
                            <div className="col-md-12">
                            <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Isak Shin <br />
                                                <span className="small text-muted font-italic font-weight-light">Double Up</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>.576</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Kevin Shim <br />
                                                <span className="small text-muted font-italic font-weight-light">Fantastic</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                .454
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Joseph Jung <br />
                                                <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                .435
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Smith Kang <br />
                                                <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                .431
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                James Choi, #25 <br />
                                                <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                .414
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>    
                    </div>
                    
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-5">
                                <img className="img-fluid rounded mt-3" src={profile} alt="profile" id="playerpic" />
                            </div>
                            <div className="col-md-7 mt-3 text-right">
                                S T E A L S
                            </div>    
                        </div>
        
                        <div className="row mt-3">
                            <div className="col-md-12">
                            <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 bg-light ">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Yunjae Chung <br />
                                                <span className="small text-muted font-italic font-weight-light">Angry Birdz</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>4.0</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Benjamin Lee<br /> 
                                                <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                2.8
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Denny Lee <br /> 
                                                <span className="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                2.7
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Brandon Oh <br />
                                                <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                2.6
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                James Choi, #25 <br />
                                                <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                2.3
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>    
                    </div>

                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-5">
                                <img className="img-fluid rounded mt-3" src={profile} alt="profile" id="playerpic" />
                            </div>
                            <div className="col-md-7 mt-3 text-right">
                               B L O C K S
                            </div>    
                        </div>
        
                        <div className="row mt-3">
                            <div className="col-md-12">
                            <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                James Choi, #25 <br />
                                                <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>0.8</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                John Hong <br />
                                                <span className="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                0.8
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Denny Lee <br />
                                                <span className="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                0.7
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Jun Kim <br />
                                                <span className="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                0.7
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Kevin Shim <br />
                                                <span className="small text-muted font-italic font-weight-light">Fantastic</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                0.7
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
    }
}

export default Stats;