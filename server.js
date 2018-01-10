const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

app.use('/public', express.static(__dirname + '/app/public'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});

//Get environment port or use 3000
const port = process.env.PORT || '3000';
app.set('port', port);

//Create HTTP server.
const server = http.createServer(app);

//Listen on port
server.listen(port);
