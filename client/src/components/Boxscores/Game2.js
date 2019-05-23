import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Home from "./team2/game1";
import Away from "./team1/game1";

class Game2 extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            modal: false,
            isHomeOpen: true,
            isAwayOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    showHome = () => {
        this.setState({
            isHomeOpen: true,
            isAwayOpen: false
        })
    }

    showAway = () => {
        this.setState({
            isAwayOpen: true,
            isHomeOpen: false
        })
    }

    render() {
        return(
            <div>
                <Button color="link" size="sm" className="rounded-0" block outline onClick={this.toggle}>BOX SCORE</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog-centered modal-xl">
                <ModalBody className="bg-white rounded-xl" id="modal">
                <div>
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-md-5 text-center" onClick={this.showHome}>
                                <h4>Angry Birdz</h4>
                                <hr className={"bg-warning" + (this.state.isHomeOpen ? " active" : null)} />
                                <span className="small">HOME</span>
                            </div>
                            <div className="col-md-2 text-center mt-4">
                                <span className="text-secondary small">V</span>
                            </div>
                            <div className="col-md-5 text-center" onClick={this.showAway}>
                                <h4>The Chosen</h4>
                                <hr className={"bg-warning" + (this.state.isAwayOpen ? " active" : null)} />
                                <span className="small">AWAY</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h6>April 28, 2019</h6>
                            </div>
                        </div>
                        {this.state.isHomeOpen && <Home/>}
                        {this.state.isAwayOpen && <Away/>}
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

export default Game2;