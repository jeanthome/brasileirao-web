import React, {Component} from "react";
import MatchListPagination from "./MatchListPagination";
import {connect} from "react-redux";
import _ from "lodash";
import {fetchMatchesInRound} from "../actions/MatchActions";
import {Col, Row} from "react-bootstrap";

class MatchList extends Component {

    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    componentWillMount() {
        this.props.fetchMatchesInRound(1);
    }

    renderItem() {
        return _.map(this.props.matches.matchList, match => {
            console.log(match);

            const {homeClub, visitorClub} = match;
            return (

                <Row key={match.identifier}>
                    <Col md={3}>
                        <img src={`http://localhost:8090/clubs/${homeClub.identificator}/badge`}/>
                    </Col>
                    <Col md={2}>
                        {homeClub.name}
                    </Col>
                    <Col md={2}>
                        <p>X</p>
                        <p>{match.kickOff}</p>
                    </Col>
                    <Col md={2}>
                        {visitorClub.name}
                    </Col>
                    <Col md={3}>
                        <img src={`http://localhost:8090/clubs/${visitorClub.identificator}/badge`}/>
                    </Col>
                </Row>
            );
        });
    }

    render() {

        const {matches} = this.props;

        if (_.isEmpty(matches)) {
            return (
                <h3>Carregando</h3>
            );
        }

        console.log(matches);

        return (
            <div className="margin-to-navbar text-center">
                <MatchListPagination/>
                <h3>Lista de Jogos</h3>
                {this.renderItem()}
            </div>
        );
    }
}


function mapStateToProps(state) {

    return {
        matches: state.matches
    };
}

export default connect(mapStateToProps, {fetchMatchesInRound})(MatchList);