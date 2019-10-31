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
                                <img className="img-fluid rounded mt-3 border" src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-1/c379.0.1290.1290a/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_oc=AQkWsGjq1SIyscDxOZRDx5XtI1Gth0OtkZkHt6ZlvdP35t1Jw7CWdSBAptCwzp135YI&_nc_ht=scontent-lax3-2.xx&oh=8ee181e533e1c5c409c17502083cfc01&oe=5DFE1D49" alt="profile" id="playerpic" />
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
                                                <h5>22.6</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Kevin Shim <span className="small text-muted font-italic font-weight-light">Fantastic</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                21.7
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                               James Choi, #25 <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                19.3
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-8">
                                                Steve Joo <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-4 text-right">
                                                18.8 
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-8">
                                                Isak Shin <span className="small text-muted font-italic font-weight-light">Double Up</span>
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
                            <div className="col-md-6">
                                <img className="img-fluid rounded mt-3 border" src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/67430486_102449234433877_5846109204695220224_o.jpg?_nc_cat=108&_nc_oc=AQn5FXmHpYCaYSA-YzKv2B1f75bc8RYZt7OC8biEVvMpQkRhEukGFSGTVnPcN_taA1Z9k_unQD_O1LleEQL6_v96&_nc_ht=scontent-lax3-2.xx&oh=068b224e2a14faf5b001d59d7a673097&oe=5E543147" alt="profile" height="160" id="playerpic" />
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
                                                Moses Kim <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>15.0</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Isak Shin <span className="small text-muted font-italic font-weight-light">Double Up</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                14.0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                John Hong <span className="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                11.8
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                James Choi, #25 <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                11.3
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Smith Kang <span className="small text-muted font-italic font-weight-light">The Chosen</span>
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
                            <div className="col-md-6">
                                <img className="rounded mt-3 border" src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/60813095_10211881944924471_3523127841451409408_o.jpg?_nc_cat=111&_nc_oc=AQlWdFEhZhqSVf05amvO7g0BHQO3mC1xuUpd-20-b3OK0i4PPDF0xXzVYUOh6cGAtvDAxE4Moiq4LK7JKeLUfTyE&_nc_ht=scontent-lax3-2.xx&oh=84e08e11eb698a82f4a0467461661a6a&oe=5E6419CA" alt="profile" id="playerpic" height="160" />
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
                                                <h5>5.4</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                David Lee <span className="small text-muted font-italic font-weight-light">Angry Birdz</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                5.2
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                John Hong <span className="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                3.7
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
                                                Benjamin Lee <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
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
                            <div className="col-md-6">
                                <img className="rounded mt-3 border" src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/60813095_10211881944924471_3523127841451409408_o.jpg?_nc_cat=111&_nc_oc=AQlWdFEhZhqSVf05amvO7g0BHQO3mC1xuUpd-20-b3OK0i4PPDF0xXzVYUOh6cGAtvDAxE4Moiq4LK7JKeLUfTyE&_nc_ht=scontent-lax3-2.xx&oh=84e08e11eb698a82f4a0467461661a6a&oe=5E6419CA" alt="profile" id="playerpic" height="160" />
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
                                                <h5>.576</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Kevin Shim <span className="small text-muted font-italic font-weight-light">Fantastic</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                .454
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Joseph Jung <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                .435
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Smith Kang <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                .431
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                James Choi, #25 <span className="small text-muted font-italic font-weight-light">The Chosen</span>
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
                            <div className="col-md-6">
                                <img className="img-fluid rounded mt-3 border" src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/13719620_10210353529858134_8983312615173657508_o.jpg?_nc_cat=103&_nc_oc=AQmYyxBNuW1oeDRUY7SSgTWAiMVs4anfXYn503BYK7bHBBMR3xYthJ2XKrHUk7USWyw&_nc_ht=scontent-lax3-2.xx&oh=513d15eda8ae68520552c77d0d8167f1&oe=5DCEEC6A" alt="profile" height="160" id="playerpic" />
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
                                                <h5>4.0</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Benjamin Lee <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                2.8
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Denny Lee <span className="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                2.7
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Brandon Oh <span className="small text-muted font-italic font-weight-light">Lord of the Rims</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                2.6
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                James Choi, #25 <span className="small text-muted font-italic font-weight-light">The Chosen</span>
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
                            <div className="col-md-6">
                                <img className="img-fluid rounded mt-3 border" src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/24130025_10210722761964443_5906235444542699248_n.jpg?_nc_cat=111&_nc_oc=AQmKg_lf1A2-KLwtEPVtfNId_e1016RcemtvsTkSd1K0PX0xninf-Q7guFqto9ZvyVCRlTFa2Hz9aJbE0YdvAwn_&_nc_ht=scontent-lax3-2.xx&oh=714ed148d3fbdf5657c35b75d1eab680&oe=5E62B3A6" alt="profile" height="160" id="playerpic" />
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
                                                James Choi, #25 <span className="small text-muted font-italic font-weight-light">The Chosen</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                <h5>0.8</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                John Hong <span className="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                0.8
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Denny Lee <span className="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                0.7
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Jun Kim <span className="small text-muted font-italic font-weight-light">BH</span>
                                            </div>
                                            <div className="col-md-3 text-right">
                                                0.7
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item border-0 bg-light">
                                        <div className="row">
                                            <div className="col-md-9">
                                                Kevin Shim <span className="small text-muted font-italic font-weight-light">Fantastic</span>
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