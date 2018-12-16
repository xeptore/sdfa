const { app, BrowserWindow } = require('electron')
const path = require('path')
const express = require('express')
const history = require('connect-history-api-fallback')
const PORT = 6868

// preventing from collected by garbage collector
let win

function createWindow () {
  win = new BrowserWindow({ width: 900, height: 680, resizable: false })
  const app = express()
  app.use(express.static(path.join(__dirname, 'dist')))
  app.use(history())
  app.listen(PORT)

  win.setMenu(null)
  win.focus()

  win.once('ready-to-show', () => {
    win.show()
  })

  win.loadURL(`http://localhost:${PORT}`)
}

app.on('ready', createWindow)
