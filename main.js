require('dotenv').config()
const http = require("http");
const fs = require('fs').promises;

let indexFile;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
};

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(process.env.PORT, process.env.HOST, () => {
            console.log(`Server is running on http://${process.env.HOST}:${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });
