console.log('App.js running');

//JSX - JavaScript XML


const app ={
	title: 'Indecesion App',
	subtitle: 'Deja que un compu te controle',
	options: []
};


//e es el evento que se recibe cuando se utiliza el atributo onSubmit en un form
const onFormSubmit = (e) =>{
	e.preventDefault();		//.preventDeafult() hace que el form no mande los datos por URL

	//.target hace referencia al elemento que inició el evento, en este caso, el form
	//.elements referencia los elementos del target, indexados por nombre
	//option es el nombre del imput del form
	const option = e.target.elements.option.value;

	if(option){
		app.options.push(option);
		e.target.elements.option.value = '';
	}

	render();
};

const onRemoveAll= () =>{
	app.options = [];
	render();
};

//Se obtiene el elemento del hmtl en donde se hará el render del template
const appRoute = document.getElementById('app');

const render = () =>{

	const template = (
		<div> 
			<h1>{app.title}</h1>  
			{app.subtitle && <p>{app.subtitle} </p>}
			<p>{app.options.length>0 ? 'Estas son tus opciones' : 'No options'}</p>
			<p>{app.options.length} </p>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				<li>Item one</li>
				<li>Item two</li>
			</ol> 
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoute);
};

render();