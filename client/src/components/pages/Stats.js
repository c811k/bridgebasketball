import React, { Component } from "react";
import Footer from "../Footer";

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
                            <div className="col-md-6">
                                <img className="img-fluid rounded mt-3 border" src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-1/c379.0.1290.1290a/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_ht=scontent-lax3-2.xx&oh=e714aa39b48075c1da914b017e3bfc3d&oe=5D385C49" alt="profile" id="playerpic" />
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
                                                Benjamin Lee <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>29.0</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Smith Kang <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                18.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                               Steve Joo <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                17.5
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-8">
                                                Kevin Shim <span className="small text-muted font-italic font-weight-light">Fantastic</span>
                                            </div>
                                            <div className="col-md-4 text-right">
                                                17.0 
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-8">
                                                James Choi <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-4 text-right">
                                                16.0
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
                                <img className="rounded mt-3 border" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/60813095_10211881944924471_3523127841451409408_o.jpg?_nc_cat=111&_nc_ht=scontent-lax3-1.xx&oh=ffc200453e59d86d6378bce9f88c649c&oe=5D9E58CA" alt="profile" height="160" id="playerpic" />
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
                                                Isak Shin <span className="small text-muted font-italic font-weight-light">Double Up</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>15.0</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Moses Kim <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                12.5
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Sung Jung <span className="small text-muted font-italic font-weight-light">Double Up</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                11.7
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Smith Kang <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                11.3
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Benjamin Lee <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                11.0
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
                                <img className="rounded mt-3 border" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/60813095_10211881944924471_3523127841451409408_o.jpg?_nc_cat=111&_nc_ht=scontent-lax3-1.xx&oh=ffc200453e59d86d6378bce9f88c649c&oe=5D9E58CA" alt="profile" id="playerpic" height="160" />
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
                                                Isak Shin <span className="small text-muted font-italic font-weight-light">Double Up</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>6.3</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Benjamin Lee <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                4.3
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Tony Kim <span className="small text-muted font-italic font-weight-light">Fantastic</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                4.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Andrew Kim <span className="small text-muted font-italic font-weight-light">Angry Birdz</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                3.3
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                John Hong <span className="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                3.0
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
                                <img className="rounded mt-3 border" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/60813095_10211881944924471_3523127841451409408_o.jpg?_nc_cat=111&_nc_ht=scontent-lax3-1.xx&oh=ffc200453e59d86d6378bce9f88c649c&oe=5D9E58CA" alt="profile" id="playerpic" height="160" />
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
                                                Isak Shin <span className="small text-muted font-italic font-weight-light">Double Up</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>.615</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Moses Kim <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                .600
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Benjamin Lee <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                .509
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Daniel Park <span className="small text-muted font-italic font-weight-light">Double Up</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                .455
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Caleb Kang <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                .441
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
                                <img className="img-fluid rounded mt-3 border" src="https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/13719620_10210353529858134_8983312615173657508_o.jpg?_nc_cat=103&_nc_ht=scontent-lax3-1.xx&oh=2473ad1309a337956549beb12a9b0a3b&oe=5D30B86A" alt="profile" height="160" id="playerpic" />
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
                                                Yunjae Chung <span className="small text-muted font-italic font-weight-light">Angry Birdz</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>4.5</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                James Choi, #25 <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                3.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Benjamin Lee <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                2.7
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                David Cho <span className="small text-muted font-italic font-weight-light">Angry Birdz</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                2.7
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Denny Lee <span className="small text-muted font-italic font-weight-light">BH</span>
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
                                <img className="img-fluid rounded mt-3 border" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/11025663_10204159636207633_5032983061615525533_n.jpg?_nc_cat=102&_nc_ht=scontent-lax3-1.xx&oh=80e6423a3da13517539c2f871fc1f31a&oe=5D7269D9" alt="profile" height="160" id="playerpic" />
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
                                                Kevin Shim <span className="small text-muted font-italic font-weight-light">Fantastic</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>1.0</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Jun Kim <span className="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                1.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                James Choi, #20 <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                1.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                John Hong <span className="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                0.5
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Isaac Baek <span className="small text-muted font-italic font-weight-light">Fantastic</span>
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