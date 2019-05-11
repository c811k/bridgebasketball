import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

class Game4 extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return(
            <div>
                <Button className="btn btn-sm shadow-sm" onClick={this.toggle} id="btn">TEAM STATS</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog-centered modal-lg">
                <ModalBody className="bg-white rounded-lg" id="modal">
                <div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-5 text-center">
                        <h4>Fantastic</h4>
                        <hr className="bg-warning" />
                        <span className="small">HOME</span>
                    </div>
                    <div className="col-md-2 text-center">
                        <span className="text-secondary small">v</span>
                    </div>
                    <div className="col-md-5 text-center">
                        <h4>Angry Birdz</h4>
                        <hr className="bg-white" />
                        <span className="small">AWAY</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                    <h6>May 5, 2019</h6>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                FIELD GOAL %
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        Fantastic
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `28.6%` }}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                    28.6%
                                    </div>
                                   
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        Angry Birdz
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `23.3%`}}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        23.3%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                3 POINT %
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        Fantastic
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `12.5%` }}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        12.5%
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        Angry Birdz
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `13.8%`}}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        13.8%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                FREE THROW %
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        Fantastic
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `63.6%` }}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        63.6%
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        Angry Birdz
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `55.6%`}}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        55.6%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                3 POINTS
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        Fantastic
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `1%` }}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        1
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        Angry Birdz
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `4%`}}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        4
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                REBOUNDS
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        Fantastic
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `28%` }}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        28
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        Angry Birdz
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `25%`}}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        25
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                ASSISTS
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        Fantastic
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `7%` }}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        7
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        Angry Birdz
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `5%`}}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        5
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row my-3">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                STEALS
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        Fantastic
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `4%` }}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        4
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                    Angry Birdz
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `9%`}}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        9
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                BLOCKS
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        Fantastic
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `2%` }}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        2
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        Angry Birdz
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `2%`}}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                </ModalBody>
                <ModalFooter className="border-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-right">
                            <button className="btn btn-secondary" onClick={this.toggle}>CLOSE</button>
                        </div>
                    </div>
                </div>
                </ModalFooter>
                </Modal>
            </div>
        );

    }
}

export default Game4;