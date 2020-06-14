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
		<div className='widget-header'>
			<h3 className='widget__header__title'>Your Options</h3>
			<button 
					className='button button--link'
				onClick={props.handleDeleteOptions}
			>
				Remove All
			</button>
		</div>
		
		{props.options.length === 0 && <p className='widget__message'>Ingrese una opción</p>}
		{
			props.options.map((option, index) =>(
				<Option 
				className='button button--link'
					key={option} 
					optiontext={option}
					count={index+1}
					handleDeleteOption={props.handleDeleteOption}
				/>
			))
		}
	</div>
);


export default Options;