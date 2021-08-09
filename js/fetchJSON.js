var currentFile;
var dataFile;

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