const fs = require('fs');

const file = process.argv[2];

function splitFileName(file) {
    const splitFileName = file.split('.');
    return splitFileName[0];
}

function verifFormat(file) {
    const splitFileName = file.split('.');
    if(splitFileName[1] !== "csv"){
        return false;
    }
    return true;
}

function readFile(file) {
    const content = "";
    fs.readFile(file, 'utf8', function(err, data) {
        content = data;
    });
    return content;
}

console.log(readFile())