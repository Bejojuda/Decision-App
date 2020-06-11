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
const Header = (props) =>{
	//Retorna un jsx
	return (
		<div>
			{/*this.props referencia las propiedade pasadas al Component
			al momento de renderizarlo*/}
			<h1>{props.title}</h1>
			{props.subtitle &&  <h2>{props.subtitle}</h2>}
		</div>
	);
}

//Permite indicar valor predeterminados en caso de que no pasen props
Header.defaultProps = {
	title: 'Some default'
};

export default Header;
