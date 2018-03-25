'use strict';

const cheerio = require('cheerio');
const request = require('request');

export function handler(event, context, callback) {

  request('https://mobile.twitter.com/' + event.queryStringParameters['user'], function(err, response, body){

    // format the response to be a bit mor concise and return it to the client
    if(!err && response.statusCode === 200){
      const $ = cheerio.load(body);
      const avatar = ($('.avatar img').attr('src') || '').replace('_normal', '_400x400');
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
