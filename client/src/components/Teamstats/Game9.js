import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

class Game9 extends React.Component {
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
                <Button color="link" size="sm" className="rounded-0" outline block onClick={this.toggle}>TEAM STATS</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog-centered modal-lg">
                <ModalBody className="bg-white rounded-lg" id="modal">
                <div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-5 text-center">
                        <h5>BH</h5>
                        <hr className="bg-secondary mx-3" />
                        <span className="small">HOME</span>
                    </div>
                    <div className="col-md-2 text-center mt-4">
                        <span className="text-secondary small">V</span>
                    </div>
                    <div className="col-md-5 text-center">
                        <h5>The Chosen</h5>
                        <hr className="bg-warning mx-3" />
                        <span className="small">AWAY</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h6>May 26, 2019</h6>
                    </div>
                </div>
                <div className="row mt-5 px-3">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                FIELD GOAL %
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6 text-left">
                                        BH
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill rounded-pill">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `64.8%` }}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        30.0%
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6 text-left">
                                        The Chosen
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill rounded-pill">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `100%`}}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        46.3%
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
                                    <div className="col-md-6 text-left">
                                        BH
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill rounded-pill">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `95.5%` }}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        31.8%
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        The Chosen
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill rounded-pill">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `100%`}}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        33.3%
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3 px-3">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                FREE THROW %
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        BH
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill rounded-pill">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `100%` }}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        87.5%
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        The Chosen
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill rounded-pill">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `34.7%`}}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        30.4%
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
                                        BH
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill rounded-pill">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `100%` }}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        7
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        The Chosen
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill rounded-pill">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `42.8%`}}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        3
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-3 px-3">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                REBOUNDS
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        BH
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill rounded-pill">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `100%` }}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        33
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        The Chosen
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill rounded-pill">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `90.9%`}}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        30
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
                                        BH
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill rounded-pill">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `100%` }}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        11
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        The Chosen
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill rounded-pill">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `63.6%`}}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        7
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row my-3 px-3">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-header mr-auto bg-white border-0 font-weight-bold">
                                STEALS
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        BH
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill rounded-pill">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `75%` }}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        6
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        The Chosen
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill rounded-pill">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `100%`}}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        8
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
                                        BH
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill rounded-pill">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width: `100%` }}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        2
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="d-flex justify-content-between align-items-center row">
                                    <div className="col-md-6">
                                        The Chosen
                                    </div>
                                    <div className="col-md-3 nopadding">
                                        <div className="progress flex-fill rounded-pill">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: `0%`}}></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        0
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
                <div className="container mx-3">
                    <div className="row">
                        <div className="col-md-12 text-right">
                            <button className="btn btn-sm" onClick={this.toggle}>CLOSE</button>
                        </div>
                    </div>
                </div>
                </ModalFooter>
                </Modal>
            </div>
        );

    }
}

export default Game9;