import React, {Component} from "react";
import MatchDetailsScore from "../components/MatchDetailsScore";
import MatchDetailsContent from "../components/MatchDetailsContent";
import RootModal from "../container/RootModal";

import {fetchGoalType, fetchMatch} from "../actions/MatchActions";

import {connect} from "react-redux";

class MatchDetails extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const {id} = this.props.match.params;
        /*Busca os detalhes da partida.*/
        this.props.fetchMatch(id);
        this.props.fetchGoalType();
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
                <MatchDetailsScore matchToDetail={matchToDetail}/>
                <hr className="match-details-hr"/>
                <MatchDetailsContent matchToDetail={matchToDetail}/>
                <RootModal/>
            </div>
        )
    }


}

function mapStateToProps(state) {

    return {
        matchToDetail: state.matches.matchToDetail,
    };
}

export default connect(mapStateToProps, {fetchMatch, fetchGoalType})(MatchDetails);
