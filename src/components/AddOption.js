import React from 'react';


//Aquí se exporta
export default class AddOption extends React.Component{
	//Es necesario sobreescribir el constructor porque handleAddOption utiliza this

	//Para manejar el mensaje de error constantemente se indica el error en el state
	state = {
		error: undefined
	};
	
	handleAddOption = (e) => {
		e.preventDefault();

		const option = e.target.elements.option.value.trim();
		
		const error = this.props.handleAddOption(option);

		//Para manejar errores
		/*
		this.setState(() =>{
			return {
				error
			};
		});*/

		//Esto es lo mismo que lo de arriba
		this.setState(() => ({error}) );

		if(!error){
			e.target.elements.option.value='';
		}

	}
	render(){
		return (
			<div>
				{this.state.error && <p className='add-option-error'>{this.state.error}</p>}
				<form className='add-option' onSubmit={this.handleAddOption}>
					<input className='add-option__input' type="text" name="option"/>
					<button className='button'>Add Option</button>
				</form>
			</div>
		);
	}
}



