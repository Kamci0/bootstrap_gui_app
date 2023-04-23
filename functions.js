const {ipcRenderer} = require('electron')
const ipc = ipcRenderer

close_window.addEventListener('click', () => {
  ipc.send('closeApp')
})