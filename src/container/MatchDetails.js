import React, {Component} from "react";
import MatchDetailsScore from "../components/MatchDetailsScore";
import MatchDetailsContent from "../components/MatchDetailsContent";

import {fetchMatch} from "../actions/MatchActions";

import {connect} from "react-redux";

class MatchDetails extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const {id} = this.props.match.params;
        /*Busca os detalhes da partida.*/
        this.props.fetchMatch(id);
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
}

function mapStateToProps({matches}) {

    return {
        matchToDetail: matches.matchToDetail
    };
}

export default connect(mapStateToProps, {fetchMatch})(MatchDetails);
