import React, {Component} from "react";
import MatchListPagination from "./MatchListPagination";
import {connect} from "react-redux";
import _ from "lodash";
import {fetchMatchesInRound} from "../actions/MatchActions";
import {Col, Row} from "react-bootstrap";
import MatchCard from "../components/MatchCard";

class MatchList extends Component {

    constructor(props) {
        super(props);
        this.renderMatchCards = this.renderMatchCards.bind(this);
    }

    componentWillMount() {
        this.props.fetchMatchesInRound(1);
    }

    renderMatchCards() {
        return _.map(this.props.matches.matchList, match => {
            return (
                <MatchCard match={match} key={match.identifier}/>
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

        return (
            <div className="margin-to-navbar text-center">
                <Row>
                    <Col md={4} mdOffset={4}>
                        <MatchListPagination/>
                        {this.renderMatchCards()}
                    </Col>
                </Row>
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

