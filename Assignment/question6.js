// Question 6: URL + Method
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end("Home Page");
    } else if (req.url === "/users" && req.method === "GET") {
        res.end("Users Page");
    } else if (req.url === "/products" && req.method === "GET") {
        res.end("Products Page");
    } else {
        res.writeHead(404);
        res.end("404 - Page Not Found");
    }
});

server.listen(5000, () => {
    console.log("Server started on port 5000");
});
