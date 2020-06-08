console.log('App.js running');

//JSX - JavaScript XML


var app ={
	title: 'Indecesion App',
	subtitle: 'Deja que un compu te controle',
	options: ['One', 'Two']
};


var template = (
	<div> 
		<h1>{app.title}</h1> 
		{app.subtitle && <p>{app.subtitle} </p>}
		<p>{app.options.length>0 ? 'Estas son tus opciones' : 'No options'}</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol> 
	</div>
);

var user ={
	name: 'Juan',
	age: 21,
	location: 'Cartacho'
};

var getLocation = (location) =>{
	if(location){
		return <p>Location: {location}</p>; 
	}
};


var templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1> 
		{(user.age && user.age >= 18) && <p>Edad: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);

//Se obtiene el elemento del hmtl en donde se hará el render del template
var appRoute = document.getElementById('app');
 

ReactDOM.render(template, appRoute);