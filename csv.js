const http = require("http");

const host = 'goodpro.ddns.net';
const port = 8080;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
    res.writeHead(200);
    res.end(`id,name,email\n1,GoodPro712,goodpro712@gmail.com`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
