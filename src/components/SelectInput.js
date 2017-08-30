import React, {Component} from 'react';
import Select from 'react-select';
//import 'react-select/dist/react-select.css';

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
        return (
            <div className="form-group">
                <Select
                    {...this.props}
                    value={this.props.input.value}
                    onBlur={() => this.props.input.onBlur(this.props.input.value)}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default SelectInput;