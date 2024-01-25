#!/usr/bin/node
const request = require('request');
const fs = require('fs');

if (process.argv.length < 4) {
  console.error('Please provide both the URL and the file path as arguments');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    fs.writeFile(filePath, body, 'utf-8', (writeError) => {
      if (writeError) {
        console.error(writeError);
      } else {
        console.log(`Body response has been stored in ${filePath}`);
      }
    });
  }
});
