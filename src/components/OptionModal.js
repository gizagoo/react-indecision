import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal isOpen={!!props.selectedOption} 
        onRequestClose={props.closeSelectedOptionModal} 
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        >
        <h3>Selected Option</h3>
        <p>{props.selectedOption}</p>
        <button onClick={props.closeSelectedOptionModal}>I'm on it!</button>
    </Modal>
);

export default OptionModal;