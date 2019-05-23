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
                        <tr className="small">
                        <th scope="row">91</th>
                        <td>Andrew Kim</td>
                        <td className="text-right">7-16</td>
                        <td className="text-right">2-7</td>
                        <td className="text-right">2-3</td>
                        <td className="text-right">7</td>
                        <td className="text-right">1</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">2</td>
                        <td className="text-right">18</td>
                        </tr>
                        <tr className="small">
                        <th scope="row">50</th>
                        <td>Bryan Park</td>
                        <td className="text-right">0-9</td>
                        <td className="text-right">0-1</td>
                        <td className="text-right">0-2</td>
                        <td className="text-right">4</td>
                        <td className="text-right">2</td>
                        <td className="text-right">1</td>
                        <td className="text-right">0</td>
                        <td className="text-right">1</td>
                        <td className="text-right">0</td>
                        </tr>
                        <tr className="small">
                        <th scope="row">14</th>
                        <td>David Cho</td>
                        <td className="text-right">5-10</td>
                        <td className="text-right">2-4</td>
                        <td className="text-right">0-2</td>
                        <td className="text-right">12</td>
                        <td className="text-right">2</td>
                        <td className="text-right">2</td>
                        <td className="text-right">0</td>
                        <td className="text-right">4</td>
                        <td className="text-right">12</td>
                        </tr>
                        <tr className="small">
                        <th scope="row">66</th>
                        <td>David Lee</td>
                        <td className="text-right">1-9</td>
                        <td className="text-right">1-3</td>
                        <td className="text-right">3-5</td>
                        <td className="text-right">9</td>
                        <td className="text-right">6</td>
                        <td className="text-right">3</td>
                        <td className="text-right">0</td>
                        <td className="text-right">2</td>
                        <td className="text-right">6</td>
                        </tr>
                        <tr className="small">
                        <th scope="row">18</th>
                        <td>Johnathan Lee</td>
                        <td className="text-right">0-8</td>
                        <td className="text-right">0-6</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">4</td>
                        <td className="text-right">0</td>
                        <td className="text-right">1</td>
                        <td className="text-right">0</td>
                        <td className="text-right">1</td>
                        <td className="text-right">0</td>
                        </tr>
                        <tr className="small">
                        <th scope="row">73</th>
                        <td>Yunjae Chung</td>
                        <td className="text-right">0-6</td>
                        <td className="text-right">0-2</td>
                        <td className="text-right">0-2</td>
                        <td className="text-right">2</td>
                        <td className="text-right">0</td>
                        <td className="text-right">6</td>
                        <td className="text-right">0</td>
                        <td className="text-right">1</td>
                        <td className="text-right">0</td>
                        </tr>
                        <tr className="small">
                        <th scope="row">0</th>
                        <td>Daniel Kim</td>
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
                        <tr className="small">
                        <th scope="row">19</th>
                        <td>Richard Song</td>
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
                        <td className="text-right font-weight-bolder">13-58</td>
                        <td className="text-right font-weight-bolder">5-23</td>
                        <td className="text-right font-weight-bolder">5-14</td>
                        <td className="text-right font-weight-bolder">38</td>
                        <td className="text-right font-weight-bolder">11</td>
                        <td className="text-right font-weight-bolder">13</td>
                        <td className="text-right font-weight-bolder">0</td>
                        <td className="text-right font-weight-bolder">11</td>
                        <td className="text-right font-weight-bolder">36</td>
                        </tr>
                        <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td className="text-right font-weight-bolder">22.4%</td>
                        <td className="text-right font-weight-bolder">21.7%</td>
                        <td className="text-right font-weight-bolder">35.7%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default game1;