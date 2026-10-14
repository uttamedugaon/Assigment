// Question 5: Use req.method
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.end("GET request received");
    } else {
        res.writeHead(405, { "Content-Type": "text/plain" });
        res.end("Method Not Allowed");
    }
});

server.listen(5000, () => {
    console.log("Server started on port 5000");
});
