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

//Se obtiene el elemento del hmtl en donde se hará el render del template
var appRoute = document.getElementById('app');

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
			'p',
			null,
			app.options.length,
			' '
		),
		React.createElement(
			'button',
			{ onClick: onRemoveAll },
			'Remove All'
		),
		React.createElement(
			'ol',
			null,
			React.createElement(
				'li',
				null,
				'Item one'
			),
			React.createElement(
				'li',
				null,
				'Item two'
			)
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
