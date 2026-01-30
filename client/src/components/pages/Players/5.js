import React from "react";
import Footer from "../../Footer";
import ProfilePic from "../../../assets/images/profile.JPG";

function Players5() {
    return(
        <div>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6">
                    <h3 className="pb-3 border-bottom border-warning">P L A Y E R S</h3> 
                </div>
                <div className="col-md-6 text-right">
                    <h3 className="pb-3 border-bottom text-secondary">S E A S O N<span className="text-warning"> 2 0 1 9 </span></h3>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-3 text-center">
                    <div className="player-card">
                        <div className="card shadow-sm">
                            <div className="card-front">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className="img-fluid rounded p-2" 
                                            src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-1/c379.0.1290.1290a/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_oc=AQkWsGjq1SIyscDxOZRDx5XtI1Gth0OtkZkHt6ZlvdP35t1Jw7CWdSBAptCwzp135YI&_nc_ht=scontent-lax3-2.xx&oh=8ee181e533e1c5c409c17502083cfc01&oe=5DFE1D49" 
                                            alt="profile" 
                                            id="playerpic" 
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = ProfilePic;
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-md-12 text-center">
                                        <h6 className="mt-3 pb-2 mx-5 border-bottom">
                                            JUN <span className="text-warning">KIM</span>
                                        </h6>
                                        <h5 className="badge badge-dark">BH</h5>                                 
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h6 className="p-2 alert-warning d-flex justify-content-between rounded-top">SEASON 2019 <span><i className="fas fa-trophy"></i></span></h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-right">
                                        <ul className="list-group list-group">
                                            <li className="list-group-item border-0">
                                                <span className="badge badge-light d-flex justify-content-between align-items-center border-0 small my-1">#7<span>GP - <span className="text-success">5</span></span></span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FG%<span>.361</span></span><span className="small">19th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0 small">3P%<span>.355</span></span><span className="small">7th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FT%<span>.900</span></span><span className="small">1st</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">PPG<span>12.8</span></span><span className="small">10th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0">RPG<span>9.4</span></span><span className="small">T-9th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">APG<span>1.8</span></span><span className="small">14th</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 text-center">
                    <div className="player-card">
                        <div className="card shadow-sm">
                            <div className="card-front">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className="img-fluid rounded p-2" 
                                            src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/67807469_619116638577337_2018139148807831552_o.jpg?_nc_cat=110&_nc_oc=AQkFdOecD4VgkniLmazvdUU0P5rUKkxnymB_oEmH398uKjhQFTdcrOG_feS5Vq-Kg1E&_nc_ht=scontent-lax3-1.xx&oh=41f1a60b772053503e16b700e4f0fe91&oe=5DCCF54C" 
                                            alt="profile" 
                                            id="playerpic" 
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = ProfilePic;
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-md-12 text-center">
                                        <h6 className="mt-3 pb-2 mx-5 border-bottom">
                                            JUSTIN <span className="text-warning">HWANG</span>
                                        </h6>
                                        <h5 className="badge badge-dark">DOUBLE UP</h5>                                 
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h6 className="p-2 alert-secondary text-center rounded-top">SEASON 2019</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-right">
                                        <ul className="list-group list-group">
                                            <li className="list-group-item border-0">
                                                <span className="badge badge-light d-flex justify-content-between align-items-center border-0 small my-1">#30<span>GP - <span className="text-success">4</span></span></span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FG%<span>.333</span></span><span className="small">T-23rd</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0 small">3P%<span>.367</span></span><span className="small">T-5th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FT%<span>-</span></span><span className="small">NA</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">PPG<span>8.8</span></span><span className="small">T-15th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0">RPG<span>4.5</span></span><span className="small">22nd</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">APG<span>0.5</span></span><span className="small">T-34th</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 text-center">
                    <div className="player-card">
                        <div className="card shadow-sm">
                            <div className="card-front">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className="img-fluid rounded p-2" 
                                            src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/11025663_10204159636207633_5032983061615525533_n.jpg?_nc_cat=102&_nc_oc=AQlUwjQsWJx6tp-e7cvuiqGzndjLZ3mUY0LfsydRB-dtcOljyr8poE6a_beHmjXXzZQiCDm2Xuu9zlyy6J2fZ_Ux&_nc_ht=scontent-lax3-2.xx&oh=c432688071869e5c21249ad6c8e9e4eb&oe=5E5FB7D9" 
                                            alt="profile" 
                                            id="playerpic" 
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = ProfilePic;
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-md-12 text-center">
                                        <h6 className="mt-3 pb-2 mx-5 border-bottom">
                                            KEVIN <span className="text-warning">SHIM</span>
                                        </h6>
                                        <h5 className="badge badge-dark">FANTASTIC</h5>                                 
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h6 className="p-2 alert-warning d-flex justify-content-between rounded-top">SEASON 2019<span><i className="fas fa-trophy"></i><span className="small">x2</span></span></h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-right">
                                        <ul className="list-group list-group">
                                            <li className="list-group-item border-0">
                                                <span className="badge badge-light d-flex justify-content-between align-items-center border-0 small my-1">#15 C<span>GP - <span className="text-success">5</span></span></span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FG%<span>.413</span></span><span className="small">3rd</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0 small">3P%<span>.143</span></span><span className="small">27th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FT%<span>.659</span></span><span className="small">5th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">PPG<span>18.2</span></span><span className="small">4th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0">RPG<span>9.4</span></span><span className="small">T-8th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">APG<span>2.0</span></span><span className="small">13th</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="col-md-3 text-center">
                    <div className="player-card">
                        <div className="card shadow-sm">
                            <div className="card-front">
                                <div className="row">
                                    <div className="col-md-12 justify-content-center">
                                        <img className="img-fluid rounded p-2" 
                                            src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-1/c379.0.1290.1290a/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_oc=AQkWsGjq1SIyscDxOZRDx5XtI1Gth0OtkZkHt6ZlvdP35t1Jw7CWdSBAptCwzp135YI&_nc_ht=scontent-lax3-2.xx&oh=8ee181e533e1c5c409c17502083cfc01&oe=5DFE1D49" 
                                            alt="profile" 
                                            id="playerpic"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = ProfilePic;
                                            }} 
                                        />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-md-12 text-center">
                                        <h6 className="mt-3 pb-2 mx-5 border-bottom">
                                            MARK <span className="text-warning">CHO</span>
                                        </h6>
                                        <h5 className="badge badge-dark">FANTASTIC</h5>                                 
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h6 className="p-2 alert-secondary text-center rounded-top">SEASON 2019</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-right">
                                        <ul className="list-group list-group">
                                            <li className="list-group-item border-0">
                                                <span className="badge badge-light d-flex justify-content-between align-items-center border-0 small my-1">#17<span>GP - <span className="text-danger">0</span></span></span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FG%<span>-</span></span><span className="small">NA</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0 small">3P%<span>-</span></span><span className="small">NA</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FT%<span>-</span></span><span className="small">NA</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">PPG<span>-</span></span><span className="small">NA</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0">RPG<span>-</span></span><span className="small">NA</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">APG<span>-</span></span><span className="small">NA</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
            <div className="row mt-5">
                <div className="col-md-3 text-center">
                    <div className="player-card">
                        <div className="card shadow-sm">
                            <div className="card-front">
                            <div className="row">
                                    <div className="col-md-12 justify-content-center">
                                        <img className="img-fluid rounded p-2" 
                                            src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/48950516_10155729978496968_6461726924728172544_n.jpg?_nc_cat=104&_nc_oc=AQkRp4HEYrC1_qBZCeUGYTPdukWbdrQ7tpYvRdbaU7C9DOV6O3eTzPLli5h9qNw6UT8&_nc_ht=scontent-lax3-2.xx&oh=70f457a678a84d3a69913bb36ea6c278&oe=5E08003C" 
                                            alt="profile" 
                                            id="playerpic"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = ProfilePic;
                                            }} 
                                        />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-md-12 text-center">
                                        <h6 className="mt-3 pb-2 mx-5 border-bottom">
                                            MOON <span className="text-warning">KIM</span>
                                        </h6>
                                        <h5 className="badge badge-dark">THE CHOSEN</h5>                                 
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h6 className="p-2 alert-secondary text-center rounded-top">SEASON 2019</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-right">
                                        <ul className="list-group list-group">
                                            <li className="list-group-item border-0">
                                                <span className="badge badge-light d-flex justify-content-between align-items-center border-0 small my-1">#89<span>GP - <span className="text-success">5</span></span></span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FG%<span>.118</span></span><span className="small">39th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0 small">3P%<span>.000</span></span><span className="small">T-34th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FT%<span>.000</span></span><span className="small">T-25th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">PPG<span>0.8</span></span><span className="small">39th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0">RPG<span>3.4</span></span><span className="small">29th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">APG<span>1.0</span></span><span className="small">T-19th</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 text-center">
                    <div className="player-card">
                        <div className="card shadow-sm">
                            <div className="card-front">
                            <div className="row">
                                    <div className="col-md-12">
                                        <img className="img-fluid rounded p-2" 
                                            src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/67430486_102449234433877_5846109204695220224_o.jpg?_nc_cat=108&_nc_oc=AQn5FXmHpYCaYSA-YzKv2B1f75bc8RYZt7OC8biEVvMpQkRhEukGFSGTVnPcN_taA1Z9k_unQD_O1LleEQL6_v96&_nc_ht=scontent-lax3-2.xx&oh=068b224e2a14faf5b001d59d7a673097&oe=5E543147" 
                                            alt="profile" 
                                            id="playerpic" 
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = ProfilePic;
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-md-12 text-center">
                                        <h6 className="mt-3 pb-2 mx-5 border-bottom">
                                            MOSES <span className="text-warning">KIM</span>
                                        </h6>
                                        <h5 className="badge badge-dark">LORD OF THE RIMS</h5>                                 
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h6 className="p-2 alert-secondary text-center rounded-top">SEASON 2019</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-right">
                                        <ul className="list-group list-group">
                                            <li className="list-group-item border-0">
                                                <span className="badge badge-light d-flex justify-content-between align-items-center border-0 small my-1">#52<span>GP - <span className="text-success">3</span></span></span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FG%<span>.375</span></span><span className="small">T-13th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0 small">3P%<span>.500</span></span><span className="small">T-1st</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FT%<span>.000</span></span><span className="small">T-25th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">PPG<span>2.7</span></span><span className="small">32nd</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0">RPG<span>15.0</span></span><span className="small">1st</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">APG<span>1.0</span></span><span className="small">T-19th</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 text-center">
                    <div className="player-card">
                        <div className="card shadow-sm">
                            <div className="card-front">
                            <div className="row">
                                    <div className="col-md-12">
                                        <img className="img-fluid rounded p-2" 
                                            src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/66723720_10216668413116763_7253535666510757888_n.jpg?_nc_cat=107&_nc_oc=AQn7lbKJsw6TuST5_QE0M1YpDu0wBXRto5rHp28rqsHeBdmeuwXFZcQtc4FHoBov5J8&_nc_ht=scontent-lax3-1.xx&oh=8a513815a8f55c4ab6acc141e961b99e&oe=5DE8028A" 
                                            alt="profile" 
                                            id="playerpic" 
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = ProfilePic;
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-md-12 text-center">
                                        <h6 className="mt-3 pb-2 mx-5 border-bottom">
                                            RICHARD <span className="text-warning">KIM</span>
                                        </h6>
                                        <h5 className="badge badge-dark">THE CHOSEN</h5>                                 
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h6 className="p-2 alert-warning d-flex justify-content-between rounded-top">SEASON 2019 <span><i className="fas fa-trophy"></i><span className="small">x2</span></span></h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-right">
                                        <ul className="list-group list-group">
                                            <li className="list-group-item border-0">
                                                <span className="badge badge-light d-flex justify-content-between align-items-center border-0 small my-1">#2<span>GP - <span className="text-danger">4</span></span></span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FG%<span>.387</span></span><span className="small">T-10th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0 small">3P%<span>.188</span></span><span className="small">25th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FT%<span>.500</span></span><span className="small">T-14th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">PPG<span>7.3</span></span><span className="small">T-19th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0">RPG<span>5.0</span></span><span className="small">21st</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">APG<span>2.3</span></span><span className="small">T-9th</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 text-center">
                    <div className="player-card">
                        <div className="card shadow-sm">
                            <div className="card-front">
                            <div className="row">
                                    <div className="col-md-12">
                                        <img className="img-fluid rounded p-2" 
                                            src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/67247_10151485016680692_841369782_n.jpg?_nc_cat=105&_nc_oc=AQlr5wCH5fQwVz49pgyk7jsood4kE0tgtubGlxsvn8AXRbue5Nlpog8nQz5pc-5Vj-4&_nc_ht=scontent-lax3-2.xx&oh=6b138f6fbf5bfb6283fa2f26b586b9cb&oe=5DCB80CE" 
                                            alt="profile" 
                                            id="playerpic" 
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = ProfilePic;
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-md-12 text-center">
                                        <h6 className="mt-3 pb-2 mx-5 border-bottom">
                                            RICHARD <span className="text-warning">SONG</span>
                                        </h6>
                                        <h5 className="badge badge-dark">ANGRY BIRDZ</h5>                                 
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h6 className="p-2 alert-secondary text-center rounded-top">SEASON 2019</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-right">
                                        <ul className="list-group list-group">
                                            <li className="list-group-item border-0">
                                                <span className="badge badge-light d-flex justify-content-between align-items-center border-0 small my-1">#19<span>GP - <span className="text-danger">0</span></span></span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FG%<span>-</span></span><span className="small">NA</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0 small">3P%<span>-</span></span><span className="small">NA</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FT%<span>-</span></span><span className="small">NA</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">PPG<span>-</span></span><span className="small">NA</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0">RPG<span>-</span></span><span className="small">NA</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">APG<span>-</span></span><span className="small">NA</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>

            <div className="row mt-5">
                <div className="col-md-12">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <a className="page-link text-dark border-0" href="/players/4" aria-label="Previous" id="left">
                                <span aria-hidden="true"><i className="fas fa-angle-left"></i></span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link text-dark border-0 rounded" href="/players/1">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link text-dark border-0 rounded" href="/players/2">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link text-dark border-0 rounded" href="/players/3">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link text-dark border-0 rounded" href="/players/4">4</a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link text-dark border-0 rounded" href="/players/5">5</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link text-dark border-0 rounded" href="/players/6">6</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link text-dark border-0" href="/players/6" aria-label="Next" id="right">
                                <span aria-hidden="true"><i className="fas fa-angle-right"></i></span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default Players5;