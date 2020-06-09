//.Component permite que la clase Header sea un React Component
class IndecisionApp extends React.Component{
	render(){
		const title = 'Indecision';
		const subtitle = 'Deja que un compu te controle';
		const options = ['Una cosa', 'Cosa dos', 'La cosa cuatro'];

		return (
			<div>
				{/*Así se renderiza un React component*/}
				<Header title={title} subtitle={subtitle}/>
				<Action />
				<Options  options={options}/>
				<AddOption />
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
	//Se crea la función aquí para que se exporte con el Component
	handlePick(){
		alert('Handle Pick');
	}
	render(){
		return (
			<div>
				<button onClick={this.handlePick}>What Should I Do</button>
			</div>
		);
	}
}

class Options extends React.Component{
	//Se sobreescribe el constructor para hacer el binding con el this original
	constructor(props){
		super(props);
		//Se agrega a handleRemoveAll el bind con el this original
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}
	handleRemoveAll(){
		console.log(this.props.options);
	}
	render(){
		return (
			<div>
				<button onClick={this.handleRemoveAll}>Remove All</button>
				{this.props.options.map((option) => <Option key={option} optiontext={option}/>)}
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
	handleAddOption(e){
		e.preventDefault();


		const option = e.target.elements.option.value.trim();

		if(option){
			alert(option);
		}

	}
	render(){
		return (
			<div>
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