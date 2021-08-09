// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const { dialog } = require('electron')

var currentFile;
var dataFile;

let loadButton   = document.getElementById('loadButton');
let keysButton   = document.getElementById('keysButton');
let valuesButton = document.getElementById('valuesButton');
let showButton   = document.getElementById('showButton');

loadButton.onclick = loadFile;

function loadFile() {
    dialog.showOpenDialogSync(mainWindow, {
        properties: ['openFile', 'openDirectory']
      });
}

function loadJson(fileName) {

  fetch('people.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    currentFile = fileName
    dataFile = data;
  })
  .catch((err) => {
    printError(err);
  })

}

function printAllKeys(data) {

  for (const [key, value] of Object.entries(data)) {
    console.log(key);
  }

}

function printAllValues(data) {

  for (const [key, value] of Object.entries(data)) {
    console.log(key, value);
  }

}

function printAllKeysValues(data) {

  for (const [key, value] of Object.entries(data)) {
    console.log(value);
  }

}

function printError(err) {
  console.log(err);
}