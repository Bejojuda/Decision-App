import React from 'react';
import Option from './Option';

//Versión React COmponent
/*
class Options extends React.Component{
	render(){
		return (
			<div>
				<button onClick={this.props.handleDeleteOptions}>Remove All</button>
				{
					this.props.options.map((option) => <Option key={option} optiontext={option}/>)
				}
			</div>
		);
	}
}*/

//Versión Stateless Functional Component de Options
const Options = (props) =>(
	<div>
		<button onClick={props.handleDeleteOptions}>Remove All</button>
		{props.options.length === 0 && <p>Ingrese una opción</p>}
		{
			props.options.map((option) =>(
				<Option 
					key={option} 
					optiontext={option}
					handleDeleteOption={props.handleDeleteOption}
				/>
			))
		}
	</div>
);


export default Options;