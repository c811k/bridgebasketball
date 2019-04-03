import React, { Component } from "react";
import axios from "axios";
import Footer from "../Footer";
import logo from "../../assets/images/logo.png";

class Stats extends Component {

    state = {
        userData: []
    }

    componentDidMount = () => {
        axios.get("/api/players/points").then((res) => {
            var data = res.data;
            this.setState({
                userData: data
            });

        });
    }

    render() {
    return (
        <div>
            <div className="container" id="stats">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h3 className="pb-3 border-bottom border-warning">S T A T I S T I C S</h3> 
                    </div>
                    <div className="col-md-6 text-right">
                        <h3 className="pb-3 border-bottom">S E A S O N<span className="text-warning"> 2 0 1 9 </span></h3>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-2">
                        <img className="img-fluid rounded mt-3" src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/26951834_1845327715477385_4506628381151147651_o.jpg?_nc_cat=103&_nc_ht=scontent-lax3-2.xx&oh=ee343ada05921d21e33c96078b4342d2&oe=5D15FA1D" alt="profile" height="300" width="200" id="playerpic" />
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0">
                            <div className="card-header text-right border-0 bg-white">
                                P O I N T S
                            </div>    
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                Caleb Kang
                                            </div>
                                            <div className="col-md-6 text-right">
                                                23.1
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                Andrew Kim
                                            </div>
                                            <div className="col-md-6 text-right">
                                                22.8
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                Daniel Park
                                            </div>
                                            <div className="col-md-6 text-right">
                                                22.4
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                John Hong
                                            </div>
                                            <div className="col-md-6 text-right">
                                                21.7
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                Isaac Baek
                                            </div>
                                            <div className="col-md-6 text-right">
                                                20.6
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <img className="img-fluid rounded mt-3" src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/26951834_1845327715477385_4506628381151147651_o.jpg?_nc_cat=103&_nc_ht=scontent-lax3-2.xx&oh=ee343ada05921d21e33c96078b4342d2&oe=5D15FA1D" alt="profile" height="300" width="200" id="playerpic" />
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0">
                            <div className="card-header text-right border-0 bg-white">
                                P O I N T S
                            </div>    
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                Caleb Kang
                                            </div>
                                            <div className="col-md-6 text-right">
                                                23.1
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                Andrew Kim
                                            </div>
                                            <div className="col-md-6 text-right">
                                                22.8
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                Daniel Park
                                            </div>
                                            <div className="col-md-6 text-right">
                                                22.4
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                John Hong
                                            </div>
                                            <div className="col-md-6 text-right">
                                                21.7
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                Isaac Baek
                                            </div>
                                            <div className="col-md-6 text-right">
                                                20.6
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
}

export default Stats;