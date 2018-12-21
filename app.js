const { join } = require('path')
const { format } = require('url')
const { app, BrowserWindow } = require('electron')

// preventing from collected by garbage collector
let win

function createWindow () {
  win = new BrowserWindow({ width: 800, height: 580, resizable: true })

  win.setMenu(null)
  win.focus()

  // for development
  // win.webContents.openDevTools()

  win.once('ready-to-show', () => {
    win.show()
  })

  win.loadURL(format({
    pathname: join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
}

app.on('ready', createWindow)
