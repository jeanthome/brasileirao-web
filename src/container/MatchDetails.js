import React, {Component} from 'react';
import MatchDetailsScore from '../components/MatchDetailsScore';

import {selectMatchToDetail} from "../actions/MatchActions";

import {connect} from "react-redux";


class MatchDetails extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {id} = this.props.match.params;
        console.log(id);
    }

    render() {

        const {id} = this.props.match.params;

        const match = this.props.selectedMatch;

        if (!match) {
            return (
                <div>
                    <h3>Carregando...</h3>
                </div>
            )
        }

        return (
            <div className="margin-to-navbar text-center">
                <MatchDetailsScore match={match}/>
                <hr />
            </div>
        )

    }
}


function mapStateToProps({matches}, ownProps) {

    console.log(matches);
    return {
        selectedMatch: matches.matchList[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, {selectMatchToDetail})(MatchDetails);