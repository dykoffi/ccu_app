const express = require('express');
const http = require('http')
const favicon = require('express-favicon');
const path = require('path');
const app = express();
const port = process.env.PORT || 3620;

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) { res.sendFile(path.join(__dirname, 'build', 'index.html')); });
http.createServer(app).listen(port);