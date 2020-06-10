'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//.Component permite que la clase Header sea un React Component
var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.state = {
			options: props.options //props.options está disponible por que más abajo se indicó el defaultProps
		};
		_this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
		_this.handlePick = _this.handlePick.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
		return _this;
	}

	//Se declara aquí para que los componentes hijos puedan hacer modificaciones de valores superiores
	//Para hacerlo, se pasa por props a los hijos la función


	_createClass(IndecisionApp, [{
		key: 'handleDeleteOptions',
		value: function handleDeleteOptions() {

			/*this.setState(() =>{
   	return {
   		options: []
   	};
   });*/

			//Esto es lo mismo que arriba
			this.setState(function () {
				return { options: [] };
			});
		}
	}, {
		key: 'handlePick',
		value: function handlePick() {
			var option = Math.floor(Math.random() * this.state.options.length);
			alert(this.state.options[option]);
		}
	}, {
		key: 'handleDeleteOption',
		value: function handleDeleteOption(optionToRemove) {
			this.setState(function (prevState) {
				return {
					options: prevState.options.filter(function (option) {
						return optionToRemove !== option;
					})
				};
			});
		}
	}, {
		key: 'handleAddOption',
		value: function handleAddOption(option) {
			if (!option) {
				return 'Ingrese valor valido';
			}
			//.indexOf() retorna -1 si no existe el objeto
			else if (this.state.options.indexOf(option) > -1) {
					return 'La opción ya existe';
				}

			/*
   this.setState((prevState) =>{
   	return {
   		//.concat toma el array desde donde se está llamando y lo 
   		//concatena con el array párametro (si es 1 valor simplemente lo agrega), y retorna el array concatenado
   		options: prevState.options.concat(option)
   	}
   });*/

			//Esto es lo mismo que arriba
			//.concat toma el array desde donde se está llamando y lo 
			//concatena con el array párametro (si es 1 valor simplemente lo agrega), y retorna el array concatenado
			this.setState(function (prevState) {
				return { options: prevState.options.concat(option) };
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var subtitle = 'Deja que un compu te controle';

			return React.createElement(
				'div',
				null,
				React.createElement(Header, { subtitle: subtitle }),
				React.createElement(Action, {
					hasOptions: this.state.options.length > 0,
					handlePick: this.handlePick
				}),
				React.createElement(Options, {
					options: this.state.options,

					handleDeleteOptions:
					/*Se pasa por props la función para que los componentes
     nesteados tenga acceso a ellos*/
					this.handleDeleteOptions,
					handleDeleteOption: this.handleDeleteOption
				}),
				React.createElement(AddOption, {
					handleAddOption: this.handleAddOption
				})
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
	options: []
};

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
var Header = function Header(props) {
	//Retorna un jsx
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			props.title
		),
		props.subtitle && React.createElement(
			'h2',
			null,
			props.subtitle
		)
	);
};

//Permite indicar valor predeterminados en caso de que no pasen props
Header.defaultProps = {
	title: 'Some default'
};

//----------------------------------------------------------------

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
var Action = function Action(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{
				onClick: props.handlePick,
				disabled: !props.hasOptions },
			'What Should I Do'
		)
	);
};

//----------------------------------------------------------------

//----------------------------------------------------------------

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
var Options = function Options(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.handleDeleteOptions },
			'Remove All'
		),
		props.options.map(function (option) {
			return React.createElement(Option, {
				key: option,
				optiontext: option,
				handleDeleteOption: props.handleDeleteOption
			});
		})
	);
};

//----------------------------------------------------------------

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
var Option = function Option(props) {
	return React.createElement(
		'div',
		null,
		'Option: ',
		props.optiontext,
		React.createElement(
			'button',
			{
				onClick:
				//De esta manera es que se pasa un parametro a una función del
				//React component padre
				function onClick(e) {
					props.handleDeleteOption(props.optiontext);
				} },
			'Remove'
		)
	);
};

//----------------------------------------------------------------

var AddOption = function (_React$Component2) {
	_inherits(AddOption, _React$Component2);

	//Es necesario sobreescribir el constructor porque handleAddOption utiliza this
	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this2.handleAddOption = _this2.handleAddOption.bind(_this2);

		//Para manejar el mensaje de error constantemente se indica el error en el state
		_this2.state = {
			error: undefined
		};
		return _this2;
	}

	_createClass(AddOption, [{
		key: 'handleAddOption',
		value: function handleAddOption(e) {
			e.preventDefault();

			var option = e.target.elements.option.value.trim();

			var error = this.props.handleAddOption(option);

			//Para manejar errores
			/*
   this.setState(() =>{
   	return {
   		error
   	};
   });*/

			//Esto es lo mismo que lo de arriba
			this.setState(function () {
				return { error: error };
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				this.state.error && React.createElement(
					'p',
					null,
					this.state.error
				),
				React.createElement(
					'form',
					{ onSubmit: this.handleAddOption },
					React.createElement('input', { type: 'text', name: 'option' }),
					React.createElement(
						'button',
						null,
						'Add Option'
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

//Stateless Functional Component
//El argumento con el que se llama al renderizarlo son los props que se pueden usar
//Son más rápidos que los React Component
/*
const User = (props) =>{
	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
		</div>
	);
	
};*/

//Se renderiza directamente el componente IndecisionApp


ReactDOM.render(React.createElement(IndecisionApp, { options: [] }), document.getElementById('app'));
