import React, {Component} from "react";
import MatchDetailsScore from "../components/MatchDetailsScore";
import MatchDetailsContent from "../components/MatchDetailsContent";
import PropTypes from 'prop-types';
import {PlayerStatus} from '../utils/Constants';

import {fetchMatch, fetchGoalType} from "../actions/MatchActions";

import {connect} from "react-redux";

class MatchDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playersStatus: {},
            settedPlayersStatus: false
        };

        this.setPlayersStatus = this.setPlayersStatus.bind(this);
        this.setStatusFromPlayersList = this.setStatusFromPlayersList.bind(this);
    }

    componentDidMount() {

        const {id} = this.props.match.params;
        /*Busca os detalhes da partida.*/
        this.props.fetchMatch(id);
        this.props.fetchGoalType();

    }

    componentDidUpdate() {

        const {matchToDetail} = this.props;

        if (matchToDetail) {
            this.setPlayersStatus();
        }
    }

    render() {

        const {matchToDetail} = this.props;

        if (!matchToDetail) {
            return (
                <div className="margin-to-navbar text-center">
                    <h3>Carregando...</h3>
                </div>
            )
        }

        return (
            <div className="margin-to-navbar">
                <MatchDetailsScore match={matchToDetail}/>
                <hr className="match-details-hr"/>
                <MatchDetailsContent match={matchToDetail}/>

            </div>
        )
    }

    /**
     * Define os status dos jogadores relacionados.
     * TODO: Pegar as substituições e alterar o status dos jogadores relacionados.
     */
    setPlayersStatus() {

        if (!this.state.settedPlayersStatus) {

            let {
                homeClubStartingPlayers, visitorClubStartingPlayers, homeClubSubstitutePlayers,
                visitorClubSubstitutePlayers
            } = this.props.matchToDetail;

            this.setStatusFromPlayersList(homeClubStartingPlayers, PlayerStatus.IN_GAME);
            this.setStatusFromPlayersList(visitorClubStartingPlayers, PlayerStatus.IN_GAME);
            this.setStatusFromPlayersList(homeClubSubstitutePlayers, PlayerStatus.AVAILABLE);
            this.setStatusFromPlayersList(visitorClubSubstitutePlayers, PlayerStatus.AVAILABLE);

            this.setState({settedPlayersStatus: true})
        }
    }

    setStatusFromPlayersList(playerList, status) {

        let playersStatus = this.state.playersStatus;
        for (let player of playerList) {
            playersStatus[player.id] = status;
        }
        this.setState({
            playersStatus: playersStatus
        })
    }
}

MatchDetails.propTypes = {
    playerStatusEnum: PropTypes.oneOf(['IN_GAME'])
};

function mapStateToProps(state) {

    return {
        matchToDetail: state.matches.matchToDetail,
        goalType: state.matches.goalType
    };
}

export default connect(mapStateToProps, {fetchMatch, fetchGoalType})(MatchDetails);
