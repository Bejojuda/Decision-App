const path = require('path');



module.exports = {
	entry: './src/app.js',			//Archivo con el que se inicia webpack
	output: {
		path: path.join(__dirname, 'public'), 
		filename: 'bundle.js'
	},
	mode: 'development',
	module:{
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,					//ejecuta cuando se hace un cambio a archivos .js
			exclude: /node_modules/
		}]

	}
};