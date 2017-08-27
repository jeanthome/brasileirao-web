import React, {Component} from 'react';

class ClubPage extends Component {

    render() {
        const {name} = this.props.match.params;
        return (
            <div>
                <h3>Página do {name}</h3>
            </div>
        );
    }
}

export default ClubPage;