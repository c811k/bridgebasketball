import React from "react";
import Footer from "../Footer";

function Players() {
    return(
        <div>
        <div className="container" id="players">
            <div className="row mt-5">
                <div className="col-md-6">
                    <h3 className="pb-3 border-bottom border-warning">P L A Y E R S</h3> 
                </div>
                <div className="col-md-6 text-right">
                    <h3 className="pb-3 border-bottom">S E A S O N<span className="text-warning"> 2 0 1 9 </span></h3>
                </div>
            </div>

            <div className="row mt-5">
            <div className="col-md-3 text-center">
                    <div className="card shadow-sm" id="playercard">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-fluid rounded p-2" src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/35349072_10216185556136003_6633220441961922560_n.jpg?_nc_cat=107&_nc_ht=scontent-lax3-2.xx&oh=1831b053007130e7737338555035637e&oe=5D20C1C9" alt="profile" id="playerpic" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-right">
                                <ul class="list-group list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0"><span className="badge badge-secondary">#91</span>ANDREW KIM</li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0" id="playerstats"><span className="badge badge-dark">25.2 PTS</span><span className="badge badge-dark">12.4 REB</span><span className="badge badge-dark">6.2 AST</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 text-center">
                    <div className="card shadow-sm" id="playercard">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-fluid rounded p-2" src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/26951834_1845327715477385_4506628381151147651_o.jpg?_nc_cat=103&_nc_ht=scontent-lax3-2.xx&oh=ee343ada05921d21e33c96078b4342d2&oe=5D15FA1D" alt="profile" id="playerpic" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-right">
                                <ul class="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0"><span className="badge badge-secondary">#33</span>JOHN HONG<i class="fas fa-trophy">x2</i></li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0" id="playerstats"><span className="badge badge-dark">25.2 PTS</span><span className="badge badge-dark">12.4 REB</span><span className="badge badge-dark">6.2 AST</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 text-center">
                    <div className="card shadow-sm" id="playercard">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-fluid rounded p-2" src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-1/c153.33.414.414a/222333_223776550971593_8025557_n.jpg?_nc_cat=106&_nc_ht=scontent-lax3-2.xx&oh=7b379a3bbe07f42442f05aafc63f257b&oe=5D1F70EA" alt="profile" id="playerpic" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-right">
                                <ul class="list-group list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0"><span className="badge badge-secondary">#0</span>ISAAC BAEK</li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0" id="playerstats"><span className="badge badge-dark">25.2 PTS</span><span className="badge badge-dark">12.4 REB</span><span className="badge badge-dark">6.2 AST</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-3 text-center">
                    <div className="card shadow-sm" id="playercard">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-fluid rounded p-2" src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/23172773_10211927155667988_6262282094605372622_n.jpg?_nc_cat=108&_nc_ht=scontent-lax3-2.xx&oh=a8ea21270556653a8f4278ba0b35e899&oe=5D1AB4AE" alt="profile" id="playerpic" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-right">
                                <ul class="list-group list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0"><span className="badge badge-secondary">#13</span>DANIEL PARK</li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0" id="playerstats"><span className="badge badge-dark">25.2 PTS</span><span className="badge badge-dark">12.4 REB</span><span className="badge badge-dark">6.2 AST</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="#">1</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="#">2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="#">3</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="#">4</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="#">5</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="#">6</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="#">7</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="#">8</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="#">9</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
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

export default Players;