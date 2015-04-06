var express = require('express');
var Promise = require('bluebird');
var http = require('request');
var cheerio = require('cheerio');

var app = express();
app.use(express.static('public'));

http = Promise.promisifyAll(http);

app.get('/example', function(request, response) {

    http.getAsync('https://news.ycombinator.com').spread(function(raw_response, html) {
        var collection = [];
        var $ = cheerio.load(html);

        console.log('title:');
        console.log($('title').text());

        $('span.sitebit.comhead').each(function(i, element){
            var a = $(this).prev();
            var rank = a.parent().parent().text();
            var title = a.text();
            var url = a.attr('href');
            var subtext = a.parent().parent().next().children('.subtext').children();
            var points = $(subtext).eq(0).text();
            var username = $(subtext).eq(1).text();
            var comments = $(subtext).eq(2).text();

            // Our parsed meta data object
            var metadata = {
                rank: parseInt(rank),
                title: title,
                url: url,
                points: parseInt(points),
                username: username,
                comments: parseInt(comments)
            };

            collection.push(metadata);
        });

        response.json(collection);
    }).error(function(err) {
        console.log(err);
        response.sendStatus(400);
    });

});

module.exports = app;
