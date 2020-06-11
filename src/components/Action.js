import React from 'react';


//Versión React COmponent
/*
class Action extends React.Component{
	render(){
		return (
			<div>
				<button 
					onClick={this.props.handlePick}
					disabled={!this.props.hasOptions}>
					What Should I Do
				</button>
			</div>
		);
	}
}*/

//Versión Stateless Functional Component de Action
const Action = (props) =>{
	return (
		<div>
			<button 
				onClick={props.handlePick}
				disabled={!props.hasOptions}>
				What Should I Do
			</button>
		</div>
	);
}

export default Action;