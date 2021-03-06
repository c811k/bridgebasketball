import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

class Game7 extends React.Component {
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
                <Button color="link" size="sm" className="rounded-0" outline onClick={this.toggle} block>WATCH</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog-centered modal-lg">
                <ModalBody className="bg-white rounded-lg" id="modal">
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-md-5 text-center">
                                <h5>Double Up</h5>
                                <hr className="bg-white" />
                                <span className="small">HOME</span>
                            </div>
                            <div className="col-md-2 text-center mt-4">
                                <span className="text-secondary small">V</span>
                            </div>
                            <div className="col-md-5 text-center">
                                <h5>Angry Birdz</h5>
                                <hr className="bg-warning" />
                                <span className="small">AWAY</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h6>May 26, 2019</h6>
                            </div>
                        </div>
                        <div class="embed-responsive embed-responsive-16by9 mt-3">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-dZ7TT5nH-g" allowFullScreen title="Game7"></iframe>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className="border-0">
                    <div className="container">
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

export default Game7;