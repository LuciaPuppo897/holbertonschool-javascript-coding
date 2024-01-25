#!/usr/bin/node
const request = require('request');

if (process.argv.length < 3) {
  console.error('Please provide the Star Wars API URL as an argument');
  process.exit(1);
}

const apiUrl = process.argv[2];

const wedgeAntillesId = 18;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const filmsData = JSON.parse(body);

    const filmsWithWedgeAntilles = filmsData.results.filter((film) =>
      film.characters.includes(`https://swapi-api.hbtn.io/api/people/${wedgeAntillesId}/`)
    );

    console.log(filmsWithWedgeAntilles.length);
  }
});
