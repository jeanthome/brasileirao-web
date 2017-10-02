import React, {Component} from "react";
import {Col, Panel, Row} from "react-bootstrap";
import LineUp from "./LineUp";

class MatchDetailsLineUp extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const panelTitle = (
            <h3 className="text-center">Ficha de Jogo</h3>
        );

        const {match} = this.props;

        return (

            <Row>
                <Col md={6} mdOffset={3}>
                    <Panel header={panelTitle}>
                        <Row>
                            <Col md={12} className="text-center">
                                <h4 className="line-up-player-status">TITULARES</h4>
                            </Col>
                        </Row>
                        <hr/>

                        <Row>
                            <Col md={6} className="text-right">
                                <LineUp
                                    side="left"
                                    players={match.homeClubStartingPlayers}
                                />
                            </Col>
                            <Col md={6}>
                                <LineUp
                                    side="right"
                                    players={match.visitorClubStartingPlayers}
                                />
                            </Col>
                        </Row>
                    </Panel>
                </Col>
            </Row>
        )
    }
}

export default MatchDetailsLineUp;
