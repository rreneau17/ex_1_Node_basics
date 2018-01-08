const http = require('http');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Filename: ', (answer) => {
    fs.readFile(answer, 'ascii', (err, data) => {
        console.log(data.toUpperCase());
    });
    rl.close();
  });




