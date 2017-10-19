import React, {Component} from "react";
import {connect} from "react-redux";
import NewGoalModal from "../container/NewGoalModal";

const MODAL_COMPONENTS = {
    'NEW_GOAL_MODAL': NewGoalModal
};

class RootModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {modalType, modalProps} = this.props.modal;

        if (!modalType) {
            return null;
        }

        const SpectficModal = MODAL_COMPONENTS[modalType];
        return (
            <SpectficModal {...modalProps}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modals
    };
}

export default connect(mapStateToProps, null)(RootModal);
