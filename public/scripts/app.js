'use strict';

console.log('App.js running');

//JSX - JavaScript XML


var app = {
	title: 'Indecesion App',
	subtitle: 'Deja que un compu te controle',
	options: []
};

//e es el evento que se recibe cuando se utiliza el atributo onSubmit en un form
var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault(); //.preventDeafult() hace que el form no mande los datos por URL

	//.target hace referencia al elemento que inició el evento, en este caso, el form
	//.elements referencia los elementos del target, indexados por nombre
	//option es el nombre del imput del form
	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
	}

	render();
};

var onRemoveAll = function onRemoveAll() {
	app.options = [];
	render();
};

var onMakeDecision = function onMakeDecision() {
	//Math.floor redondea el valor pasado por parametro
	//.random se multiplica por la cantidad de opciones para que de dentro del rango
	var randomNum = Math.floor(Math.random() * app.options.length);
	var option = app.options[randomNum];
	alert(option);
};

//Se obtiene el elemento del hmtl en donde se hará el render del template
var appRoute = document.getElementById('app');

//render se llama cada vez que se hace un cambio a la página (o cuando se renderiza por primera vez)
var render = function render() {

	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		app.subtitle && React.createElement(
			'p',
			null,
			app.subtitle,
			' '
		),
		React.createElement(
			'p',
			null,
			app.options.length > 0 ? 'Estas son tus opciones' : 'No options'
		),
		React.createElement(
			'button',
			{ disabled: app.options.length === 0, onClick: onMakeDecision },
			'What Should I Do? '
		),
		React.createElement(
			'button',
			{ onClick: onRemoveAll },
			'Remove All'
		),
		React.createElement(
			'ol',
			null,
			//map itera en cada elemento del array y ejecuta el callback
			//key es necesario ponerlo para que sirva de identificador para react
			app.options.map(function (option) {
				return React.createElement(
					'li',
					{ key: option },
					option
				);
			})
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);

	ReactDOM.render(template, appRoute);
};

render();
