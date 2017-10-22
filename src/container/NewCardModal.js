import React, {Component} from 'react';
import {connect} from "react-redux";
import {hideModal} from "../actions/ModalActions";
import {fetchMatch} from "../actions/MatchActions";
import {Button, Col, FormGroup, Modal, Radio, Row} from "react-bootstrap";
import SelectInput from "../components/SelectInput";
import {Field, reduxForm} from "redux-form";
import {isInt} from "../utils/ValidationHelper";
import {CardColors} from '../utils/Constants';

class NewCardModal extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {

        /*Adiciona as informações que não vêm do formulário do Modal.*/
        values["clubType"] = this.props.clubType;
        values["matchId"] = this.props.matchId;
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
                            <Modal.Title>Inserir cartão</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="form-area">
                                <Row>
                                    <Col md={12}>
                                        <Field
                                            name="cardOwner"
                                            component={SelectInput}
                                            options={this.props.players}
                                            placeholder="Jogador que recebeu o cartão"
                                            errorMessage="Este atributo não pode ficar vazio."
                                        />
                                    </Col>
                                </Row>

                                <Row className="">
                                    <Col md={12}>
                                        <Col md={7} className="modal-goal-item no-padding">
                                            <Col md={7} className="modal-goal-item no-left-padding">
                                                <Field
                                                    name="cardColor"
                                                    component={SelectInput}
                                                    options={this.getCardTypesForSelectInput()}
                                                    placeholder="Cor do cartão"
                                                />
                                            </Col>
                                            <Col md={5} className="modal-goal-item">
                                                <Field
                                                    placeholder="Minuto"
                                                    name="minute"
                                                    component={this.renderField}
                                                />
                                            </Col>
                                        </Col>
                                        <Col md={5} className="no-padding modal-goal-item">
                                            <Field
                                                name="half"
                                                component={this.renderRadioButtons}
                                            />
                                        </Col>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Field
                                            name="description"
                                            component={this.renderCardReasonField}
                                        />
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
        )
    }

    getCardTypesForSelectInput() {
        const options = [CardColors.YELLOW, CardColors.RED];
        return options;
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
                    <Radio checked name="goal-half" inline value="FIRST_HALF">
                        1° tempo
                    </Radio>
                </Col>
                <Col md={6} className="form-group">
                    <Radio name="goal-half" inline value="SECOND_HALF">
                        2° tempo
                    </Radio>
                </Col>
            </FormGroup>
        )
    }

    renderCardReasonField(field) {
        return (
            <div className="form-group">
              <textarea
                  className="form-control"
                  placeholder="Motivo do recebimento do cartão"
                  maxLength="350"
                  rows="4"
                  {...field.input}>
              </textarea>
            </div>
        );
    }
}

function validate(values) {

    console.log(values);

    const errors = {};

    if (!values.minute || !isInt(values.minute)) {
        errors.minute = true;
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'newCardModal'
})(
    connect(null, {hideModal, fetchMatch})(NewCardModal)
);
