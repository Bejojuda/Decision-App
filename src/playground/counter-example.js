class Counter extends React.Component{
	constructor(props){
		super(props);
		this.handleAddOne=this.handleAddOne.bind(this);
		this.handleMinusOne=this.handleMinusOne.bind(this);
		this.handleReset=this.handleReset.bind(this);

		//Permite indicar los elementos que se manejan en los component state
		this.state={
			count: props.count
		};
	}
	handleAddOne(){
		//Permite que se actualicen los valores del states
		this.setState((prevState) =>{
			//prevState referencia el state original, antes de ser modificado
			return {
				count: prevState.count+1
			};
		});
	}
	handleMinusOne(){
		this.setState((prevState) =>{
			//prevState referencia el state original, antes de ser modificado
			return {
				count: prevState.count-1
			};
		});
		
	}
	handleReset(){
		this.setState((prevState) =>{
			//prevState referencia el state original, antes de ser modificado
			return {
				count: 0
			};
		});
	}
	render(){
		return (
			<div>
				<h1>Count: {this.state.count} </h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}

Counter.defaultProps= {
	count: 0
};


ReactDOM.render(<Counter count={0}/>, document.getElementById('app'));



/*
let count = 0;
const addOne = () =>{
	count++;
	renderCounterApp();
};

const minusOne = () =>{
	count--;
	renderCounterApp();
}
const reset = () =>{
	count=0;
	renderCounterApp();
};


//Se obtiene el elemento del hmtl en donde se hará el render del template
const appRoute = document.getElementById('app');

const renderCounterApp = () =>{
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne}>+1</button>
			<button onClick={minusOne}>-1</button>
			<button onClick={reset}>Reset</button>
		</div>
	);

	ReactDOM.render(templateTwo, appRoute);
};

renderCounterApp();*/