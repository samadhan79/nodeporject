const http = require('http')
const fs = require('fs')
const { json } = require('stream/consumers')
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile(`${(__dirname)}/users.json`, 'utf8', function (err, data) {
            res.end(data);
        });
    }
    if (req.url == '/add') {
        var user = {
            "user4": {
                "name": "mohit",
                "password": "password4",
                "profession": "teacher",
                "id": 4
            }
        }
        fs.readFile(`${(__dirname)}/users.json`, 'utf8', function (err, data) {
            data = JSON.parse(data);

            data["user4"] = user["user4"];
            console.log(data);
            res.end(JSON.stringify(data));
        });
    }


}).listen(3000, function () {
    console.log("server running on 3000")
})