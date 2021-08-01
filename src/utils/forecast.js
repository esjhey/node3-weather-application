const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=759f79f348106f873f2a6ffc68195f8c&query=' +
    latitude +
    ',' +
    longitude +
    '&units=m';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (body.error) {
      callback('Unable to find the locion', undefined);
    } else {
      // console.log(body.daily.data[0]);
      callback(
        undefined,
        `${body.current.weather_descriptions}. It is currently ${body.current.temperature} degrees out. 
        The humidity is ${body.current.humidity}. There is a ${body.current.feelslike}% chance of rain `
      );
    }
  });
};

module.exports = forecast;
