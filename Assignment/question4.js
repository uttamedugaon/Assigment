// Question 4: Handle Unknown URLs
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to Node.js Server");
    } else if (req.url === "/about") {
        res.end("About Page");
    } else if (req.url === "/contact") {
        res.end("Contact Page");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Page Not Found");
    }
});

server.listen(5000, () => {
    console.log("Server started on port 5000");
});
