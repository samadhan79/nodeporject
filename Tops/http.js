const http = require('http');
const server = http.createServer((req, res) => {
    res.write("<h1>ffff</h1>")
    
})

server.listen(8080, () => {
    console.log("running on  port : 8080")
})

