import React, {Component} from 'react';
import {connect} from "react-redux";
import {hideModal} from "../actions/ModalActions";
import {fetchMatch, insertSubstitution} from "../actions/MatchActions";
import SelectInput from "../components/SelectInput";
import {Field, reduxForm} from "redux-form";
import {Button, Col, FormGroup, Modal, Radio, Row} from "react-bootstrap";
import {HalfEnum} from '../utils/Constants';
import {isInt} from "../utils/ValidationHelper";

class NewSubstitutionModal extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(values) {

        values["clubType"] = this.props.clubType;
        values["matchId"] = this.props.matchId;
        values.half = values.half ? values.half : HalfEnum.FIRST_HALF;
        this.props.insertSubstitution(values, () => {
            this.props.fetchMatch(this.props.matchId);
            this.props.hideModal();
        });
    }

    render() {

        const {handleSubmit} = this.props;

        return (

            <div className="modal-container">

                <Modal {...this.props}
                       show={true}
                       dialogClassName="custom-modal"
                       onHide={this.props.hideModal}>

                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Inserir substituição</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="form-area">
                                <Row>
                                    <Col md={12}>
                                        <Col md={6} className="no-left-padding">
                                            <Field
                                                name="playerWhoLeaves"
                                                component={SelectInput}
                                                options={this.props.playersWhoCanLeave}
                                                placeholder="Selecione o jogador que sairá."
                                                errorMessage="Este atributo não pode ficar vazio."
                                            />
                                        </Col>
                                        <Col md={6} className="no-right-padding">
                                            <Field
                                                name="playerWhoEnters"
                                                component={SelectInput}
                                                options={this.props.playersWhoCanEnter}
                                                placeholder="Selecione o jogador que entrará."
                                                errorMessage="Este atributo não pode ficar vazio."
                                            />
                                        </Col>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={12}>

                                        <Col md={7} className="modal-goal-item no-padding">
                                            <Col md={3} className="modal-goal-item no-left-padding">
                                                <Field
                                                    placeholder="Minuto"
                                                    name="minute"
                                                    component={this.renderField}
                                                />
                                            </Col>

                                            <Col md={7} className="no-padding modal-goal-item">
                                                <Field
                                                    name="half"
                                                    component={this.renderRadioButtons}
                                                />
                                            </Col>
                                        </Col>

                                    </Col>
                                </Row>

                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.props.hideModal}>Cancelar</Button>
                            <Button bsStyle="primary" type="submit">Salvar</Button>
                        </Modal.Footer>
                    </form>
                </Modal>

            </div>

        );
    }

    renderField(field) {

        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-error' : ''}`;

        return (

            <div className={className}>
                <input
                    placeholder={field.placeholder}
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }

    renderRadioButtons(field) {
        return (
            <FormGroup {...field.input}>
                <Col md={6} className="form-group">
                    <Radio defaultChecked name="goal-half" inline value={HalfEnum.FIRST_HALF}>
                        1° tempo
                    </Radio>
                </Col>
                <Col md={6} className="form-group">
                    <Radio name="goal-half" inline value={HalfEnum.SECOND_HALF}>
                        2° tempo
                    </Radio>
                </Col>
            </FormGroup>
        )
    }
}

function validate(values) {

    const errors = {};

    if (!values.minute || !isInt(values.minute)) {
        errors.minute = true;
    }

    if (!values.playerWhoLeaves) {
        errors.playerWhoLeaves = true;
    }

    if (!values.playerWhoEnters) {
        errors.playerWhoEnters = true;
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'newSubstitutionModal'
})(
    connect(null, {hideModal, fetchMatch, insertSubstitution})(NewSubstitutionModal)
);
