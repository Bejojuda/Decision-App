'use strict';

console.log('App.js running');

//JSX - JavaScript XML


var app = {
	title: 'Indecesion App',
	subtitle: 'Deja que un compu te controle',
	options: ['One', 'Two']
};

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
	)
);

var user = {
	name: 'Juan',
	age: 21,
	location: 'Cartacho'
};

var getLocation = function getLocation(location) {
	if (location) {
		return React.createElement(
			'p',
			null,
			'Location: ',
			location
		);
	}
};

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name ? user.name : 'Anonymous'
	),
	user.age && user.age >= 18 && React.createElement(
		'p',
		null,
		'Edad: ',
		user.age
	),
	getLocation(user.location)
);

//Se obtiene el elemento del hmtl en donde se hará el render del template
var appRoute = document.getElementById('app');

ReactDOM.render(template, appRoute);
