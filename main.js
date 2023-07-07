const {app, BrowserWindow} = require('electron');
const path = require('path');
const os = require('os');

const isDev = process.env.NODE_ENV === "development" ? true : false ;

const isWin32 = process.platform === 'win32' ? true : false ;

function createWindow(){
    const win = new BrowserWindow({
        width: 777,
        height: 777,
        backgroundColor: '#12e321',
        show: false,
        icon: path.join(__dirname, 'assets', 'icons', 'ak47.png'),
        webPreferences: { nodeIntegration: true },
    });

    win.loadFile('./src/index.html');

    //isDev ?  win.webContents.openDevTools() : console.log('not dev')
    
    isWin32 ? win.webContents.openDevTools() : console.log('not windows');

    win.once('ready-to-show',()=>{
        win.show();
    })
}

app.whenReady().then(()=>{
    console.log('app ready!');
    createWindow();
    console.log(os.cpus()[0].model) //nome do processador
})

// app.on('window-all-closed', ()=>{
//     console.log("Todas as janelas fechadas")
//     app.quit();
// })

app.on("activate", ()=>{
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
})