import React, {Component} from "react";

class ClubCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="text-center">
                <div className="club-badge-wrapper">
                    <img className="club-badge-content" src={this.props.club.links[1].href}/>
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
};

export default ClubCard;