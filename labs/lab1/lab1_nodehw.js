var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html" 
    })
    res.end("The server is now running successfully and listening")

}).listen(3000)