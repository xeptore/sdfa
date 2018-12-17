const { app, BrowserWindow } = require('electron')
const { default: installExtension, VUEJS_DEVTOOLS } = require('electron-devtools-installer')

// preventing from collected by garbage collector
let win

function createWindow () {
  win = new BrowserWindow({ width: 900, height: 680, resizable: false })

  installExtension(VUEJS_DEVTOOLS)
    .then(name => console.log(`Added Extension: ${name}`))
    .catch(e => console.log(`An Error Occurred: ${e}`))

  // win.setMenu(null)
  win.focus()
  win.webContents.openDevTools()

  win.once('ready-to-show', () => {
    win.show()
  })

  win.loadURL(`http://localhost:${8080}`)
}

app.on('ready', createWindow)
