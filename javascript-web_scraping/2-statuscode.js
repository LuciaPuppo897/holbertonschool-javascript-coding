#!/usr/bin/node
const request = require('request');

if (process.argv.length < 3) {
  console.error('Please provide the URL as an argument');
  process.exit(1);
}

const url = process.argv[2];

request.get(url, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
