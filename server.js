var express = require('express');
var multer = require('multer');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('ok');

});

app.listen(port);