import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import logo from "../assets/images/logo.png";


class Form extends React.Component {
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
                <Button className="btn btn-lg border px-5 bg-transparent" onClick={this.toggle} id="signup">SIGN UP NOW</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog-centered modal-lg">
                <ModalBody className="bg-white rounded-lg" id="modal">
                    <div className="row">
                    <div className="col-md-6">
                        <img className="rounded" src="https://render.fineartamerica.com/images/rendered/default/print/6.125/8.000/break/images/artworkimages/medium/1/michael-jordan-chicago-bulls-pixel-art-1-joe-hamilton.jpg" height="600" id="signpic" />
                    </div>
                    <div className="col-md-6" id="sign">
                        <div className="row mb-4">
                            <div className="col-md-12">
                                <h5 id="signlogo" ><img className="mb-1" src={logo} alt="logo" height="50" width="150" />B A S K E T B A L L</h5>
                                <div id="details">
                                    {`DATE: APRIL 7, 2019 - JUNE 9, 2019 (8 WEEKS)`}
                                    <br />
                                    {`REGISTRATION FEE: $2O (WITHOUT JERSEY) / $30 (WITH JERSEY)`}
                                </div>
                                
                            </div>
                        </div>
                        <form>
                            <div className="form-row mb-3">
                                <div className="form-group col-md-6">
                                <label>First Name </label>
                                    <input type="text" className="form-control rounded-0" placeholder="Michael" id="userInput"/>
                                </div>
                                <div className="form-group col-md-6">
                                <label>Last Name</label>
                                    <input type="text" className="form-control rounded-0" placeholder="Jordan" id="userInput"/>
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <div className="form-group col-md-6">
                                <label>Ministry </label>
                                    <input type="text" className="form-control rounded-0" placeholder="The Bridge" id="userInput"/>
                                </div>
                                <div className="form-group col-md-6">
                                <label>T-Shirt Size</label>
                                    <input type="text" className="form-control rounded-0" placeholder="Large" id="userInput"/>
                                </div>
                            </div>
                    
                            <div className="form-group mb-3">
                                <label>Do your have your jersey from a previous season? </label>
                                <div className="form-row ml-auto">
                                    <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="jerseyYes" name="jersey" class="custom-control-input" />
                                    <label class="custom-control-label" for="jerseyYes">Yes</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="jerseyNo" name="jersey" class="custom-control-input" />
                                    <label class="custom-control-label" for="jerseyNo">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label>If no, please choose your jersey number. </label>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <input type="text" className="form-control rounded-0" placeholder="23" id="userInput"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row text-right mt-5">                    
                                <div className="col-md-12 align-text-bottom mt-2">
                                    <button className="btn btn-warning mr-3" onClick={this.toggle} id="signbtn">SUBMIT</button>
                                    <button className="btn btn-secondary" onClick={this.toggle}>CANCEL</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <div className="col-md-3 align-text-bottom">
                        <img className="rounded" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-kobe-bryant-los-angeles-lakers-pixel-art-joe-hamilton.jpg" height="500" id="signpic2" />
                    </div> */}
                    </div>
                </ModalBody>
                {/* <ModalFooter className="border-0">
                    <button className="btn btn-warning" onClick={this.toggle}>SUBMIT</button>
                    <button className="btn btn-secondary" onClick={this.toggle}>CANCEL</button>
                </ModalFooter> */}
                </Modal>
            </div>
        );

    }
}

export default Form;