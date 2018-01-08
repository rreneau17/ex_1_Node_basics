const http = require('http');
const fs = require('fs');

let file1 = 'file1.txt';
let readit = fs.readFile(file1, (err, data) => {
    console.log('Filename: ' + file1);
}); 


