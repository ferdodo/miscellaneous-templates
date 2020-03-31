const path = require('path');

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
	"target": "node"
};