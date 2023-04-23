const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path')

const ipc = ipcMain

const createWindow = () => {
    const win = new BrowserWindow({
      minWidth: 800,
      minHeight: 600,
      frame: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        devTools: true,
        preload: path.join(__dirname, 'preload.js')
      },
    })
    win.loadFile('index.html')

    ipc.on('closeApp', ()=>{
      win.close()
    })
  }


  app.whenReady().then(() => {
      createWindow()
  })




app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})