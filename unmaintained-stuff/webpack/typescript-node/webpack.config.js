const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	"mode" : "development",
	"entry": './src/index.ts',
	"output": {
		"path": path.resolve(__dirname, 'app'),
		"filename": 'index.js'
	}, 
	'module': {
		'rules': [{
			"test": /\.ts$/,
			"use": ['ts-loader']
		}]
	},
	"externals": nodeExternals(),
	"target": "node"
};