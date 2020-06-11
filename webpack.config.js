const path = require('path');



module.exports = {
	entry: './src/app.js',			//Archivo con el que se inicia webpack
	output: {
		path: path.join(__dirname, 'public'), 
		filename: 'bundle.js'
	},
	mode: 'development'
};