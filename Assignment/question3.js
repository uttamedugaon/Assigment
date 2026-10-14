// Question 3: Create Multiple Routes
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end("Welcome to Node.js Server");
    } else if (req.url === "/about" && req.method === "GET") {
        res.end("This is About Page");
    } else if (req.url === "/contact" && req.method === "GET") {
        res.end("This is Contact Page");
    } else {
        res.writeHead(404);
        res.end("404 - Page Not Found");
    }
});

server.listen(5000, () => {
    console.log("Server started on port 5000");
});
