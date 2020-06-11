import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';								

 

//Se renderiza directamente el componente IndecisionApp
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
 