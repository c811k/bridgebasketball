import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

class Game1 extends React.Component {
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
                <Button color="link" size="sm" className="rounded-0" outline block onClick={this.toggle}>WATCH</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog-centered modal-lg">
                <ModalBody className="bg-white rounded-lg" id="modal">
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-md-5 text-center">
                                <h4>Double Up</h4>
                                <hr className="bg-white" />
                                <span className="small">HOME</span>
                            </div>
                            <div className="col-md-2 text-center mt-4">
                                <span className="text-secondary small">V</span>
                            </div>
                            <div className="col-md-5 text-center">
                                <h4>Fantastic</h4>
                                <hr className="bg-warning" />
                                <span className="small">AWAY</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h6>April 28, 2019</h6>
                            </div>
                        </div>
                        <div class="embed-responsive embed-responsive-16by9 mt-3">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/0H1nXdds-3k" allowFullScreen title="Game1"></iframe>
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

export default Game1;