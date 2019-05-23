import React from "react";

function game2(props) {
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
                        <th scope="row">96</th>
                        <td>Adam Cho</td>
                        <td className="text-right">1-5</td>
                        <td className="text-right">1-2</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">2</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">2</td>
                        <td className="text-right">3</td>
                        </tr>
                        <tr>
                        <th scope="row">69</th>
                        <td>Benjamin Lee</td>
                        <td className="text-right">9-19</td>
                        <td className="text-right">4-8</td>
                        <td className="text-right">3-3</td>
                        <td className="text-right">8</td>
                        <td className="text-right">5</td>
                        <td className="text-right">3</td>
                        <td className="text-right">0</td>
                        <td className="text-right">5</td>
                        <td className="text-right">25</td>
                        </tr>
                        <tr>
                        <th scope="row">27</th>
                        <td>Brandon Oh</td>
                        <td className="text-right">0-5</td>
                        <td className="text-right">0-5</td>
                        <td className="text-right">0-3</td>
                        <td className="text-right">4</td>
                        <td className="text-right">1</td>
                        <td className="text-right">1</td>
                        <td className="text-right">0</td>
                        <td className="text-right">3</td>
                        <td className="text-right">0</td>
                        </tr>
                        <tr>
                        <th scope="row">23</th>
                        <td>Eric Kim</td>
                        <td className="text-right">0-3</td>
                        <td className="text-right">0-1</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">3</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">1</td>
                        <td className="text-right">0</td>
                        </tr>
                        <tr>
                        <th scope="row">5</th>
                        <td>Jacob Cho</td>
                        <td className="text-right">0-3</td>
                        <td className="text-right">0-1</td>
                        <td className="text-right">0-2</td>
                        <td className="text-right">16</td>
                        <td className="text-right">2</td>
                        <td className="text-right">3</td>
                        <td className="text-right">0</td>
                        <td className="text-right">4</td>
                        <td className="text-right">0</td>
                        </tr>
                        <tr>
                        <th scope="row">88</th>
                        <td>Steve Joo</td>
                        <td className="text-right">11-24</td>
                        <td className="text-right">2-11</td>
                        <td className="text-right">4-4</td>
                        <td className="text-right">5</td>
                        <td className="text-right">1</td>
                        <td className="text-right">2</td>
                        <td className="text-right">0</td>
                        <td className="text-right">1</td>
                        <td className="text-right">28</td>
                        </tr>
                        <tr>
                        <th scope="row">32</th>
                        <td>Joshua Chang</td>
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
                        <th scope="row">52</th>
                        <td>Moses Kim</td>
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
                        <td className="text-right font-weight-bolder">21-59</td>
                        <td className="text-right font-weight-bolder">7-28</td>
                        <td className="text-right font-weight-bolder">7-12</td>
                        <td className="text-right font-weight-bolder">38</td>
                        <td className="text-right font-weight-bolder">9</td>
                        <td className="text-right font-weight-bolder">9</td>
                        <td className="text-right font-weight-bolder">0</td>
                        <td className="text-right font-weight-bolder">16</td>
                        <td className="text-right font-weight-bolder">56</td>
                        </tr>
                        <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td className="text-right font-weight-bolder">35.6%</td>
                        <td className="text-right font-weight-bolder">25.0%</td>
                        <td className="text-right font-weight-bolder">58.3%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default game2;