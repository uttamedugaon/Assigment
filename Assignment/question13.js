// Question 13: Add POST user to users array
const http = require("http");

const users = [];

const server = http.createServer((req, res) => {
    if (req.url === "/users" && req.method === "POST") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const user = JSON.parse(body);
                users.push(user);

                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    message: "User added successfully",
                    users: users
                }));
            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Invalid JSON" }));
            }
        });
    } else if (req.url === "/users" && req.method === "GET") {
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
