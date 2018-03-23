const request = require('request');
const argv = require('yargs').argv;

let apiKey = '878c3ce57f5ce51151b9078f5257eea4';
let city = argv.c || 'hangzhou';
let url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

request(url, function(err, response, body) {
  if (err) {
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in
               ${weather.name}!`;
    // console.log('weather:', weather);
    console.log(message);
  }
});
