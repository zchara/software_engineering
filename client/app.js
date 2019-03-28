const express = require('express');
var fs = require('fs')
var https = require('https')
var app = express();
app.set('view engine', 'ejs');
app.use("/includes", express.static(__dirname + '/views/includes'));
app.use("/views", express.static(__dirname + '/views'));
app.get('/', function(req, res) {
    res.render('homepage', {
        root: __dirname + '/views'
    });
});
app.get('/register', function(req, res) {
    console.log('yeah')
    res.render('register', {
        root: __dirname + '/views'
    });
});
app.get('/addprice', function(req, res) {
    res.render('addPrice', {
        root: __dirname + '/views'
    });
});
app.get('/addactivity', function(req, res) {
    res.render('addActivity', {
        root: __dirname + '/views'
    });
});
app.get('/login', function(req, res) {
    res.render('login', {
        root: __dirname + '/views'
    });
});
app.get('/addsportscenter', function(req, res) {
    res.render('addSportsCenter', {
        root: __dirname + '/views'
    });
});
app.get('/editprofile', function(req, res) {
    res.render('editProfile', {
        root: __dirname + '/views'
    });
});
app.get('/viewprice', function(req, res) {
    res.render('viewActivityPrice', {
        root: __dirname + '/views'
    });
});
app.get('/selectSportscenter', function(req, res) {
    res.render('searchResults', {
        root: __dirname + '/views'
    });
});
app.get('/faqs', function(req, res) {
    res.render('faqs', {
        root: __dirname + '/views'
    });
});
app.get('/contact', function(req, res) {
    res.render('contact', {
        root: __dirname + '/views'
    });
});
app.get('/tutorials', function(req, res) {
    res.render('tutorials', {
        root: __dirname + '/views'
    });
});
app.get('/terms', function(req, res) {
    res.render('terms', {
        root: __dirname + '/views'
    });
});
app.get('/search', function(req, res) {
    res.render('searchResults', {
        root: __dirname + '/views',
        articles: "articles"
    });
});
app.get('*', function(req, res) {
    res.render('oops', {
        root: __dirname + '/views'
    });
});
https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(3000, function() {
    console.log('Server running on https://localhost:3000/')
})