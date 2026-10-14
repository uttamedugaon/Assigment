// Question 8: Array Response - GET /users
const http = require("http");

const users = [
    { id: 1, name: "Raman", age: 22 },
    { id: 2, name: "Amit", age: 28 },
    { id: 3, name: "Rahul", age: 25 },
    { id: 4, name: "Sudhir", age: 30 },
    { id: 5, name: "Vikas", age: 24 }
];

const server = http.createServer((req, res) => {
    if (req.url === "/users" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    } else {
        res.writeHead(404);
        res.end("404 - Page Not Found");
    }
});

server.listen(5000, () => {
    console.log("Server started on port 5000");
});
