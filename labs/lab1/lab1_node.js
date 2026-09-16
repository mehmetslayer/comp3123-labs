/* Purpose
We'll use Node to Create a Server and then listen on that server for any incoming requests.
Then return a response 

*/


var http = require("http")

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html" // the things in the curly braces is an object
    })
    res.end("The server is now running successfully and listening")

}).listen(8088)

// Optional homework: try another port number 