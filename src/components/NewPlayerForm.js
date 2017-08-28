import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class NewPlayerForm extends Component {

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

    render() {
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
                            name="number"
                            component={this.renderFieldPosition}
                        />
                        <Field
                            name="number"
                            component={this.renderFieldBiography}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'NewPlayerForm',
    fields: []
})(NewPlayerForm);