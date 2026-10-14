// Question 7: JSON Response
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/user" && req.method === "GET") {
        const user = { id: 1, name: "Raman", age: 22 };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(user));
    } else {
        res.writeHead(404);
        res.end("404 - Page Not Found");
    }
});

server.listen(5000, () => {
    console.log("Server started on port 5000");
});
