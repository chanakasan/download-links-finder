var express = require('express');
var Promise = require('bluebird');
var http = require('request');
var cheerio = require('cheerio');

var app = express();
app.use(express.static('public'));

http = Promise.promisifyAll(http);

app.get('/example', function(request, response) {

    http.getAsync('https://news.ycombinator.com').then(function(html) {
        console.log('html:');
        console.log(html.length);

        response.json(html);
    }).error(function(err) {
        console.log(err);
        response.sendStatus(400);
    });

});

module.exports = app;
