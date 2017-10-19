import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import MatchDetailsLineUp from '../components/MatchDetailsLineUp';

class MatchDetailsContent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const panelTitle = (
            <h3 className="text-center">O Jogo</h3>
        );
        return (

            <Panel header={panelTitle}>
               <MatchDetailsLineUp matchToDetail={this.props.matchToDetail}/>
            </Panel>
        )
    }
}

export default MatchDetailsContent;