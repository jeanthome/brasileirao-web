import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import SelectInput from "../components/SelectInput";
import {fetchStadiums, insertMatch} from "../actions/NewMatchActions";
import {fetchClubs} from "../actions/ClubActions";
import {Col, Row, PageHeader} from "react-bootstrap";
import {isInt, isValidRoundNumber} from "../utils/ValidationHelper";
import {stringToDate} from '../utils/ConvertHelper';


class NewMatchForm extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        this.props.fetchStadiums();
        this.props.fetchClubs();
    }

    onSubmit(values) {
        console.log(values);
        this.props.insertMatch(values, () => {
            console.log("Partida inserida!");
            this.props.history.push("/");
        });
    }

    render() {

        const {stadiums} = this.props.newMatch;
        const {clubs} = this.props;

        /* Verifica se já foi dado fetch nos estádios antes de tentar renderizar o formulário */
        if (_.isEmpty(stadiums) || _.isEmpty(clubs)) {
            return (
                <div className="col-md-6 col-md-offset-3 text-center">
                    <h4>Carregando...</h4>
                </div>
            );
        }

        const {handleSubmit} = this.props;

        /* Cria um array de objetos com atributos 'value' e 'label' para popular o componente
         'SelectInput' */
        const clubList = _.map(this.props.clubs, club => {
            return {
                value: club.identificator,
                label: club.name
            }
        })

        return (
            <div className="form-margin-to-navbar">
                <Row>
                    <Col md={8} mdOffset={2}>
                        <PageHeader>
                            Cadastro de partida
                        </PageHeader>
                    </Col>
                    <Col md={8} mdOffset={2}>
                        <div className="form-area">
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                <Row>
                                    <Col md={2}>
                                        <Field
                                            name="roundNumber"
                                            placeholder="Rodada"
                                            component={this.renderField}
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Field
                                            placeholder="Data da partida"
                                            name="kickOff"
                                            component={this.renderField}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Field
                                            name="stadiumEnum"
                                            component={SelectInput}
                                            options={stadiums}
                                            placeholder="Estádio"
                                            errorMessage="Atributo 'Estádio' não pode ficar vazio"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Field
                                            name="homeClubId"
                                            component={SelectInput}
                                            options={clubList}
                                            placeholder="Clube mandante"
                                            errorMessage="Atributo 'Clube mandante' não pode ficar vazio."
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Field
                                            name="visitorClubId"
                                            component={SelectInput}
                                            options={clubList}
                                            placeholder="Clube visitante"
                                            errorMessage="Atributo 'Clube visitante' não pode ficar vazio."
                                        />
                                    </Col>
                                </Row>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Salvar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
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
                <div className="help-block">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    var roundNumber = values.roundNumber;
    if (!roundNumber || !isValidRoundNumber(roundNumber)) {
        errors.roundNumber = "Rodada inválida.";
    }

    if (!values.kickOff) {
        errors.kickOff = "Data inválida.";
    }

    return errors;
}

function mapStateToProps(state) {
    return {
        newMatch: state.newMatch,
        clubs: state.clubs
    }
}

export default reduxForm({
    validate,
    form: 'NewMatch'
})(
    connect(mapStateToProps, {fetchStadiums, fetchClubs, insertMatch})(NewMatchForm)
);
