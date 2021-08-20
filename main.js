// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

const express = require('express')
const server = express()
const port = 3000

const mysql = require("mysql");
// Coloca aquí tus credenciales
const connection = mysql.createPool({
  host: "xlf3ljx3beaucz9x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "ee6zfxo4jzdc6sb1",
  password: "c79t54iu4wb7ag6x",
  database: "uc98qw0tbiy7ouks"
});

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);

  connection.query('CREATE TABLE testname(id int, name text)', (err, rows) => {
    if (err) throw err;
    console.log('The solution is: ', rows);
  });

  connection.query('SELECT * FROM testname', (err, rows) => {
    if (err) throw err;
    console.log('The solution is: ', rows);
  });
})

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
