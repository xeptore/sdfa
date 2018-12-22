const { join } = require('path')
const { format } = require('url')
const { app, BrowserWindow } = require('electron')

// preventing from collected by garbage collector
let win

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 580,
    resizable: false,
    maximizable: false,
    webPreferences: {
      devTools: false,
      nodeIntegration: true
    }
  })

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
  // win.loadURL('http://localhost:8080')
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})
