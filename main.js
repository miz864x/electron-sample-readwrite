'use strict'

const electron = require('electron')
const { app } = electron
const { BrowserWindow } = electron

let mainWindow = null

console.dir(BrowserWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('ready', () => {
  mainWindow = new BrowserWindow({ height: 600, width: 800 })
  mainWindow.webContents.openDevTools()
  mainWindow.loadURL(`file://${__dirname}/dist/index.html`)
  mainWindow.on('closed', () => { mainWindow = null })
})
