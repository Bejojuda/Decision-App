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
	render(){
		return (
			<div>
				<button>What Should I Do</button>
			</div>
		);
	}
}

class Options extends React.Component{
	render(){
		return (
			<div>
				<p>Estas son tus opciones: {this.props.options.length}</p>
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
	render(){
		return (
			<div>
				<p>AddOption</p>
			</div>
		);
	}
}



//Se renderiza directamente el componente IndecisionApp
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));