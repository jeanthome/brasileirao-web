import React, {Component} from 'react';
import {Col, Row, PageHeader, Pagination} from "react-bootstrap";
import {connect} from "react-redux";
import {fetchMatchesInRound} from '../actions/MatchActions';


class MatchListPagination extends Component {
    constructor(props){
        super(props);
        this.state = {
            activePage : 1
        }

        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        this.props.fetchMatchesInRound(this.state.activePage);
    }

    render() {
        return (

            <Pagination
                prev
                next
                first
                last
                ellipsis
                items={38}
                maxButtons={3}
                activePage={this.state.activePage}
                onSelect={this.handleSelect}
            />

        );
    }

    handleSelect(eventKey) {
        console.log(eventKey);
        this.setState({
            activePage: eventKey
        })

        this.props.fetchMatchesInRound(eventKey);
    }
}

export default connect(null, {fetchMatchesInRound})(MatchListPagination);