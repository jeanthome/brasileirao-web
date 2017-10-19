import React, {Component} from "react";
import {connect} from "react-redux";
import {hideModal} from "../actions/ModalActions";
import {Button, Modal} from "react-bootstrap";

class NewGoalModal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal-container">
                <Modal {...this.props}
                       show={true}
                       dialogClassName="custom-modal"
                       onHide={this.props.hideModal}>

                    <Modal.Header closeButton>
                        <Modal.Title >Título {this.props.clubType}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Teste</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.hideModal}>Fechar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default connect(null, {hideModal})(NewGoalModal);
