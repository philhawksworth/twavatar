'use strict';

const cheerio = require('cheerio');
const request = require('request');

export function handler(event, context, callback) {


  var size = event.queryStringParameters['size'];
  var user = event.queryStringParameters['user'];
  var option = {
    "small" : "_normal",
    "medium" : "_96",
    "large" : "_400x400"
  };

  console.log(`Fetch avatart URL for ${user} with these size parameters of ${option[size]}`);

  request('https://mobile.twitter.com/' + event.queryStringParameters['user'], function(err, response, body){


    // format the response to be a bit mor concise and return it to the client
    if(!err && response.statusCode === 200){
      const $ = cheerio.load(body);
      const avatar = ($('.avatar img').attr('src') || '').replace('_normal', option[size]);
      return callback(null, {
          statusCode: 200,
          headers: {"Content-Type": "application/json"},
          body: avatar
        })
      } else {
        return callback(null, {
          statusCode: 404,
          body: err
        })
      }
    })

}
