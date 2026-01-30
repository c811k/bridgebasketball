import React from "react";
import Footer from "../../Footer";
import ProfilePic from "../../../assets/images/profile.JPG";

function Players2() {
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
                                        <img className="img-fluid rounded" 
                                            src={ProfilePic} 
                                            alt="profile" 
                                            id="playerpic" 
                                        />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-md-12 text-center">
                                        <h6 className="mt-3 pb-2 mx-5 border-bottom">
                                            CALEB <span className="text-warning">KANG</span>
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
                                                <span className="badge badge-light d-flex justify-content-between align-items-center border-0 small my-1">#11 C<span>GP - <span className="text-success">5</span></span></span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FG%<span>.373</span></span><span className="small">16th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0 small">3P%<span>.304</span></span><span className="small">13th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FT%<span>.467</span></span><span className="small">17th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">PPG<span>10.4</span></span><span className="small">11th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0">RPG<span>4.4</span></span><span className="small">23rd</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">APG<span>2.2</span></span><span className="small">11th</span>
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
                                        <img className="img-fluid rounded" 
                                            src={ProfilePic} 
                                            alt="profile" 
                                            id="playerpic" 
                                        />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-md-12 text-center">
                                        <h6 className="mt-3 pb-2 mx-5 border-bottom">
                                            DANIEL <span className="text-warning">HWANG</span>
                                        </h6>
                                        <h5 className="badge badge-dark">FANTASTIC</h5>                                 
                                    </div>
                                </div>
                            </div>
                            <div className="card-back">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h6 className="p-2 alert-warning d-flex justify-content-between rounded-top">SEASON 2019 <i className="fas fa-trophy"></i></h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-right">
                                        <ul className="list-group list-group">
                                            <li className="list-group-item border-0">
                                                <span className="badge badge-light d-flex justify-content-between align-items-center border-0 small my-1">#37<span>GP - <span className="text-success">5</span></span></span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FG%<span>.387</span></span><span className="small">11th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0 small">3P%<span>-</span></span><span className="small">NA</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FT%<span>.429</span></span><span className="small">19th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">PPG<span>6.0</span></span><span className="small">T-25th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0">RPG<span>8.2</span></span><span className="small">12th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">APG<span>0.2</span></span><span className="small">T-39th</span>
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
                                        <img className="img-fluid rounded" src={ProfilePic} alt="profile" id="playerpic" />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-md-12 text-center">
                                        <h6 className="mt-3 pb-2 mx-5 border-bottom">
                                            DANIEL <span className="text-warning">KIM</span>
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
                                                <span className="badge badge-light d-flex justify-content-between align-items-center border-0 small my-1">#0<span>GP - <span className="text-danger">1</span></span></span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FG%<span>.250</span></span><span className="small">NQ</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0 small">3P%<span>.200</span></span><span className="small">NQ</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FT%<span>.500</span></span><span className="small">NQ</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">PPG<span>9.0</span></span><span className="small">NQ</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0">RPG<span>3.0</span></span><span className="small">NQ</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">APG<span>0.0</span></span><span className="small">NQ</span>
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
                                        <img className="img-fluid rounded" src={ProfilePic} alt="profile" id="playerpic" />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-md-12 text-center">
                                        <h6 className="mt-3 pb-2 mx-5 border-bottom">
                                            DANIEL <span className="text-warning">LEE</span>
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
                                                <span className="badge badge-light d-flex justify-content-between align-items-center border-0 small my-1">#40<span>GP - <span className="text-danger">0</span></span></span>
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
                                    <div className="col-md-12">
                                        <img className="img-fluid rounded p-2" 
                                            src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/23172773_10211927155667988_6262282094605372622_n.jpg?_nc_cat=108&_nc_oc=AQkt25QWlSXugG-z99KaaGlMSo1cir9F0_PZdaN9s8K49uWzdiTp89XxnpuuGVPzK2g&_nc_ht=scontent-lax3-2.xx&oh=2712362b23e51383c332aea57c584808&oe=5E0802AE" 
                                            alt="profile" 
                                            id="playerpic" 
                                            onError={(e) => {
                                                e.target.onError = null;
                                                e.target.src = ProfilePic;
                                            }} 
                                        />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-md-12 text-center">
                                        <h6 className="mt-3 pb-2 mx-5 border-bottom">
                                            DANIEL <span className="text-warning">PARK</span>
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
                                                <span className="badge badge-light d-flex justify-content-between align-items-center border-0 small my-1">#13<span>GP - <span className="text-success">3</span></span></span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FG%<span>.407</span></span><span className="small">6th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0 small">3P%<span>.400</span></span><span className="small">3rd</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FT%<span>.250</span></span><span className="small">T-22nd</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">PPG<span>10.3</span></span><span className="small">12th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0">RPG<span>1.7</span></span><span className="small">T-37th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">APG<span>0.7</span></span><span className="small">T-30th</span>
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
                                            src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-1/41962074_10217428431169785_3816344249432014848_n.jpg?_nc_cat=105&_nc_oc=AQmr1wDm1ouYPrZnPZB1Pi5VDH2tnMaY6eBzOB5GWXjvNuBuqLXXl-8tvGhFgTibgaAt-hGMMB9XdDSB9z5qDSxa&_nc_ht=scontent-lax3-2.xx&oh=a3cb01dc256bc305723e156dd6e6cc31&oe=5E607922" alt="profile" 
                                            id="playerpic"
                                            onError={(e) => {
                                                e.target.onError = null;
                                                e.target.src = ProfilePic;
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col-md-12 text-center">
                                        <h6 className="mt-3 pb-2 mx-5 border-bottom">
                                            DAVID <span className="text-warning">CHO</span>
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
                                                <span className="badge badge-light d-flex justify-content-between align-items-center border-0 small my-1">#14<span>GP - <span className="text-success">4</span></span></span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FG%<span>.393</span></span><span className="small">7th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0 small">3P%<span>.367</span></span><span className="small">5th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FT%<span>.600</span></span><span className="small">T-7th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">PPG<span>13.0</span></span><span className="small">T-9th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0">RPG<span>10.2</span></span><span className="small">T-6th</span>
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
                                            src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/32977869_10216320857678788_1839738228945453056_o.jpg?_nc_cat=110&_nc_oc=AQkrIwI675lB-9R7AMwbViCEln06krx3-4a4i2nhgk5f2H-Uo9FV0f3R5b5GceL1Boo&_nc_ht=scontent-lax3-2.xx&oh=d98ba00026c81482cf3ea6adfbf5169e&oe=5DF7FB93" 
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
                                            DAVID <span className="text-warning">LEE</span>
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
                                                <span className="badge badge-light d-flex justify-content-between align-items-center border-0 small my-1">#66<span>GP - <span className="text-success">5</span></span></span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FG%<span>.256</span></span><span className="small">32th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0 small">3P%<span>.091</span></span><span className="small">29th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FT%<span>.550</span></span><span className="small">10th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">PPG<span>6.8</span></span><span className="small">22nd</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0">RPG<span>8.8</span></span><span className="small">11th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">APG<span>4.0</span></span><span className="small">T-2nd</span>
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
                                            src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/66390158_2867121889969663_6256619975528677376_n.jpg?_nc_cat=102&_nc_oc=AQm1gdeKcjEHSMVDFqjCNey6eWOknfXZkwuE0rcFMCEBcUwMJTavesLYxAO-jmW0hU4&_nc_ht=scontent-lax3-2.xx&oh=a45377fd20150fe0213a3c2ca8287d34&oe=5E087E21" 
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
                                            DENNY <span className="text-warning">LEE</span>
                                        </h6>
                                        <h5 className="badge badge-dark">BH</h5>                                 
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
                                                <span className="badge badge-light d-flex justify-content-between align-items-center border-0 small my-1">#6<span>GP - <span className="text-success">3</span></span></span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FG%<span>.391</span></span><span className="small">8th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0 small">3P%<span>.167</span></span><span className="small">26th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0 small">FT%<span>.250</span></span><span className="small">T-22nd</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">PPG<span>7.3</span></span><span className="small">T-19th</span>
                                                <span className="badge badge-warning d-flex justify-content-between align-items-center border-0">RPG<span>5.3</span></span><span className="small">T-19th</span>
                                                <span className="badge badge-secondary d-flex justify-content-between align-items-center border-0">APG<span>0.7</span></span><span className="small">T-30th</span>
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
                                <a className="page-link text-dark border-0" href="/players/1" aria-label="Previous" id="left">
                                <span aria-hidden="true"><i className="fas fa-angle-left"></i></span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link text-dark border-0 rounded" href="/players/1">1</a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link text-dark border-0 rounded" href="/players/2">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link text-dark border-0 rounded" href="/players/3">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link text-dark border-0 rounded" href="/players/4">4</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link text-dark border-0 rounded" href="/players/5">5</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link text-dark border-0 rounded" href="/players/6">6</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link text-dark border-0" href="/players/3" aria-label="Next" id="right">
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

export default Players2;