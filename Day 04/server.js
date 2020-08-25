var http = require('http');

let jsonObj = {
    'Username': 'Omar Shatta',
    'Age': '2020'
}
let responseTxt = JSON.stringify(jsonObj)

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World! from node  server</h1>');

}).listen(8000)

