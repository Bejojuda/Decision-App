class VisibilityToggle extends React.Component{
	constructor(props){
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state={
			visibility:false
		}
	}
	handleToggleVisibility(){
		this.setState((prevState) =>{
			return {
				visibility: !prevState.visibility
			}
		});
	}
	render(){
		return (
			<div> 
				<h1>Visibility Toggle</h1>  
				<button onClick={this.handleToggleVisibility}>{
					!this.state.visibility ? 'Mostrar' : 'Esconder'
				} </button>
				<p>{
					this.state.visibility ? 'Estas son los detalles' : ''
				}</p>
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/* EJEMPLO SIN COMPONENTS NI COMPONENT STATE
//Se obtiene el elemento del hmtl en donde se hará el render del template
const appRoute = document.getElementById('app');

let visibility = false;

const details = () =>{
	visibility= !visibility;
	render();
};


//render se llama cada vez que se hace un cambio a la página (o cuando se renderiza por primera vez)
const render = () =>{

	const jsx = (
		<div> 
			<h1>Visibility Toggle</h1>  
			<button onClick={details}>{!visibility ? 'Mostrar' : 'Esconder'} </button>
			<p>{visibility ? 'Estas son los detalles' : ''}</p>
		</div>
	);

	ReactDOM.render(jsx, appRoute);
};

render();*/