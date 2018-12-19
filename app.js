const { join } = require('path')
const { format } = require('url')
const { app, BrowserWindow } = require('electron')

// preventing from collected by garbage collector
let win

function createWindow () {
  win = new BrowserWindow({ width: 900, height: 680, resizable: false })

  win.setMenu(null)
  win.focus()
  win.webContents.openDevTools()

  win.once('ready-to-show', () => {
    win.show()
  })

  win.loadURL(format({
    pathname: join(__dirname, 'dist', 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
}

app.on('ready', createWindow)
