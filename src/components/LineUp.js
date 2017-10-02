import React, {Component} from "react";
import LineUpItem from "./LineUpItem";
import _ from "lodash";

class LineUp extends Component {
    constructor(props) {
        super(props);
        this.renderLineUpItems = this.renderLineUpItems.bind(this);
    }

    renderLineUpItems() {

        return _.map(this.props.players, player => {
            return (
                <li className="list-group-item clearfix" key={player.id}>
                    <LineUpItem side={this.props.side} player={player}/>
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group line-up ">
                {this.renderLineUpItems()}
            </ul>
        );
    }
}

export default LineUp;
