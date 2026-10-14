// Question 1: Create HTTP Server
// Answer:
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello World");
});

server.listen(5000, () => {
    console.log("Server started on port 5000");
});
