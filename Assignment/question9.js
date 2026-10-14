// Question 9: Query Parameter - name
const http = require("http");

const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost:5000");

    if (url.pathname === "/user" && req.method === "GET") {
        const name = url.searchParams.get("name");
        res.end("Hello " + (name || "Guest"));
    } else {
        res.writeHead(404);
        res.end("404 - Page Not Found");
    }
});

server.listen(5000, () => {
    console.log("Server started on port 5000");
});
