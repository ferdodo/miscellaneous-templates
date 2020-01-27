const {app, BrowserWindow} = require('electron');

main().catch(exitBadly);

async function main(){
	await appReady();
	var win = await createWindow();
}

async function createWindow(){
	var win = new BrowserWindow({
		"width": 490,
		"height": 600,
		"webPreferences": {
			"nodeIntegration": true
		}
	});

	win.setMenuBarVisibility(false);
	win.setResizable(false);
	await win.loadFile('index.html');
	return win;
}

function appReady(){
	return new Promise(function(resolve, reject){ 
		var timeout = setTimeout(reject, 5000, "Timeout !");
		
		app.on('ready', function(){
			clearTimeout(timeout);
			resolve();
		});
	});
}

function exitBadly(error){
	console.error(error);
	process.exit(-1);
}