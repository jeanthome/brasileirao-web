import React, {Component} from "react";
import _ from "lodash";

class ClubCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        /* Obtém o objeto com o link para o escudo do clube */
        const badge = _.find(this.props.club.links, {'rel': 'badge'});

        return (
            <div className="text-center">
                <div className="club-badge-wrapper">
                    <img className="club-badge-content" src={badge.href}/>
                </div>
                <div className="club-color-bg" style={{backgroundColor: this.props.club.color}}>
                    <div className="club-name-wrapper">
                        <h4>
                            {this.props.club.name}
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}
;

export default ClubCard;