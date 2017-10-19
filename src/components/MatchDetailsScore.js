import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import {ROOT_URL} from "../utils/Constants";



class MatchDetailsScore extends Component {

    constructor(props){
        super(props);
    }


    render(){

        const {matchToDetail} = this.props;
        const {homeClub, visitorClub} = matchToDetail;
        return (

            <Row>
                <Col md={12} className="score">
                    <Col md={5} className="score-item">
                        <Col md={9} >
                            <span className="home-club-name">{homeClub.name}</span>
                        </Col>
                        <Col md={3} className="club-badge">
                            <img src={`${ROOT_URL}/clubs/${homeClub.identificator}/badge`}/>
                        </Col>

                    </Col>
                    <Col md={2} className="score-item">

                        <div className="score-middle">
                            <Col md={4} className="score-home-goals-wrapper">
                                <span id="score-home-goals">{matchToDetail.homeClubGoals.length}</span>
                            </Col>

                            <Col md={2} className="score-separator">
                                <span>X</span>
                            </Col>
                            <Col md={4} className="score-visitor-goals-wrapper">
                                <span id="score-visitor-goals">{matchToDetail.visitorClubGoals.length}</span>
                            </Col>
                        </div>
                    </Col>
                    <Col md={5} className="score-item">

                        <Col md={3} className="club-badge">
                            <img src={`${ROOT_URL}/clubs/${visitorClub.identificator}/badge`}/>
                        </Col>
                        <Col md={9} >
                            <span className="visitor-club-name">{visitorClub.name}</span>
                        </Col>

                    </Col>
                </Col>
            </Row>

        )
    }
}

export default MatchDetailsScore;
