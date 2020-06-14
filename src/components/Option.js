import React from 'react';


//----------------------------------------------------------------

//Versión React COmponent
/*
class Option extends React.Component{
	render(){
		return (
			<div>
				Option: {this.props.optiontext}
			</div>
		);
	}
}*/

//Versión Stateless Functional Component de Option
const Option =  (props) =>(
	<div className='option'>
		<p className='option__text'>{props.count}.{props.optiontext}</p>
		<button 
			//button es un block de css, button--link es un modifier
			className='button button--link'
			onClick={
					//De esta manera es que se pasa un parametro a una función del
					//React component padre
					(e) =>{
						props.handleDeleteOption(props.optiontext);
					}
			}>
			Remove
		</button>
	</div>
);


export default Option;