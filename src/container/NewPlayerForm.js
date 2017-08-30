import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {fetchClubs} from '../actions/ClubActions';
import {connect} from 'react-redux';
import SelectInput from '../components/SelectInput';

class NewPlayerForm extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        this.props.fetchClubs();
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {

        const {clubs} = this.props;

        /* Verifica se já foi dado fetch nos clubes antes de tentar renderizar o formulário */
        if (_.isEmpty(clubs)) {
            return (
                <div className="col-md-6 col-md-offset-3 text-center">
                    Carregando...
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
            <div className="col-md-6 col-md-offset-3">
                <div className="form-area">
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <Field
                            label="Nome"
                            name="firstName"
                            component={this.renderField}
                        />
                        <Field
                            label="Sobrenome"
                            name="lastName"
                            component={this.renderField}
                        />
                        <Field
                            label="Nome de exibição"
                            name="displayName"
                            component={this.renderField}
                        />
                        <Field
                            label="Data de nascimento"
                            name="birthDate"
                            component={this.renderField}
                        />
                        <Field
                            label="Altura"
                            name="height"
                            component={this.renderField}
                        />
                        <Field
                            label="Nacionalidade"
                            name="nationality"
                            component={this.renderField}
                        />
                        <Field
                            label="Número da camisa"
                            name="number"
                            component={this.renderField}
                        />
                        <Field
                            name="position"
                            component={this.renderFieldPosition}
                        />
                        <Field
                            name="actualClub"
                            component={SelectInput}
                            options={clubList}
                            placeholder="Clube atual"
                        />
                        <Field
                            name="biography"
                            component={this.renderFieldBiography}
                        />

                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </div>
        );
    }

    renderField(field) {
        return (
            <div className="form-group">
                <input
                    placeholder={field.label}
                    className="form-control"
                    type="text"
                    {...field.input}
                />
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

function mapStateToProps(state) {
    return {
        clubs: state.clubs
    };
}

export default reduxForm({
    form: 'NewPlayerForm',
    fields: []
})(
    connect(mapStateToProps, {fetchClubs})(NewPlayerForm)
);