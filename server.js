const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 2999;
const express = require('express');
const app = express();
const server = http.createServer(function(req, res){
    app.get('style.css', (req, res) => {
        res.sendFile(path.join('style.css', 'public', 'style.css'));
    });
    res.writeHead(200, {'Content-Type' : 'text/html'});
    var filething = url.parse(req.url,true)
    var filename = "."+filething.pathname;
    fs.readFile(filename, function(error, data){
        if (error){
            res.writeHead(404);
            res.write("404\nNot Found\nThis page does not exist in the directory");
        } else {
            res.write(data);
        }
        res.end();
    });
});
server.listen(port, function(error){
    if (error){
        console.log('Uh oh...', error);
    } else {
        console.log('server is listening on port', port);
    }
});