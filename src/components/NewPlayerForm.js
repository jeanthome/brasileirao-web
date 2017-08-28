import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {fetchClubs} from '../actions/ClubActions';
import {connect} from 'react-redux';

class NewPlayerForm extends Component {

    constructor(props){
        super(props);
        this.renderClubList = this.renderClubList.bind(this);
    }

    componentWillMount() {
        this.props.fetchClubs();
    }

    render() {

        const {clubs} = this.props;
        if (!clubs){
            return (
                <div>
                    Carregando...
                </div>
            );
        }

        return (
            <div className="col-md-6 col-md-offset-3">
                <div className="form-area">
                    <form>
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
                            component={this.renderClubList}
                        />
                        <Field
                            name="biography"
                            component={this.renderFieldBiography}
                        />
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
        return(
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
        return(
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

    renderClubList(field) {
        return(
            <div className="form-group">
                <select className="form-control" {...field.input}>
                    <option value="" disabled defaultValue hidden>Clube atual</option>

                    {_.map(this.props.clubs, club =>
                        <option value={club.identificator} key={club.identificator}>{club.name}</option>
                    )}
                </select>
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