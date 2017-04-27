var express = require('express');

// In Express 4, req.files is no longer available on the req object
// by default. To access uploaded files on the req.files object, use
// multipart-handling middleware like busboy, multer, formidable,
// multiparty, connect-multiparty, or pez.
var multer = require('multer');
var upload = multer({dest: 'uploads/'})

var app = express();
app.set('view engine', 'ejs');

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.render('index');
});

app.use('/assets', express.static(__dirname + '/public'));

// show file size of uploaded file
app.post('/upload', upload.single('file'), function (req, res, next) {
    res.json({ size: req.file.size });
});

app.listen(port);