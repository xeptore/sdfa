const { app, BrowserWindow } = require('electron')

let win

function createWindow () {
  win = new BrowserWindow({ width: 900, height: 680, resizable: false })
  win.setMenu(null)

  win.loadFile('dist/index.html')
}

app.on('ready', createWindow)
