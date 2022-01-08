import { app, BrowserWindow, ipcMain } from 'electron'
import dotenv from 'dotenv'
import icon from '../public/brek.png'
import { windowSize } from './config'
import dockMenu from './dock'

const config = dotenv.config()

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

ipcMain.on('get-env', event => {
  event.sender.send('get-env-reply', config)
})

function createWindow() {
  mainWindow = new BrowserWindow({
    icon,
    ...windowSize,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  if (process.platform === 'darwin') {
    app.dock.setMenu(dockMenu)
    app.dock.setIcon(icon)
  }
}

app.on('ready', createWindow).whenReady()

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
