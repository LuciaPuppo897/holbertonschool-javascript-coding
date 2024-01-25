#!/usr/bin/node
const request = require('request');

if (process.argv.length < 3) {
  console.error('Please provide the movie ID as an argument');
  process.exit(1);
}

const movieId = process.argv[2];

const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const movieData = JSON.parse(body);

    if (movieData.title) {
      console.log(movieData.title);
    } else {
      console.log('Movie not found');
    }
  }
});
