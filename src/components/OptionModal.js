import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props)  => (
	<Modal
		isOpen={!!props.selectedOption}
		contentLabel='Selected Option'
		ariaHideApp={false}
		closeTimeoutMS={200}
		className='modal'		//Aquí se hace un override al className del Modal
	>
		<h3 className='modal__title'>Selected Option</h3>
		{props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
		<button className='button' onClick={props.handleClearSelectedOption}>Ok</button>
	</Modal>
);

export default OptionModal;