var request = require('request');
var express = require('express');
var app = express();

var q = "";
var limit = "";

app.get('/meliProxy', function(req, res) {
    console.log("req.query.q ", req.query.q);
    console.log("req.query.limit ", req.query.limit);
    q = req.query.q;
    limit = req.query.limit;

    request('https://api.mercadolibre.com/sites/MLA/search?q=' + q + '&limit=' + limit, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var myJson = JSON.parse(body);
            res.json(myJson.results);
        }
    });
});

var server = app.listen(8045, function() {
    console.log("servidor corriendo");
});
