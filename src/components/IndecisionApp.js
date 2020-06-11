import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal'

//.Component permite que la clase Header sea un React Component
export default class IndecisionApp extends React.Component{
	state = {
			options: [],
			selectedOption: undefined		//Encargado de mostrar el Modal 
	}

	/*constructor(props){
		super(props);

		//binding del this a los metodos
		this.handleDeleteOptions= this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);

		this.state = {
			options: [] 	
		};
	}*/


	//Se declara aquí para que los componentes hijos puedan hacer modificaciones de valores superiores
	//Para hacerlo, se pasa por props a los hijos la función

	handleDeleteOptions = () =>{
		
		/*this.setState(() =>{
			return {
				options: []
			};
		});*/

		//Esto es lo mismo que arriba
		this.setState(() => ({options:[]}));
	}

	handlePick = () =>{
		const number = Math.floor(Math.random()*this.state.options.length);
		const option = this.state.options[number];
		this.setState(() => ({
			selectedOption: option
		}));
	}

	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}))
	}


	handleAddOption = (option) =>{
		if(!option){
			return 'Ingrese valor valido';
		}
		//.indexOf() retorna -1 si no existe el objeto
		else if(this.state.options.indexOf(option)>-1){
			return 'La opción ya existe';
		}

		/*
		this.setState((prevState) =>{
			return {
				//.concat toma el array desde donde se está llamando y lo 
				//concatena con el array párametro (si es 1 valor simplemente lo agrega), y retorna el array concatenado
				options: prevState.options.concat(option)
			}
		});*/

		//Esto es lo mismo que arriba
				//.concat toma el array desde donde se está llamando y lo 
				//concatena con el array párametro (si es 1 valor simplemente lo agrega), y retorna el array concatenado
		this.setState((prevState) => ({options: prevState.options.concat(option)}));
	}

	handleClearSelectedOption = () =>{
		this.setState(() => ({selectedOption: undefined}));
	}


	//life cycle method, se ejcuta cuando el component se ejecuta en el browser
	componentDidMount(){
		try{
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if(options){
				this.setState(() => ({options}));
			}
		} catch(e){

		}

	}

	//life cycle method cuando se actualiza la página
	//Recibe los props y el state antes de ser actualizado
	componentDidUpdate(prevProps, prevState){
		if(prevState.options.length !== this.state.options.length){
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	//Se ejecuta antes de que se quite un component
	componentWillUnmount(){
		console.log('UNMOUNT')
	}

	render(){
		const subtitle = 'Deja que un compu te controle';

		return (
			<div>
				{/*Así se renderiza un React component*/}
				<Header subtitle={subtitle}/>
				<div className='container'>
					<Action 
						hasOptions={(this.state.options.length>0)}
						handlePick={this.handlePick}
					/>
					<div className='widget'>
						<Options  
							options={this.state.options}
					
							handleDeleteOptions={
								/*Se pasa por props la función para que los componentes
								nesteados tenga acceso a ellos*/
								this.handleDeleteOptions
							}
							handleDeleteOption={this.handleDeleteOption}
						/>
						<AddOption
							handleAddOption={this.handleAddOption}
						/>
						</div>
					</div>
					
					<OptionModal
						selectedOption={this.state.selectedOption}
						handleClearSelectedOption={this.handleClearSelectedOption}
					/>
			</div>
		);
	}

}

/*	Permite indicar valores por defecto del props
IndecisionApp.defaultProps = {
	options: []
};*/


