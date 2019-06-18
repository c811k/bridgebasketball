import React from "react";
import Footer from "../Footer";
import "../../App.css"

function Standing() {
    return(
        <div>
            <div className="container" id="standing">
            <div className="row mt-5">
                <div className="col-sm-6">
                    <h3 className="pb-3 border-bottom border-warning">S T A N D I N G</h3> 
                </div>
                <div className="col-sm-6 text-right">
                    <h3 className="pb-3 border-bottom text-secondary">S E A S O N<span className="text-warning"> 2 0 1 9 </span></h3>
                </div>
            </div>
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <table className="table table-striped">
                            <thead>
                                <tr className="shadow-sm" id="standing-header">
                                <th scope="col">RANK</th>
                                <th scope="col">TEAM</th>
                                <th scope="col" className="text-right">W</th>
                                <th scope="col" className="text-right">L</th>
                                <th scope="col" className="text-right">PCT</th>
                                <th scope="col" className="text-right">GB</th>
                                <th scope="col" className="text-right">PPG</th>
                                <th scope="col" className="text-right">OPP. PPG</th>
                                <th scope="col" className="text-right">DIFF</th>
                                <th scope="col" className="text-right">STREAK</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Double Up</td>
                                <td className="text-right">5</td>
                                <td className="text-right">0</td>
                                <td className="text-right">1.000</td>
                                <td className="text-right">-</td>
                                <td className="text-right">56.4</td>
                                <td className="text-right">41.2</td>
                                <td className="text-right text-success">+15.2</td>
                                <td className="text-right">W5</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Lord of the Rims</td>
                                <td className="text-right">3</td>
                                <td className="text-right">2</td>
                                <td className="text-right">.600</td>
                                <td className="text-right">2</td>
                                <td className="text-right">53.6</td>
                                <td className="text-right">50.2</td>
                                <td className="text-right text-success">+3.4</td>
                                <td className="text-right">L2</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>The Chosen</td>
                                <td className="text-right">2</td>
                                <td className="text-right">3</td>
                                <td className="text-right">.400</td>
                                <td className="text-right">3</td>
                                <td className="text-right">47.8</td>
                                <td className="text-right">50.4</td>
                                <td className="text-right text-danger">-2.6</td>
                                <td className="text-right">L2</td>
                                </tr>
                                <tr>
                                <th scope="row">4</th>
                                <td>Fantastic</td>
                                <td className="text-right">2</td>
                                <td className="text-right">3</td>
                                <td className="text-right">.400</td>
                                <td className="text-right">3</td>
                                <td className="text-right">44.0</td>
                                <td className="text-right">49.8</td>
                                <td className="text-right text-danger">-5.8</td>
                                <td className="text-right">W1</td>
                                </tr>
                                <tr>
                                <th scope="row">5</th>
                                <td>Angry Birdz</td>
                                <td className="text-right">2</td>
                                <td className="text-right">3</td>
                                <td className="text-right">.400</td>
                                <td className="text-right">3</td>
                                <td className="text-right">40.6</td>
                                <td className="text-right">47.4</td>
                                <td className="text-right text-danger">-6.8</td>
                                <td className="text-right">W2</td>
                                </tr>
                                <tr>
                                <th scope="row">6</th>
                                <td>BH</td>
                                <td className="text-right">1</td>
                                <td className="text-right">4</td>
                                <td className="text-right">.200</td>
                                <td className="text-right">4</td>
                                <td className="text-right">45.0</td>
                                <td className="text-right">47.6</td>
                                <td className="text-right text-danger">-2.6</td>
                                <td className="text-right">L1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Standing;