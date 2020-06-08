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

const onMakeDecision = () =>{
	//Math.floor redondea el valor pasado por parametro
	//.random se multiplica por la cantidad de opciones para que de dentro del rango
	const randomNum = Math.floor(Math.random()*app.options.length);
	const option = app.options[randomNum];
	alert(option);
};

//Se obtiene el elemento del hmtl en donde se hará el render del template
const appRoute = document.getElementById('app');


//render se llama cada vez que se hace un cambio a la página (o cuando se renderiza por primera vez)
const render = () =>{

	const template = (
		<div> 
			<h1>{app.title}</h1>  
			{app.subtitle && <p>{app.subtitle} </p>}
			<p>{app.options.length>0 ? 'Estas son tus opciones' : 'No options'}</p>
			<button disabled={app.options.length===0}onClick={onMakeDecision}>What Should I Do? </button>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				{	//map itera en cada elemento del array y ejecuta el callback
					//key es necesario ponerlo para que sirva de identificador para react
					app.options.map((option) => <li key={option}>{option}</li>)
				}
			</ol> 
			{/*onSubmit permite ejecutar lo indicado despues del igual cuando se envia el formulario
			en este caso se llama a la función onFormSubmit*/}
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoute);
};

render();