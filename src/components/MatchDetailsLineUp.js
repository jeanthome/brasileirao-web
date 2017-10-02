import React, {Component} from "react";
import {Col, Panel, Row, Button, Collapse} from "react-bootstrap";
import LineUp from "./LineUp";

class MatchDetailsLineUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            callapseSubstituteLineUp: false
        }

        this.handleLineUpCollapse = this.handleLineUpCollapse.bind(this);
    }

    handleLineUpCollapse() {
        this.setState({
            callapseSubstituteLineUp: !this.state.callapseSubstituteLineUp
        })
    }

    render() {

        const panelTitle = (
            <h3 className="text-center">Ficha de Jogo</h3>
        );

        const {match} = this.props;

        const btnCollapseText = this.state.callapseSubstituteLineUp? "Fechar" : "Ficha Completa";

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

                        <Collapse in={this.state.callapseSubstituteLineUp}>
                            <div>
                                <Row>
                                    <Col md={12} className="text-center">
                                        <h4 className="line-up-player-status">RESERVAS</h4>
                                    </Col>
                                </Row>
                                <hr/>

                                <Row>
                                    <Col md={6} className="text-right">
                                        <LineUp
                                            side="left"
                                            players={match.homeClubSubstitutePlayers}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <LineUp
                                            side="right"
                                            players={match.visitorClubSubstitutePlayers}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Collapse>
                        <Row>
                            <Col md={12}>
                                <Button
                                    bsStyle="success"
                                    block
                                    onClick={this.handleLineUpCollapse}>
                                    {btnCollapseText}
                                </Button>
                            </Col>
                        </Row>
                    </Panel>
                </Col>
            </Row>
        )
    }
}

export default MatchDetailsLineUp;
