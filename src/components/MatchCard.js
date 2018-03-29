import React, {Component} from "react";
import {createPost, fetchPosts} from "../actions";
import {ROOT_URL} from "../utils/Constants";
import {LinkContainer} from "react-router-bootstrap";
import {Panel} from 'react-bootstrap';

class MatchCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {match} = this.props;
        const {homeClub, visitorClub} = match;

        const homeClubGoals = match.finished ? match.homeClubGoals : "";
        const visitorClubGoals = match.finished ? match.visitorClubGoals : "";

        const panelHeader = (
            <div className="match-card-header">
                <div className="match-card-header-content">
                    {`${match.kickOff} ${match.hour} - ${match.stadiumName}`}
                </div>
            </div>
        );

        return (

            <Panel header={panelHeader}>
                <LinkContainer className="match-card-body" to={`/jogos/${match.identifier}`}>
                    <div className="match-card-body">
                        <div className="match-card-club-item">
                            <div
                                className="match-card-club-abbreviation match-card-club-abbreviation-home">
                                {homeClub.abbreviation}
                            </div>
                            <div className="match-card-club-badge">
                                <img src={`${ROOT_URL}/clubs/${homeClub.identifier}/badge`}/>
                            </div>
                        </div>

                        <div className="match-card-score">
                            <span className="match-card-score-value">
                                {homeClubGoals}
                            </span>

                            <span className="match-card-score-separator">
                                X
                            </span>

                            <span className="match-card-score-value">
                                {visitorClubGoals}
                            </span>
                        </div>

                        <div className="match-card-club-item">
                            <div className="match-card-club-badge">
                                <img
                                    src={`${ROOT_URL}/clubs/${visitorClub.identifier}/badge`}/>
                            </div>
                            <div
                                className="match-card-club-abbreviation match-card-club-abbreviation-visitor">
                                {visitorClub.abbreviation}
                            </div>
                        </div>
                    </div>
                </LinkContainer>
            </Panel>
        );
    }
}

export default MatchCard;

