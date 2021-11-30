
const fs = require('fs');
const path = require('path');

// EXO 1 

//console.log("Bonjour, Monde");

// EXO 2 

/*
let somme = 0;

for (var i = 2; i<process.argv.length; i++){

    somme += Number(process.argv[i])
}
console.log(somme)
*/

// EXO 3

/*

var data = fs.readFileSync(process.argv[2]); 
var dataArr = data.toString('utf8').split('\n'); 

console.log(dataArr.length -1);
*/

// EXO 4 

/*
let linesArr = undefined;
let lines = undefined;

function countLines(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    linesArr = fileContents.toString('utf8').split('\n'); 
    lines = linesArr.length -1
    callback()
  })
}

function call(){
    console.log(lines)
}

countLines(call)
*/

// EXO 5

/*
let filePath = undefined;
let fileExt = [];

function countLines(callback) {
  fs.readdir(process.argv[2], function doneReading(err, fileContents) {
    
    for (var i = 0; i<fileContents.length; i++){
        if (path.extname(fileContents[i].toString('utf8')) == '.' + process.argv[3].toString('utf8')){
            fileExt.push(fileContents[i])   
        }
    }
    callback()
  })
}

function call(){
    for (var j = 0; j<fileExt.length; j++){
        console.log(fileExt[j])
    }
}

countLines(call)
*/

// EXO 6

/*
const filterFn = require('./module.js');
const dir = process.argv[2];
const filter = process.argv[3];

filterFn(dir, filter, function (err, list) {
    if (err) {
        return console.error('There was an error:', err);
    }

    list.forEach(function (file) {
        console.log(file);
    })
})
*/

// EXO 7

