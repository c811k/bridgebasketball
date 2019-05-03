import React from "react";
import Footer from "../Footer";
import "../../App.css"

function Standing() {
    return(
        <div>
            <div className="container" id="standing">
            <div className="row mt-5">
                <div className="col-md-6">
                    <h3 className="pb-3 border-bottom border-warning">S T A N D I N G</h3> 
                </div>
                <div className="col-md-6 text-right">
                    <h3 className="pb-3 border-bottom text-secondary">S E A S O N<span className="text-warning"> 2 0 1 9 </span></h3>
                </div>
            </div>
                <div className="row mt-5">
                    <div className="col-md-12">
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
                                <td className="text-right">1</td>
                                <td className="text-right">0</td>
                                <td className="text-right">1.000</td>
                                <td className="text-right">-</td>
                                <td className="text-right">57.0</td>
                                <td className="text-right">29.0</td>
                                <td className="text-right">+28.0</td>
                                <td className="text-right">W1</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Lord of the Rims</td>
                                <td className="text-right">1</td>
                                <td className="text-right">0</td>
                                <td className="text-right">1.000</td>
                                <td className="text-right">-</td>
                                <td className="text-right">53.0</td>
                                <td className="text-right">42.0</td>
                                <td className="text-right">+11.0</td>
                                <td className="text-right">W1</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>The Chosen</td>
                                <td className="text-right">1</td>
                                <td className="text-right">0</td>
                                <td className="text-right">1.000</td>
                                <td className="text-right">-</td>
                                <td className="text-right">39.0</td>
                                <td className="text-right">36.0</td>
                                <td className="text-right">+3.0</td>
                                <td className="text-right">W1</td>
                                </tr>
                                <tr>
                                <th scope="row">4</th>
                                <td>Angry Birdz</td>
                                <td className="text-right">0</td>
                                <td className="text-right">1</td>
                                <td className="text-right">.000</td>
                                <td className="text-right">1</td>
                                <td className="text-right">36.0</td>
                                <td className="text-right">39.0</td>
                                <td className="text-right">-3.0</td>
                                <td className="text-right">L1</td>
                                </tr>
                                <tr>
                                <th scope="row">5</th>
                                <td>BH</td>
                                <td className="text-right">0</td>
                                <td className="text-right">1</td>
                                <td className="text-right">.000</td>
                                <td className="text-right">1</td>
                                <td className="text-right">42.0</td>
                                <td className="text-right">53.0</td>
                                <td className="text-right">-11.0</td>
                                <td className="text-right">L1</td>
                                </tr>
                                <tr>
                                <th scope="row">6</th>
                                <td>Fantastic</td>
                                <td className="text-right">0</td>
                                <td className="text-right">1</td>
                                <td className="text-right">.000</td>
                                <td className="text-right">1</td>
                                <td className="text-right">29.0</td>
                                <td className="text-right">57.0</td>
                                <td className="text-right">-28.0</td>
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