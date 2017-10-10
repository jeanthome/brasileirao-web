import React, {Component} from "react";
import MatchDetailsScore from "../components/MatchDetailsScore";
import MatchDetailsContent from "../components/MatchDetailsContent";
import {PlayerStatus} from "../utils/Constants";

import {fetchGoalType, fetchMatch} from "../actions/MatchActions";

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
        this.getPlayersArrayToSelectInput = this.getPlayersArrayToSelectInput.bind(this);
        this.getSelectInputFormatArray = this.getSelectInputFormatArray.bind(this);
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

    /**
     * Obtém array de jogadores relacionados para a partida e que estão com um status específico.
     * Esse array é usado pelo componente 'SelectInput' em sua propriedade 'options';
     *
     * @param isHomeClub Booleano que define se o filtro será aplicado aos jogadores do time
     * mandante (true) ou aos jogadores do time visitante (false).
     * @param status O Status com o qual o jogador deve estar para ser retornado.
     */
    getPlayersArrayToSelectInput(isHomeClub, status) {

        console.log("getPlayersArrayToSelectInput", isHomeClub, status);

        if (isHomeClub) {

            let {homeClubStartingPlayers, homeClubSubstitutePlayers} = this.props.matchToDetail;
            return this.getSelectInputFormatArray(
                homeClubStartingPlayers.concat(homeClubSubstitutePlayers), status);

        } else {

            let {visitorClubStartingPlayers, visitorClubSubstitutePlayers} = this.props.matchToDetail;
            return this.getSelectInputFormatArray(
                visitorClubStartingPlayers.concat(visitorClubSubstitutePlayers), status);
        }
    }

    /**
     * Filtra o atributo 'sourceList' retornando array de objetos no formato {value, label} com os
     * jogadores que possuem um status específico.
     *
     * @param sourceList Lista com os jogadores a serem filtrados.
     * @param status O Status com o qual o jogador deve estar para ser retornado.
     */
    getSelectInputFormatArray(sourceList, status) {

        /*Obtém a lista com os status dos jogadores.*/
        let playersStatus = this.state.playersStatus;
        /*Faz o filtro, seguido de um map, dos jogadores*/
        return sourceList.filter(player => playersStatus[player.id] === status).map(player => {
            return {
                value: player.id,
                label: player.displayName
            }
        });
    }

}

function mapStateToProps(state) {

    return {
        matchToDetail: state.matches.matchToDetail,
        goalType: state.matches.goalType
    };
}

export default connect(mapStateToProps, {fetchMatch, fetchGoalType})(MatchDetails);
