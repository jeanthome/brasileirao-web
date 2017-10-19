export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export function showModal(modalType, modalProps) {
    return {
        type: SHOW_MODAL,
        modalType: modalType,
        modalProps: modalProps
    };
}

export function hideModal() {
    return {
        type: HIDE_MODAL
    };
}