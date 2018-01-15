const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./server/api/');

const app = express();

app.use('/api', api);
app.use('/public', express.static(__dirname + '/app/public'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});

//Enable bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Enable CORS
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
 next();
});

//Get environment port or use 3000
const port = process.env.PORT || '3000';
app.set('port', port);

//Create HTTP server.
const server = http.createServer(app);

//Listen on port
server.listen(port);
