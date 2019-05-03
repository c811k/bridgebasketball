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
                            <div className="col-md-6">
                                <img className="img-fluid rounded mt-3 border" src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-1/c379.0.1290.1290a/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_ht=scontent-lax3-2.xx&oh=e714aa39b48075c1da914b017e3bfc3d&oe=5D385C49" alt="profile" height="300" width="200" id="playerpic" />
                            </div>
                            <div className="col-md-6 mt-3 text-right">
                                P O I N T S
                            </div>    
                        </div>
        
                        <div className="row mt-3">
                            <div className="col-md-12">
                            <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                1. Benjamin Lee
                                            </div>
                                            <div className="col-md-6 text-right">
                                                29.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                2. Daniel Park 
                                            </div>
                                            <div className="col-md-6 text-right">
                                                22.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                               3. Caleb Kang 
                                            </div>
                                            <div className="col-md-6 text-right">
                                                21.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                4. Andrew Kim 
                                            </div>
                                            <div className="col-md-6 text-right">
                                                18.0 
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                5. Kevin Shim
                                            </div>
                                            <div className="col-md-6 text-right">
                                                14.0
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>    
                    </div>
                    
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                <img className="img-fluid rounded mt-3 border" src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-1/c379.0.1290.1290a/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_ht=scontent-lax3-2.xx&oh=e714aa39b48075c1da914b017e3bfc3d&oe=5D385C49" alt="profile" height="300" width="200" id="playerpic" />
                            </div>
                            <div className="col-md-6 mt-3 text-right">
                                R E B O U N D S
                            </div>    
                        </div>
        
                        <div className="row mt-3">
                            <div className="col-md-12">
                            <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                1. Benjamin Lee
                                            </div>
                                            <div className="col-md-6 text-right">
                                                14.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                2. David Cho
                                            </div>
                                            <div className="col-md-6 text-right">
                                                12.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                3. Kevin Shim
                                            </div>
                                            <div className="col-md-6 text-right">
                                                10.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                4. Isak Shin  
                                            </div>
                                            <div className="col-md-6 text-right">
                                                10.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                5. Moses Kim 
                                            </div>
                                            <div className="col-md-6 text-right">
                                                10.0
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>    
                    </div>

                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                <img className="rounded mt-3 border" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/51092613_10211237318209206_2639680315936735232_o.jpg?_nc_cat=106&_nc_ht=scontent-lax3-1.xx&oh=6ada2091019d715b20d0c0e2c5ff81c7&oe=5D748CDF" alt="profile" id="playerpic" height="160" width="160" />
                            </div>
                            <div className="col-md-6 mt-3 text-right">
                               A S S I S T S
                            </div>    
                        </div>
        
                        <div className="row mt-3">
                            <div className="col-md-12">
                            <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                1. Isak Shin
                                            </div>
                                            <div className="col-md-6 text-right">
                                                8.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                2. Benjamin Lee
                                            </div>
                                            <div className="col-md-6 text-right">
                                                6.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                3. David Lee
                                            </div>
                                            <div className="col-md-6 text-right">
                                                6.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                4. Brandon Oh
                                            </div>
                                            <div className="col-md-6 text-right">
                                                3.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                5. Bryan Park
                                            </div>
                                            <div className="col-md-6 text-right">
                                                2.0
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
                            <div className="col-md-6">
                                <img className="rounded mt-3 border" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/51092613_10211237318209206_2639680315936735232_o.jpg?_nc_cat=106&_nc_ht=scontent-lax3-1.xx&oh=6ada2091019d715b20d0c0e2c5ff81c7&oe=5D748CDF" alt="profile" height="160" width="160" id="playerpic" />
                            </div>
                            <div className="col-md-6 mt-3 text-right">
                                F I E L D <span className="text-warning">G O A L</span> %
                            </div>    
                        </div>
        
                        <div className="row mt-3">
                            <div className="col-md-12">
                            <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                1. Isak Shin
                                            </div>
                                            <div className="col-md-6 text-right">
                                                .750
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                2. Caleb Kang
                                            </div>
                                            <div className="col-md-6 text-right">
                                                .727
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                3. Daniel Park
                                            </div>
                                            <div className="col-md-6 text-right">
                                                .700
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                4. Benjamin Lee
                                            </div>
                                            <div className="col-md-6 text-right">
                                                .500
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                5. David Cho
                                            </div>
                                            <div className="col-md-6 text-right">
                                                .500
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>    
                    </div>
                    
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                <img className="img-fluid rounded mt-3 border" src="https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/13719620_10210353529858134_8983312615173657508_o.jpg?_nc_cat=103&_nc_ht=scontent-lax3-1.xx&oh=2473ad1309a337956549beb12a9b0a3b&oe=5D30B86A" alt="profile" height="300" width="200" id="playerpic" />
                            </div>
                            <div className="col-md-6 mt-3 text-right">
                                S T E A L S
                            </div>    
                        </div>
        
                        <div className="row mt-3">
                            <div className="col-md-12">
                            <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                1. Yunjae Chung
                                            </div>
                                            <div className="col-md-6 text-right">
                                                6.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                2. David Lee
                                            </div>
                                            <div className="col-md-6 text-right">
                                                3.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                3. Denny Lee
                                            </div>
                                            <div className="col-md-6 text-right">
                                                3.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                4. Jain Choe
                                            </div>
                                            <div className="col-md-6 text-right">
                                                3.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                5. Bumsu Kim
                                            </div>
                                            <div className="col-md-6 text-right">
                                                2.0
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>    
                    </div>

                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                <img className="img-fluid rounded mt-3 border" src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-1/c379.0.1290.1290a/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_ht=scontent-lax3-2.xx&oh=e714aa39b48075c1da914b017e3bfc3d&oe=5D385C49" alt="profile" height="300" width="200" id="playerpic" />
                            </div>
                            <div className="col-md-6 mt-3 text-right">
                               B L O C K S
                            </div>    
                        </div>
        
                        <div className="row mt-3">
                            <div className="col-md-12">
                            <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                1. Benjamin Lee
                                            </div>
                                            <div className="col-md-6 text-right">
                                                1.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                2. Isaac Baek
                                            </div>
                                            <div className="col-md-6 text-right">
                                                1.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-8">
                                                3. James Choi, #20
                                            </div>
                                            <div className="col-md-4 text-right">
                                                1.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-6">
                                                4. John Hong
                                            </div>
                                            <div className="col-md-6 text-right">
                                                1.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                5. Jun Kim
                                            </div>
                                            <div className="col-md-6 text-right">
                                                1.0
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