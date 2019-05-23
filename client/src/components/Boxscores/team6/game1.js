import React from "react";

function game1(props) {
    return (
        <div className="row mt-5">
            <div className="col-md-12">
                <table className="table table-striped">
                    <thead>
                        <tr className="border-top border-bottom" id="standing-header">
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
                        <th scope="row">21</th>
                        <td>Brian Kim</td>
                        <td className="text-right">0-3</td>
                        <td className="text-right">0-1</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">3</td>
                        <td className="text-right">0</td>
                        </tr>
                        <tr>
                        <th scope="row">37</th>
                        <td>Daniel Hwang</td>
                        <td className="text-right">2-8</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">0-1</td>
                        <td className="text-right">9</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">3</td>
                        <td className="text-right">4</td>
                        </tr>
                        <tr>
                        <th scope="row">57</th>
                        <td>Isaac Baek</td>
                        <td className="text-right">1-4</td>
                        <td className="text-right">0-2</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">5</td>
                        <td className="text-right">1</td>
                        <td className="text-right">2</td>
                        <td className="text-right">1</td>
                        <td className="text-right">1</td>
                        <td className="text-right">2</td>
                        </tr>
                        <tr>
                        <th scope="row">15</th>
                        <td>Kevin Shim</td>
                        <td className="text-right">5-19</td>
                        <td className="text-right">0-7</td>
                        <td className="text-right">4-6</td>
                        <td className="text-right">12</td>
                        <td className="text-right">1</td>
                        <td className="text-right">1</td>
                        <td className="text-right">1</td>
                        <td className="text-right">1</td>
                        <td className="text-right">14</td>
                        </tr>
                        <tr>
                        <th scope="row">36</th>
                        <td>Tony Kim</td>
                        <td className="text-right">4-17</td>
                        <td className="text-right">1-6</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">9</td>
                        <td className="text-right">1</td>
                        <td className="text-right">1</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">9</td>
                        </tr>
                        <tr>
                        <th scope="row">22</th>
                        <td>Andrew Shin</td>
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
                        <th scope="row">70</th>
                        <td>Juel Park</td>
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
                        <th scope="row">17</th>
                        <td>Mark Cho</td>
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
                        <tr className="border-top border-bottom">
                        <th scope="row"><span className="text-weight-bold">Team</span></th>
                        <td></td>
                        <td className="text-right font-weight-bolder">12-51</td>
                        <td className="text-right font-weight-bolder">1-16</td>
                        <td className="text-right font-weight-bolder">4-7</td>
                        <td className="text-right font-weight-bolder">35</td>
                        <td className="text-right font-weight-bolder">3</td>
                        <td className="text-right font-weight-bolder">4</td>
                        <td className="text-right font-weight-bolder">2</td>
                        <td className="text-right font-weight-bolder">8</td>
                        <td className="text-right font-weight-bolder">29</td>
                        </tr>
                        <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td className="text-right font-weight-bolder">23.5%</td>
                        <td className="text-right font-weight-bolder">6.3%</td>
                        <td className="text-right font-weight-bolder">57.1%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default game1;