/*
Purpose: This is the main entry point into our 
Node.js server

We will set up server paths to the following:

-> /

-> /users

-> /userlist

-> /name

*/

let http = require("http")
let fs = require("fs")
let users = require("./data") //namespace


const PORT = 8088

var server = http.createServer((req,res) =>{
    if(req.url == "/"){
        res.write("<h1>Node.js server at the root path</h1>")
        res.write("<p>You can go to the other paths to view their server writes as well: Try /name, /users, or /userlist</p>")
        res.end()

    }
    if(req.url == "/name"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write("<article>Mehmet Emin Onem</article>")
        res.end()

    }
    if(req.url == "/users"){
        // Convert JSON object from data.js -> JSON string right here. main.js
        let data = JSON.stringify(users.users.id) // We need to use the dot operator to get the property 
        //(ie, exported variable users from the namespace users)
        res.write(data)
        res.end()

    }
    if(req.url == "/userlist"){
        fs.readFile(__dirname + "/employees.json", "utf8", (error, data) => {
            res.write(data)
            res.end()
        })



    }
})

server.listen(PORT)
console.log("The server started at this port" + PORT)