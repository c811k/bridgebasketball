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
                                <img className="img-fluid rounded mt-3 border" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/48416545_1993639637358593_8942590435369418752_o.jpg?_nc_cat=104&_nc_ht=scontent-lax3-1.xx&oh=974375b447ecdd4467c74c2ba86711c3&oe=5D751106" alt="profile" height="300" width="200" id="playerpic" />
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
                                            <div className="col-md-9">
                                                Steve Joo <span class="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>28.0</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Benjamin Lee <span class="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                27.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                               Daniel Park <span class="small text-muted font-italic font-weight-light">Double Up</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                22.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-8">
                                                Smith Kang <span class="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-4 text-right">
                                                20.5 
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-8">
                                                Caleb Kang <span class="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-4 text-right">
                                                19.0
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
                                <img className="rounded mt-3 border" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/51092613_10211237318209206_2639680315936735232_o.jpg?_nc_cat=106&_nc_ht=scontent-lax3-1.xx&oh=6ada2091019d715b20d0c0e2c5ff81c7&oe=5D748CDF" alt="profile" height="160" width="128" id="playerpic" />
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
                                            <div className="col-md-9">
                                                Isak Shin <span class="small text-muted font-italic font-weight-light">Double Up</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>14.0</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Smith Kang <span class="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                13.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Benjamin Lee <span class="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                11.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Jacob Cho <span class="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                10.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Moses Kim <span class="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
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
                                <img className="rounded mt-3 border" src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-1/c379.0.1290.1290a/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_ht=scontent-lax3-2.xx&oh=e714aa39b48075c1da914b017e3bfc3d&oe=5D385C49" alt="profile" id="playerpic" height="160" width="160" />
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
                                            <div className="col-md-9">
                                                Benjamin Lee <span class="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>5.5</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Isak Shin <span class="small text-muted font-italic font-weight-light">Double Up</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                5.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                David Lee <span class="small text-muted font-italic font-weight-light">Angry Birdz</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                3.5
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                John Hong <span class="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                3.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Andrew Kim <span class="small text-muted font-italic font-weight-light">Angry Birdz</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                2.5
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
                                <img className="img-fluid rounded mt-3 border" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/23172773_10211927155667988_6262282094605372622_n.jpg?_nc_cat=108&_nc_ht=scontent-lax3-1.xx&oh=b1963a9c1d6972f38891b68b2126f171&oe=5D69CEAE" alt="profile" id="playerpic" />
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
                                            <div className="col-md-9">
                                                Daniel Park <span class="small text-muted font-italic font-weight-light">Double Up</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>.700</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Isak Shin <span class="small text-muted font-italic font-weight-light">Double Up</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                .563
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Benjamin Lee <span class="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                .486
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Caleb Kang <span class="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                .464
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Steve Joo <span class="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                .458
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
                                    <li className="list-group-item border-0 bg-light ">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Yunjae Chung <span class="small text-muted font-italic font-weight-light">Angry Birdz</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>4.5</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Jain Choe <span class="small text-muted font-italic font-weight-light">Double Up</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                3.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                David Cho <span class="small text-muted font-italic font-weight-light">Angry Birdz</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                2.5
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Denny Lee <span class="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                2.5
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Joseph Jung <span class="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                2.5
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
                                <img className="img-fluid rounded mt-3 border" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/11025663_10204159636207633_5032983061615525533_n.jpg?_nc_cat=102&_nc_ht=scontent-lax3-1.xx&oh=80e6423a3da13517539c2f871fc1f31a&oe=5D7269D9" alt="profile" height="300" width="200" id="playerpic" />
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
                                            <div className="col-md-9">
                                                Kevin Shim <span class="small text-muted font-italic font-weight-light">Angry Birdz</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>1.5</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Jun Kim <span class="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                1.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                James Choi, #20 <span class="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                1.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Andrew Kim <span class="small text-muted font-italic font-weight-light">Angry Birdz</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                0.5
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Benjamin Lee <span class="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                0.5
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