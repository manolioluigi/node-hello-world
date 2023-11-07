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

const arrayFrasi = ["Prima ti ignorano, poi ti deridono, poi ti combattono. Poi vinci.", "E' nel momento delle decisioni che si plasma il tuo destino.", "Niente e' davvero difficile se lo si divide in tanti piccoli pezzettini.", "Trasforma le tue ferite in saggezza.", "Innamorati prima di te, poi della vita.", "Se perdi qualcuno ma trovi te stessa hai vinto."];

function fraseRandom() {
    let random = arrayFrasi[Math.floor(Math.random() * arrayFrasi.length)];
    return random;
}

const server = http.createServer(function (req, res) {
    htmlResponse(res, "<h1>" + process.env.FRASE + "</h1><br><h1>" + fraseRandom() + "</h1>");
});

server.listen(port, function () {
    console.log("Server is running on http://localhost:" + port);
});