import React, {Component} from "react";
import {connect} from "react-redux";
import {hideModal} from "../actions/ModalActions";
import {Button, Col, Modal, Row, FormGroup, Radio} from "react-bootstrap";
import SelectInput from "../components/SelectInput";
import {Field, reduxForm} from "redux-form";
import {isInt} from "../utils/ValidationHelper";

class NewGoalModal extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {

    }

    render() {

        const {handleSubmit} = this.props;

        console.log("Modal render", this.props);

        return (
            <div className="modal-container">
                <Modal {...this.props}
                       show={true}
                       dialogClassName="custom-modal"
                       onHide={this.props.hideModal}>

                    <Modal.Header closeButton>
                        <Modal.Title >Inserir gol</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-area">
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                <Row>
                                    <Col md={12}>
                                        <Field
                                            name="owner"
                                            component={SelectInput}
                                            options={this.props.players}
                                            placeholder="Autor do gol"
                                            errorMessage="Atributo 'Autor do gol' não pode ficar vazio."
                                        />
                                    </Col>
                                </Row>
                                <Row className="">
                                    <Col md={12}>
                                        <Col md={7} className="modal-goal-item no-padding">
                                            <Col md={6} className="modal-goal-item no-left-padding">
                                                <Field
                                                    name="goalType"
                                                    component={SelectInput}
                                                    options={this.props.goalType}
                                                    placeholder="Tipo de gol"
                                                />
                                            </Col>
                                            <Col md={6} className="modal-goal-item">
                                                <Field
                                                    placeholder="Minuto"
                                                    name="goalMinute"
                                                    component={this.renderField}
                                                />
                                            </Col>

                                        </Col>
                                        <Col md={5} className="no-padding modal-goal-item">
                                            <Field
                                                name="goalHalf"
                                                component={this.renderRadioButtons}
                                            />
                                        </Col>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Field
                                            placeholder="Título do lance"
                                            name="title"
                                            component={this.renderField}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Field
                                            name="description"
                                            component={this.renderGoalDescriptionField}
                                        />
                                    </Col>
                                </Row>
                            </form>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.hideModal}>Fechar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
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
                    <Radio name="goal-half" inline value="0">
                        1° tempo
                    </Radio>
                </Col>
                <Col md={6} className="form-group">
                    <Radio name="goal-half" inline value="1">
                        2° tempo
                    </Radio>
                </Col>
            </FormGroup>
        )
    }

    renderGoalDescriptionField(field) {
        return (
            <div className="form-group">
              <textarea
                  className="form-control"
                  placeholder="Descrição do lance"
                  maxLength="500"
                  rows="4"
                  {...field.input}>
              </textarea>
            </div>
        );
    }
}

function validate(values) {

    console.log("Validate", values);
    const errors = {};

    if (!values.goalMinute) {
        errors.goalMinute = true;
    }

    if (!values.title) {
        errors.title = true;
    }

    if (!values.goalMinute) {
        errors.goalMinute = true;
    } else if (!isInt(values.goalMinute)) {
        errors.goalMinute = true;
    }

    return errors;
}

function mapStateToProps(state) {

    return {
        goalType: state.matches.goalType
    };
}

export default reduxForm({
    validate,
    form: 'newGoalModal',
    fields: []
})(
    connect(mapStateToProps, {hideModal})(NewGoalModal)
);
