import React from 'react';
import ReactDOM from 'react-dom'

import IndecisionApp from './components/IndecisionApp';

 



//Se renderiza directamente el componente IndecisionApp
ReactDOM.render(<IndecisionApp options={[]}/>, document.getElementById('app'));

class OldSyntax{
	constructor(){
		this.name="Andrew";
	}
}

const oldSyntax = new OldSyntax();

console.log(oldSyntax);



class NewSyntax{
	name = 'Jen';
}

const newSyntax = new NewSyntax();

console.log(newSyntax);