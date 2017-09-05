import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {fetchClubs} from "../actions/ClubActions";
import {insertPlayer} from "../actions/PlayerActions";
import {connect} from "react-redux";
import SelectInput from "../components/SelectInput";
import {isInt} from "../utils/ValidationHelper";
import {Col, Row, PageHeader} from "react-bootstrap";

class NewPlayerForm extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        this.props.fetchClubs();
    }

    onSubmit(values) {

        this.props.insertPlayer(values, () => {
            console.log("Player inserido!");
            this.props.history.push("/");
        });
    }

    render() {

        const {clubs} = this.props;

        /* Verifica se já foi dado fetch nos clubes antes de tentar renderizar o formulário */
        if (_.isEmpty(clubs)) {
            return (
                <div className="col-md-6 col-md-offset-3 text-center">
                    <h4>Carregando...</h4>
                </div>
            );
        }

        /* Cria um array de objetos com atributos 'value' e 'label' para popular o componente
         'SelectInput' */
        const clubList = _.map(this.props.clubs, club => {
            return {
                value: club.identificator,
                label: club.name
            }
        })

        const {handleSubmit} = this.props;

        return (

            <div className="form-margin-to-navbar">
                <Row>
                    <Col md={8} mdOffset={2}>
                        <PageHeader>
                            Cadastro de jogador
                        </PageHeader>
                    </Col>
                    <Col md={8} mdOffset={2}>
                        <div className="form-area">
                            <form onSubmit={handleSubmit(this.onSubmit)}>

                                <Field
                                    placeholder="Nome"
                                    name="firstName"
                                    component={this.renderField}
                                />
                                <Field
                                    placeholder="Sobrenome"
                                    name="lastName"
                                    component={this.renderField}
                                />
                                <Field
                                    placeholder="Nome de exibição"
                                    name="displayName"
                                    component={this.renderField}
                                />
                                <Field
                                    placeholder="Data de nascimento"
                                    name="birthDate"
                                    component={this.renderField}
                                />
                                <Field
                                    placeholder="Altura"
                                    name="height"
                                    component={this.renderField}
                                />
                                <Field
                                    placeholder="Nacionalidade"
                                    name="nationality"
                                    component={this.renderField}
                                />
                                <Field
                                    placeholder="Número da camisa"
                                    name="number"
                                    component={this.renderField}
                                />
                                <Field
                                    placeholder="Nome do arquivo de imagem"
                                    name="photo"
                                    component={this.renderField}
                                />
                                <Field
                                    name="positionEnum"
                                    component={this.renderFieldPosition}
                                />
                                <Field
                                    name="actualClubId"
                                    component={SelectInput}
                                    options={clubList}
                                    placeholder="Clube atual"
                                    errorMessage="Atributo 'Clube atual' não pode ficar vazio."
                                />
                                <Field
                                    name="biography"
                                    component={this.renderFieldBiography}
                                />

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Salvar</button>
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

    renderFieldPosition(field) {
        return (
            <div className="form-group">
                <select className="form-control" {...field.input}>
                    <option value="" disabled defaultValue hidden>Posição</option>
                    <option value="GOALKEEPER">Goleiro</option>
                    <option value="LEFT_DEFENDER">Zagueiro Esquerdo</option>
                    <option value="RIGHT_DEFENDER">Zagueiro Direito</option>
                    <option value="LEFT_BACK">Lateral Esquerdo</option>
                    <option value="RIGHT_BACK">Lateral Direito</option>
                    <option value="DEFENSIVE_MIDFIELDER">Volante</option>
                    <option value="MIDFIELDER">Meia Central</option>
                    <option value="STRIKER">Atacante</option>
                </select>
            </div>
        );
    }

    renderFieldBiography(field) {
        return (
            <div className="form-group">
              <textarea
                  className="form-control"
                  placeholder="Biografia"
                  maxLength="100000"
                  rows="10"
                  {...field.input}>
              </textarea>
            </div>
        );
    }
}
function validate(values) {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = "Atributo 'Nome' não pode ficar vazio.";
    }

    if (!values.lastName) {
        errors.lastName = "Atributo 'Sobrenome' não pode ficar vazio.";
    }

    if (!values.displayName) {
        errors.displayName = "Atributo 'Nome de exibição não pode ficar vazio.";
    }

    if (!values.birthDate) {
        errors.birthDate = "Atributo 'Data de nascimento' não podeficar vazio."
    }

    if (!values.number) {
        errors.number = "Atributo 'Número da camisa' não pode ficar vazio."
    } else if (!isInt(values.number)) {
        errors.number = `'${values.number}' não é um número de camisa válido.`
    }

    return errors;
}

function mapStateToProps(state) {
    return {
        clubs: state.clubs
    };
}

export default reduxForm({
    validate,
    form: 'NewPlayerForm',
    fields: []
})(
    connect(mapStateToProps, {fetchClubs, insertPlayer})(NewPlayerForm)
);