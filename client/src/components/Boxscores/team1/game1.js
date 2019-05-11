import React from "react";

function game1(props) {
    return (
        <div className="row mt-5">
            <div className="col-md-12">
                <table className="table table-striped">
                    <thead>
                        <tr className="shadow-sm bg-warning text-white" id="standing-header">
                        <th scope="col">#</th>
                        <th scope="col">PLAYER NAME</th>
                        <th scope="col" className="text-right">FG</th>
                        <th scope="col" className="text-right">3PT</th>
                        <th scope="col" className="text-right">FT</th>
                        <th scope="col" className="text-right">REB</th>
                        <th scope="col" className="text-right">AST</th>
                        <th scope="col" className="text-right">STL</th>
                        <th scope="col" className="text-right">BLK</th>
                        <th scope="col" className="text-right">PF</th>
                        <th scope="col" className="text-right">PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">11</th>
                        <td>Caleb Kang</td>
                        <td className="text-right">8-11</td>
                        <td className="text-right">3-6</td>
                        <td className="text-right">2-4</td>
                        <td className="text-right">8</td>
                        <td className="text-right">2</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">1</td>
                        <td className="text-right">21</td>
                        </tr>
                        <tr>
                        <th scope="row">20</th>
                        <td>James Choi</td>
                        <td className="text-right">0-2</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">3</td>
                        <td className="text-right">1</td>
                        <td className="text-right">1</td>
                        <td className="text-right">1</td>
                        <td className="text-right">1</td>
                        <td className="text-right">0</td>
                        </tr>
                        <tr>
                        <th scope="row">44</th>
                        <td>James Kim</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">1</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Joseph Jung</td>
                        <td className="text-right">1-5</td>
                        <td className="text-right">0-1</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">5</td>
                        <td className="text-right">1</td>
                        <td className="text-right">2</td>
                        <td className="text-right">0</td>
                        <td className="text-right">4</td>
                        <td className="text-right">2</td>
                        </tr>
                        <tr>
                        <th scope="row">89</th>
                        <td>Moon Kim</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">2</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">1</td>
                        <td className="text-right">0</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Richard Kim</td>
                        <td className="text-right">4-14</td>
                        <td className="text-right">1-7</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">6</td>
                        <td className="text-right">2</td>
                        <td className="text-right">2</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">9</td>
                        </tr>
                        <tr>
                        <th scope="row">31</th>
                        <td>Smith Kang</td>
                        <td className="text-right">1-10</td>
                        <td className="text-right">1-5</td>
                        <td className="text-right">4-6</td>
                        <td className="text-right">10</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">3</td>
                        <td className="text-right">7</td>
                        </tr>
                        <tr>
                        <th scope="row">25</th>
                        <td>James Choi</td>
                        <td className="text-right"></td>
                        <td className="text-right"></td>
                        <td className="text-right"></td>
                        <td className="text-right"></td>
                        <td className="text-right">DNP</td>
                        <td className="text-right"></td>
                        <td className="text-right"></td>
                        <td className="text-right"></td>
                        <td className="text-right"></td>
                        </tr>
                        <tr>
                        <th scope="row"><span className="text-weight-bold">Team</span></th>
                        <td></td>
                        <td className="text-right font-weight-bolder">14-42</td>
                        <td className="text-right font-weight-bolder">5-19</td>
                        <td className="text-right font-weight-bolder">6-10</td>
                        <td className="text-right font-weight-bolder">35</td>
                        <td className="text-right font-weight-bolder">6</td>
                        <td className="text-right font-weight-bolder">5</td>
                        <td className="text-right font-weight-bolder">1</td>
                        <td className="text-right font-weight-bolder">10</td>
                        <td className="text-right font-weight-bolder">39</td>
                        </tr>
                        <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td className="text-right font-weight-bolder">33.3%</td>
                        <td className="text-right font-weight-bolder">26.3%</td>
                        <td className="text-right font-weight-bolder">60.0%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default game1;