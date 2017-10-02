import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";

class LineUpItem extends Component {
    constructor(props) {
        super(props);
        this.renderNameAndPosition = this.renderNameAndPosition.bind(this);
        this.renderNumber = this.renderNumber.bind(this);
    }

    render() {

        const {side} = this.props;

        if (side === 'left') {
            return this.renderLeftItem();
        } else if (side === 'right') {
            return this.renderRightItem();
        }
    }

    renderLeftItem() {
        return (
            <Row>
                {this.renderNameAndPosition()}
                {this.renderNumber()}
            </Row>
        );
    }

    renderRightItem() {
        return (
            <Row>
                {this.renderNumber()}
                {this.renderNameAndPosition()}
            </Row>
        );
    }

    renderNameAndPosition() {

        const {player} = this.props;

        return (
            <Col md={10} className="line-up-name-and-position-wrapper">
                <Col md={12} className="player-name-wrapper">
                    <span className="player-name">{player.displayName}</span>
                </Col>
                <Col md={12} className="player-position-wrapper">
                    <span className="player-position">{player.positionAbbreviation}</span>
                </Col>
            </Col>
        );
    }

    renderNumber() {
        const {player} = this.props;

        if (player.number < 10) {
            return (
                <Col md={2} className="player-number-wrapper">
                    <strong className="player-number">&nbsp;{player.number}</strong>
                </Col>
            );
        }

        return (
            <Col md={2} className="player-number-wrapper">
                <strong className="player-number">{player.number}</strong>
            </Col>
        );
    }
}

export default LineUpItem;
