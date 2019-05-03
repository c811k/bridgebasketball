import React, { Component } from "react";

class Home extends Component {
    render() {
    return(
        <div id="home">
            <div className="row">
                <div className="col-md-12 text-center mt-5">
                    <div className="jumbotron mt-5 bg-transparent" id="header">
                        <h1 className="text-white my-5 pb-5"><strong>BRIDGE BASKETBALL</strong></h1>
                        <h2 className="text-white mb-5 pb-5">S E A S O N 2 0 1 9</h2>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Home;