import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal isOpen={!!props.selectedOption} 
        onRequestClose={props.closeSelectedOptionModal} 
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
        >
        <h3 className = "modal__title">Selected Option</h3>
        <p className="modal__body">{props.selectedOption}</p>
        <button className="button" onClick={props.closeSelectedOptionModal}>I'm on it!</button>
    </Modal>
);

export default OptionModal;