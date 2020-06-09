//.Component permite que la clase Header sea un React Component
class IndecisionApp extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			options: []
		};
		this.handleDeleteOptions= this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
	}

	//Se declara aquí para que los componentes hijos puedan hacer modificaciones de valores superiores
	//Para hacerlo, se pasa por props a los hijos la función
	handleDeleteOptions(){
		this.setState(() =>{
			return {
				options: []
			};
		});
	}

	handlePick(){
		const option = Math.floor(Math.random()*this.state.options.length);
		alert(this.state.options[option]);
	}


	handleAddOption(option){
		if(!option){
			return 'Ingrese valor valido';
		}
		//.indexOf() retorna -1 si no existe el objeto
		else if(this.state.options.indexOf(option)>-1){
			return 'La opción ya existe';
		}

		this.setState((prevState) =>{
			return {
				//.concat toma el array desde donde se está llamando y lo 
				//concatena con el array párametro (si es 1 valor simplemente lo agrega), y retorna el array concatenado
				options: prevState.options.concat(option)
			}
		})
	}


	render(){
		const title = 'Indecision';
		const subtitle = 'Deja que un compu te controle';

		return (
			<div>
				{/*Así se renderiza un React component*/}
				<Header title={title} subtitle={subtitle}/>
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
				/>
				<AddOption
					handleAddOption={this.handleAddOption}
				/>
			</div>
		);
	}
}

class Header extends React.Component{
	//Función que permite renderizar este componente
	render() {
		//Retorna un jsx
		return (
			<div>
				{/*this.props referencia las propiedade pasadas al Component
				al momento de renderizarlo*/}
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}

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
}

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
}

class Option extends React.Component{
	render(){
		return (
			<div>
				Option: {this.props.optiontext}
			</div>
		);
	}
}

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

		//Para manejar 
		this.setState(() =>{
			return {
				error
			};
		});


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



//Se renderiza directamente el componente IndecisionApp
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));