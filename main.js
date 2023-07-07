const {app, BrowserWindow} = require('electron')

const isDev = process.env.NODE_ENV === "development" ? true : false ;

const isWin32 = process.platform === 'win32' ? true : false ;

function createWindow(){
    const win = new BrowserWindow({
        width: 777,
        height: 777,
        backgroundColor: '#12e321',
    });

    win.loadFile('./src/index.html');

    //isDev ?  win.webContents.openDevTools() : console.log('not dev')
    
    isWin32 ? win.webContents.openDevTools() : console.log('not windows');

}

app.whenReady().then(()=>{
    console.log('app ready!');
    createWindow();
})
