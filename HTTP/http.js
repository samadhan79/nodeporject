const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url == "/login") {
        res.end("<h1>Login</h1>")
        console.log(req.path)
    } else if (req.url == "/signup") {
        res.end("<h1>Signup</h1>")
    } else {
        res.writeHead(404,{'Content-type':'text/html'})
        res.end("<h1>Not Found</h1>")
        
    }
    
}).listen(8080, '127.0.0.1', () => {
    console.log("Completely Runing....on 8080")
})