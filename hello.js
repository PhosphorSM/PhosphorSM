const http = require("http");

const host = 'goodpro.ddns.net';
const port = 8080;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Phosphor!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
