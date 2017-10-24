import React, {Component} from "react";
import {showModal} from "../actions/ModalActions";
import {connect} from "react-redux";

import {Col, DropdownButton, MenuItem, Row} from "react-bootstrap";
import {ClubTypes, ModalTypes, PlayerStatus} from "../utils/Constants";

class MatchDetailsActionButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playersStatus: {},
            settedPlayersStatus: false
        };

        this.showNewGoalModal = this.showNewGoalModal.bind(this);
        this.showNewCardModal = this.showNewCardModal.bind(this);
        this.showNewSubstitutionModal = this.showNewSubstitutionModal.bind(this);
        this.setsModalDefaultProps = this.setsModalDefaultProps.bind(this);
        this.setPlayersStatus = this.setPlayersStatus.bind(this);
        this.setStatusFromPlayersList = this.setStatusFromPlayersList.bind(this);
        this.getPlayersArrayToSelectInput = this.getPlayersArrayToSelectInput.bind(this);
        this.getSelectInputFormatArray = this.getSelectInputFormatArray.bind(this);
    }

    showNewGoalModal(clubType) {

        /**
         * Somente jogadores que estão jogando podem fazer gol.
         */
        const players = this.getPlayersArrayToSelectInput(clubType, PlayerStatus.IN_GAME);

        /*Define as propriedades do Modal*/
        const modalProps = this.setsModalDefaultProps(clubType);
        modalProps["players"] = players;
        this.props.showModal(ModalTypes.NEW_GOAL_MODAL, modalProps);
    }

    showNewCardModal(clubType) {

        /**
         * Todos os jogadores relacionados (exceto aqueles que já foram expulsos) estão habilitados
         * a receber cartão.
         */
        const inGamePlayers = this.getPlayersArrayToSelectInput(clubType, PlayerStatus.IN_GAME);
        const availablePlayers = this.getPlayersArrayToSelectInput(clubType, PlayerStatus.AVAILABLE);
        const notAvailablePlayers = this.getPlayersArrayToSelectInput(clubType, PlayerStatus.NOT_AVAILABLE);

        /*Define as propriedades do Modal*/
        const modalProps = this.setsModalDefaultProps(clubType);
        modalProps["players"] = inGamePlayers.concat(availablePlayers).concat(notAvailablePlayers);
        this.props.showModal(ModalTypes.NEW_CARD_MODAL, modalProps);
    }

    showNewSubstitutionModal(clubType) {

        /**
         * Obtém os jogadores que estão na partida.
         */
        const playersInMatch = this.getPlayersArrayToSelectInput(clubType, PlayerStatus.IN_GAME);

        /**
         * Obtém os jogadores que ainda podem entrar na partida.
         */
        const availablePlayers = this.getPlayersArrayToSelectInput(clubType, PlayerStatus.AVAILABLE);

        const modalProps = this.setsModalDefaultProps(clubType);
        modalProps["playersWhoCanLeave"] = playersInMatch;
        modalProps["playersWhoCanEnter"] = availablePlayers;
        this.props.showModal(ModalTypes.NEW_SUBSTITUTION_MODAL, modalProps);
    }

    /**
     * Atribui as propriedades comuns a todos os Modals.
     *
     * @param clubType Indica sobre qual clube o Modal atuará.
     * @returns {{}} Objeto com as propriedades default.
     */
    setsModalDefaultProps(clubType) {
        const modalProps = {};
        modalProps["clubType"] = clubType;
        modalProps["matchId"] = this.props.matchToDetail.identificator;
        return modalProps;
    }

    componentDidMount() {
        const {matchToDetail} = this.props;
        if (matchToDetail) {
            this.setPlayersStatus();
        }
    }

    render() {

        return (
            <Row>
                <Col md={6}>
                    <DropdownButton
                        bsStyle="default"
                        title="Ações referentes ao mandante"
                        id="drop-down-home-club">
                        <MenuItem>Selecionar jogadores titulares</MenuItem>
                        <MenuItem>Selecionar jogadores reservas</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={ClubTypes.HOME_CLUB}
                                  onSelect={this.showNewGoalModal}>Inserir gol
                        </MenuItem>
                        <MenuItem eventKey={ClubTypes.HOME_CLUB}
                                  onSelect={this.showNewCardModal}>Inserir cartão
                        </MenuItem>
                        <MenuItem eventKey={ClubTypes.HOME_CLUB}
                                  onSelect={this.showNewSubstitutionModal}>Inserir substituição
                        </MenuItem>
                    </DropdownButton>
                </Col>
                <Col md={6}>
                    <DropdownButton
                        bsStyle="default"
                        title="Ações referentes ao visitante"
                        id="drop-down-visitor-club">
                        <MenuItem>Selecionar jogadores titulares
                        </MenuItem>
                        <MenuItem>Selecionar jogadores reservas</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={ClubTypes.VISITOR_CLUB}
                                  onSelect={this.showNewGoalModal}>Inserir gol</MenuItem>
                        <MenuItem eventKey={ClubTypes.VISITOR_CLUB}
                                  onSelect={this.showNewCardModal}>Inserir cartão
                        </MenuItem>
                        <MenuItem eventKey={ClubTypes.VISITOR_CLUB}
                                  onSelect={this.showNewSubstitutionModal}>Inserir substituição
                        </MenuItem>
                    </DropdownButton>
                </Col>
            </Row>
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
     * @param clubType Indica de qual time os jogadores serão obtidos.
     * @param status O Status com o qual o jogador deve estar para ser retornado.
     */
    getPlayersArrayToSelectInput(clubType, status) {

        if (clubType === ClubTypes.HOME_CLUB) {
            let {homeClubStartingPlayers, homeClubSubstitutePlayers} = this.props.matchToDetail;
            return this.getSelectInputFormatArray(
                homeClubStartingPlayers.concat(homeClubSubstitutePlayers), status);

        } else if (clubType === ClubTypes.VISITOR_CLUB) {

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

export default connect(null, {showModal})(MatchDetailsActionButtons);