import React, {Component} from "react";
import {connect} from "react-redux";
import NewGoalModal from "../container/NewGoalModal";
import NewCardModal from '../container/NewCardModal';

const MODAL_COMPONENTS = {
    'NEW_GOAL_MODAL': NewGoalModal,
    'NEW_CARD_MODAL': NewCardModal
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

        const SpecificModal = MODAL_COMPONENTS[modalType];
        return (
            <SpecificModal {...modalProps}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modals
    };
}

export default connect(mapStateToProps, null)(RootModal);
