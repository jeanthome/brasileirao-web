import React, {Component} from "react";
import {createPost, fetchPosts} from "../actions";
import {ROOT_URL} from "../utils/Constants";
import {LinkContainer} from "react-router-bootstrap";

class MatchCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {match} = this.props;
        const {homeClub, visitorClub} = match;
        return (

            <div className="match-card-wrapper" key={match.identifier}>

                <div className="match-card">
                    <div className="match-card-header">
                        <div className="match-card-header-content">
                            {`${match.kickOff} ${match.hour} - ${match.stadiumName}`}
                        </div>
                    </div>
                    <LinkContainer className="match-card-body" to={`/jogos/${match.identifier}`}>
                        <div className="match-card-body">
                            <div className="match-card-club-item">
                                <div
                                    className="match-card-club-abbreviation match-card-club-abbreviation-home">
                                    {homeClub.abbreviation}
                                </div>
                                <div className="match-card-club-badge">
                                    <img src={`${ROOT_URL}/clubs/${homeClub.identificator}/badge`}/>
                                </div>
                            </div>
                            <div className="match-card-score">
                                <h5>X</h5>
                            </div>
                            <div className="match-card-club-item">
                                <div className="match-card-club-badge">
                                    <img
                                        src={`${ROOT_URL}/clubs/${visitorClub.identificator}/badge`}/>
                                </div>
                                <div
                                    className="match-card-club-abbreviation match-card-club-abbreviation-visitor">
                                    {visitorClub.abbreviation}
                                </div>
                            </div>
                        </div>
                    </LinkContainer>
                </div>
            </div>

        );
    }
}

export default MatchCard;

