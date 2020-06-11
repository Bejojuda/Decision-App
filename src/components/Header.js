import React from 'react'
//----------------------------------------------------------------

//Versión React COmponent
/* 
class Header extends React.Component{
	//Función que permite renderizar este componente
	render() {
		//Retorna un jsx
		return (
			<div>
				{this.props referencia las propiedade pasadas al Component
				al momento de renderizarlo}
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}*/

  
//Versión Stateless Functional Component de Header
const Header = (props) =>(
	<div className='header'>
		<div className='container'>
			{/*this.props referencia las propiedade pasadas al Component
			al momento de renderizarlo*/}
			<h1 className='header__title'>{props.title}</h1>
			{props.subtitle &&  <h2 className='header__subtitle'>{props.subtitle}</h2>}
	
		</div>
	</div>
);


//Permite indicar valor predeterminados en caso de que no pasen props
Header.defaultProps = {
	title: 'Indecision App'
};

export default Header;
