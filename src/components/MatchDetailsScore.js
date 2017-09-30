import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";



class MatchDetailsScore extends Component {

    constructor(props){
        super(props);
    }


    render(){

        const {match} = this.props;
        console.log("Score - ", match);
        return (

            <Row>
                <Col md={12} className="score">
                    <Col md={5} className="score-item">
                        <Col md={9} >
                            <span className="home-club-name">{match.homeClub.name}</span>
                        </Col>
                        <Col md={3}>

                        </Col>

                    </Col>
                    <Col md={2} className="score-item">

                    </Col>
                    <Col md={5} className="score-item">
                        <Col md={9} >
                            <span className="home-club-name">{match.visitorClub.name}</span>
                        </Col>
                        <Col md={3}>

                        </Col>
                    </Col>
                </Col>
            </Row>

        )
    }
}


export default MatchDetailsScore;
