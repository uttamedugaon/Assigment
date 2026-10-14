// Question 10: Multiple Query Parameters
const http = require("http");

const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost:5000");

    if (url.pathname === "/user" && req.method === "GET") {
        const user = {
            name: url.searchParams.get("name"),
            age: url.searchParams.get("age")
        };

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
