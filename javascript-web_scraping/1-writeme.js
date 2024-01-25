#!/usr/bin/node
const fs = require('fs');

if (process.argv.length < 4) {
  console.error('Please provide both the file path and the string to write as arguments');
  process.exit(1);
}

const filePath = process.argv[2];
const contentToWrite = process.argv[3];

fs.writeFile(filePath, contentToWrite, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Content has been successfully written to ${filePath}`);
  }
});
