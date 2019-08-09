import React from "react";
import Footer from "../../Footer";
import profile from "../../../assets/images/caleb.jpg";

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
                    <div id="playercard">
                        <div className="card shadow-sm">
                            <div className="card-front">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className="rounded p-2" src={profile} alt="profile" height="253px" id="playerpic" />
                                    </div>
                                </div>
                                <div className="row">
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
                    <div id="playercard">
                        <div className="card shadow-sm">
                            <div className="card-front">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className="rounded p-2" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/46018122_10155824402577337_2894273375809568768_o.jpg?_nc_cat=109&_nc_ht=scontent-lax3-1.xx&oh=ec4bc2956f49415afae3fdc2c4f6111a&oe=5D827AB1" height="253px" alt="profile" id="playerpic" />
                                    </div>
                                </div>
                                <div className="row">
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
                    <div id="playercard">
                        <div className="card shadow-sm">
                            <div className="card-front">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className="img-fluid rounded p-2" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/14729154_1100156956719867_9055061676495897931_n.jpg?_nc_cat=101&_nc_ht=scontent-lax3-1.xx&oh=45ae2663506b7c55940ba4beffbc442e&oe=5D5181E4" alt="profile" id="playerpic" />
                                    </div>
                                </div>
                                <div className="row">
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
                    <div id="playercard">
                        <div className="card shadow-sm">
                            <div className="card-front">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className="img-fluid rounded p-2" src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-1/c379.0.1290.1290a/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_ht=scontent-lax3-2.xx&oh=65fca599b2c399a1a3cbcb71b4562ad9&oe=5D5FE949" alt="profile" id="playerpic" />
                                    </div>
                                </div>
                                <div className="row">
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
                    <div id="playercard">
                        <div className="card shadow-sm">
                            <div className="card-front">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className="img-fluid rounded p-2" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/23172773_10211927155667988_6262282094605372622_n.jpg?_nc_cat=108&_nc_ht=scontent-lax3-1.xx&oh=b1963a9c1d6972f38891b68b2126f171&oe=5D69CEAE" alt="profile" id="playerpic" />
                                    </div>
                                </div>
                                <div className="row">
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
                    <div id="playercard">
                        <div className="card shadow-sm">
                            <div className="card-front">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className="img-fluid rounded p-2" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/41962074_10217428431169785_3816344249432014848_n.jpg?_nc_cat=105&_nc_ht=scontent-lax3-1.xx&oh=481a8b1cc642dd3ad1444e762e65be84&oe=5D732B22" alt="profile" id="playerpic" />
                                    </div>
                                </div>
                                <div className="row">
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
                    <div id="playercard">
                        <div className="card shadow-sm">
                            <div className="card-front">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className="img-fluid rounded p-2" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/32977869_10216320857678788_1839738228945453056_o.jpg?_nc_cat=110&_nc_ht=scontent-lax3-1.xx&oh=9f92b48c91d11087e2978fb739eaa406&oe=5D59C793" alt="profile" id="playerpic" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h6 className="mt-5 pb-2 mx-5 border-bottom">
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
                    <div id="playercard">
                        <div className="card shadow-sm">
                            <div className="card-front">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className="rounded p-2" src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/19390573_1779501668731696_7016220434407211460_o.jpg?_nc_cat=106&_nc_ht=scontent-lax3-2.xx&oh=ce4ece29803438116332b46e70ac77fd&oe=5D6BB6DF" height="253px" alt="profile" id="playerpic" />
                                    </div>
                                </div>
                                <div className="row">
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