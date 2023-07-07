const {app, BrowserWindow} = require('electron')

function createWindow(){
    const win = new BrowserWindow({
        width: 777,
        height: 777,
        backgroundColor: '#12e321',
        
    });

    win.loadFile('./src/index.html');
    win.webContents.openDevTools();
   
}

app.whenReady().then(()=>{
    console.log('app ready!');

    createWindow();
})
