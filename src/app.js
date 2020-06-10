

//.Component permite que la clase Header sea un React Component
class IndecisionApp extends React.Component{
	constructor(props){
		super(props);

		//binding del this a los metodos
		this.handleDeleteOptions= this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);

		this.state = {
			options: [] 	
		};
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

	//Se declara aquí para que los componentes hijos puedan hacer modificaciones de valores superiores
	//Para hacerlo, se pasa por props a los hijos la función
	handleDeleteOptions(){
		
		/*this.setState(() =>{
			return {
				options: []
			};
		});*/

		//Esto es lo mismo que arriba
		this.setState(() => ({options:[]}));
	}

	handlePick(){
		const option = Math.floor(Math.random()*this.state.options.length);
		alert(this.state.options[option]);
	}

	handleDeleteOption(optionToRemove){
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}))
	}


	handleAddOption(option){
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


	render(){
		const subtitle = 'Deja que un compu te controle';

		return (
			<div>
				{/*Así se renderiza un React component*/}
				<Header subtitle={subtitle}/>
				<Action 
					hasOptions={(this.state.options.length>0)}
					handlePick={this.handlePick}
				/>
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
		);
	}
}

/*	Permite indicar valores por defecto del props
IndecisionApp.defaultProps = {
	options: []
};*/

//----------------------------------------------------------------

//Versión React COmponent
/*
class Header extends React.Component{
	//Función que permite renderizar este componente
	render() {
		//Retorna un jsx
		return (
			<div>
				{this.props referencia las propiedade pasadas al Component
				al momento de renderizarlo}
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}*/


//Versión Stateless Functional Component de Header
const Header = (props) =>{
	//Retorna un jsx
	return (
		<div>
			{/*this.props referencia las propiedade pasadas al Component
			al momento de renderizarlo*/}
			<h1>{props.title}</h1>
			{props.subtitle &&  <h2>{props.subtitle}</h2>}
		</div>
	);
}

//Permite indicar valor predeterminados en caso de que no pasen props
Header.defaultProps = {
	title: 'Some default'
};

//----------------------------------------------------------------

//Versión React COmponent
/*
class Action extends React.Component{
	render(){
		return (
			<div>
				<button 
					onClick={this.props.handlePick}
					disabled={!this.props.hasOptions}>
					What Should I Do
				</button>
			</div>
		);
	}
}*/

//Versión Stateless Functional Component de Action
const Action = (props) =>{
	return (
		<div>
			<button 
				onClick={props.handlePick}
				disabled={!props.hasOptions}>
				What Should I Do
			</button>
		</div>
	);
}

//----------------------------------------------------------------

//----------------------------------------------------------------

//Versión React COmponent
/*
class Options extends React.Component{
	render(){
		return (
			<div>
				<button onClick={this.props.handleDeleteOptions}>Remove All</button>
				{
					this.props.options.map((option) => <Option key={option} optiontext={option}/>)
				}
			</div>
		);
	}
}*/

//Versión Stateless Functional Component de Options
const Options = (props) =>{
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.length === 0 && <p>Ingrese una opción</p>}
			{
				props.options.map((option) =>(
					<Option 
						key={option} 
						optiontext={option}
						handleDeleteOption={props.handleDeleteOption}
					/>
				))
			}
		</div>
	);
}

//----------------------------------------------------------------

//----------------------------------------------------------------

//Versión React COmponent
/*
class Option extends React.Component{
	render(){
		return (
			<div>
				Option: {this.props.optiontext}
			</div>
		);
	}
}*/

//Versión Stateless Functional Component de Option
const Option = (props) =>{
	return (
		<div>
			Option: {props.optiontext}
			<button 
				onClick={
						//De esta manera es que se pasa un parametro a una función del
						//React component padre
						(e) =>{
							props.handleDeleteOption(props.optiontext);
						}
				}>
				Remove
			</button>
		</div>
	);
}

//----------------------------------------------------------------

class AddOption extends React.Component{
	//Es necesario sobreescribir el constructor porque handleAddOption utiliza this
	constructor(props){
		super(props);
		this.handleAddOption=this.handleAddOption.bind(this);

		//Para manejar el mensaje de error constantemente se indica el error en el state
		this.state ={
			error: undefined
		}
	}
	handleAddOption(e){
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
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option"/>
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}


//Stateless Functional Component
//El argumento con el que se llama al renderizarlo son los props que se pueden usar
//Son más rápidos que los React Component
/*
const User = (props) =>{
	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
		</div>
	);
	
};*/

//Se renderiza directamente el componente IndecisionApp
ReactDOM.render(<IndecisionApp options={[]}/>, document.getElementById('app'));