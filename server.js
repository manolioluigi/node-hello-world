const http = require("http");

const dotenv = require("dotenv");
dotenv.config();

let port = process.env.PORT || 3000;

/**
 * @param {*} res
 * @param {*} content
 */

function htmlResponse(res, content) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
}

const host = process.env.HOST || "localhost";

/**
 * @param {http.ClientRequest} req
 * @param {http.ClientResponse} res
 */

const server = http.createServer(function (req, res) {
    htmlResponse(res, "<h1>Ciao</h1>");
});

server.listen(port, function () {
    console.log("Server is running on http://localhost:" + port);
});