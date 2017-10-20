import React, {Component} from "react";
import Select from "react-select";

/**
 * Componente para integrar react-select e redux-form.
 * Representa um input do tipo select, cujas opções são recebidas via props.
 */
class SelectInput extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {

        if (this.props.input.onChange && event != null) {
            this.props.input.onChange(event.value);
        } else {
            this.props.input.onChange(null);
        }
    }

    render() {

        const {meta: {touched}, errorMessage} = this.props;
        const hasError = (!this.props.input.value && touched);
        const className = `form-group ${hasError ? 'has-error' : ''}`;
        const selectClassName = `${hasError ? 'react-select-wrapper' : ''}`;

        var helpBlock = null;

        if (errorMessage) {
            helpBlock = (
                <div className="help-block">
                    {hasError ? errorMessage : ''}
                </div>
            )
        }

        const panelTitle = (
            <h3 className="text-center">Ficha de Jogo</h3>
        );

        return (
            <div className={className}>
                <div className={selectClassName}>
                    <Select
                        {...this.props}
                        value={this.props.input.value}
                        onBlur={() => this.props.input.onBlur(this.props.input.value)}
                        onChange={this.onChange}
                    />
                </div>
                {helpBlock}
            </div>
        );
    }
}

export default SelectInput;