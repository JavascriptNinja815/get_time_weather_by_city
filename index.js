let request = require('request');
let moment = require('moment-timezone');
let cityTimezones = require('city-timezones');

//for weather api
let apiKey = '67315e21170aefce822668d861df0cd4';

//input parameter
let city = 'Dalian';

//get weather by cityname
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    console.log(weather);
  }
});

//get time by cityname
let cityLookup = cityTimezones.lookupViaCity(city);
let timezone = cityLookup[0].timezone;
let currentTime = moment.tz(timezone).format();
console.log('time', currentTime);