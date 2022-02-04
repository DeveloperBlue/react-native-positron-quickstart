/* eslint strict: 0 */
'use strict';

const { app, BrowserWindow, ipcMain} = require('electron');

const argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const project_bundle_name = require('../app.json').name;

const isDevelopment = (argv && argv.mode === 'development');

const BUILD_PATH = path.join(__dirname, (isDevelopment) ? '/webpack-dev-server' : '/build');

/* */

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('ready', () => {

  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    backgroundColor : '#ec444b',
    webPreferences : {
      preload: path.join(BUILD_PATH, `/${project_bundle_name}-preload.bundle.js`)
    }
  });

  mainWindow.webContents.openDevTools();

  mainWindow.loadFile(path.join(BUILD_PATH, '/index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

})

// Communicating with the preload/renderer processes

ipcMain.on("toMain", (event, args) => {
  fs.readFile("path/to/file", (error, data) => {
      // Do something with file contents
  
      // Send result back to renderer process
      win.webContents.send("fromMain", responseObj);
  });
});