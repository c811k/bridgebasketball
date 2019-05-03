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
                    <h3 className="pb-3 border-bottom text-secondary">S E A S O N<span className="text-warning"> 2 0 1 9 </span></h3>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-3 text-center">
                    <div className="card shadow-sm" id="playercard">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-fluid rounded p-2" src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-1/c379.0.1290.1290a/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_ht=scontent-lax3-2.xx&oh=e714aa39b48075c1da914b017e3bfc3d&oe=5D385C49" alt="profile" id="playerpic" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-right">
                                <ul class="list-group list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0"><span className="badge badge-secondary">#96</span>ADAM CHO</li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0" id="playerstats"><span className="badge badge-dark">- PTS</span><span className="badge badge-dark">- REB</span><span className="badge badge-dark">- AST</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

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
                                    <li className="list-group-item d-flex ml-auto align-items-center border-0">
                                        <span className="badge badge-secondary"> ANGRY BIRDZ</span>
                                    </li>
                                    {/* <li className="list-group-item d-flex justify-content-between align-items-center border-0" id="playerstats"><span className="badge badge-dark">- PTS</span><span className="badge badge-dark">- REB</span><span className="badge badge-dark">- AST</span></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 text-center">
                    <div className="card shadow-sm" id="playercard">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-fluid rounded p-2" src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/26840579_10212742167642767_4145880265233871200_o.jpg?_nc_cat=105&_nc_ht=scontent-lax3-2.xx&oh=56dff2be42d16a92159ecdbd74ed5475&oe=5D6D5A8C" alt="profile" id="playerpic" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-right">
                                <ul class="list-group list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0"><span className="badge badge-secondary">#22</span>ANDREW SHIN</li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0" id="playerstats"><span className="badge badge-dark">- PTS</span><span className="badge badge-dark">- REB</span><span className="badge badge-dark">- AST</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 text-center">
                    <div className="card shadow-sm" id="playercard">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-fluid rounded p-2" src="https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-1/c379.0.1290.1290a/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_ht=scontent-lax3-2.xx&oh=e714aa39b48075c1da914b017e3bfc3d&oe=5D385C49" alt="profile" id="playerpic" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-right">
                                <ul class="list-group list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0"><span className="badge badge-secondary">#69</span>BENJAMIN LEE</li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0" id="playerstats"><span className="badge badge-dark">- PTS</span><span className="badge badge-dark">- REB</span><span className="badge badge-dark">- AST</span></li>
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
                                <a class="page-link text-dark border-0" href="#" aria-label="Previous" id="left">
                                <span aria-hidden="true"><i class="fas fa-angle-left"></i></span>
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
                                <a class="page-link text-dark border-0" href="#">10</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="#">11</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="#">12</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link text-dark border-0" href="#" aria-label="Next" id="right">
                                <span aria-hidden="true"><i class="fas fa-angle-right"></i></span>
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