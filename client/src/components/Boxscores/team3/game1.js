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
                        <th scope="row">13</th>
                        <td>Daniel Park</td>
                        <td className="text-right">7-10</td>
                        <td className="text-right">7-9</td>
                        <td className="text-right">1-2</td>
                        <td className="text-right">1</td>
                        <td className="text-right">2</td>
                        <td className="text-right">2</td>
                        <td className="text-right">0</td>
                        <td className="text-right">3</td>
                        <td className="text-right">22</td>
                        </tr>
                        <tr className="small">
                        <th scope="row">77</th>
                        <td>Isak Shin</td>
                        <td className="text-right">3-4</td>
                        <td className="text-right">3-3</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">10</td>
                        <td className="text-right">8</td>
                        <td className="text-right">2</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">9</td>
                        </tr>
                        <tr className="small">
                        <th scope="row">4</th>
                        <td>Jain Choe</td>
                        <td className="text-right">0-3</td>
                        <td className="text-right">0-1</td>
                        <td className="text-right">1-2</td>
                        <td className="text-right">8</td>
                        <td className="text-right">2</td>
                        <td className="text-right">3</td>
                        <td className="text-right">0</td>
                        <td className="text-right">1</td>
                        <td className="text-right">1</td>
                        </tr>
                        <tr className="small">
                        <th scope="row">30</th>
                        <td>Justin Hwang</td>
                        <td className="text-right">3-11</td>
                        <td className="text-right">3-9</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">3</td>
                        <td className="text-right">1</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">2</td>
                        <td className="text-right">9</td>
                        </tr>
                        <tr className="small"> 
                        <th scope="row">12</th>
                        <td>Steve Kang</td>
                        <td className="text-right">4-12</td>
                        <td className="text-right">1-7</td>
                        <td className="text-right">0-0</td>
                        <td className="text-right">2</td>
                        <td className="text-right">0</td>
                        <td className="text-right">1</td>
                        <td className="text-right">0</td>
                        <td className="text-right">1</td>
                        <td className="text-right">9</td>
                        </tr>
                        <tr className="small">
                        <th scope="row">99</th>
                        <td>Sung Jung</td>
                        <td className="text-right">2-10</td>
                        <td className="text-right">2-8</td>
                        <td className="text-right">1-2</td>
                        <td className="text-right">9</td>
                        <td className="text-right">2</td>
                        <td className="text-right">0</td>
                        <td className="text-right">0</td>
                        <td className="text-right">2</td>
                        <td className="text-right">7</td>
                        </tr>
                        <tr className="small">
                        <th scope="row">40</th>
                        <td>Daniel Lee</td>
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
                        <th scope="row">71</th>
                        <td>Edward Shin</td>
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
                        <td className="text-right font-weight-bolder">19-50</td>
                        <td className="text-right font-weight-bolder">16-37</td>
                        <td className="text-right font-weight-bolder">3-6</td>
                        <td className="text-right font-weight-bolder">33</td>
                        <td className="text-right font-weight-bolder">15</td>
                        <td className="text-right font-weight-bolder">8</td>
                        <td className="text-right font-weight-bolder">0</td>
                        <td className="text-right font-weight-bolder">9</td>
                        <td className="text-right font-weight-bolder">57</td>
                        </tr>
                        <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td className="text-right font-weight-bolder">38.0%</td>
                        <td className="text-right font-weight-bolder">43.2%</td>
                        <td className="text-right font-weight-bolder">50.0%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default game1;