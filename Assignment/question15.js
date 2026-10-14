// Question 15: POST validation + automatically generated ID
const http = require("http");

const users = [];
let nextId = 1;

const server = http.createServer((req, res) => {
    if (req.url === "/users" && req.method === "POST") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const data = JSON.parse(body);

                const nameIsMissing =
                    typeof data.name !== "string" || data.name.trim() === "";
                const ageIsMissing =
                    data.age === undefined || data.age === null || data.age === "";

                if (nameIsMissing || ageIsMissing) {
                    res.writeHead(400, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({
                        message: "Name and age are required"
                    }));
                    return;
                }

                const user = {
                    id: nextId++,
                    name: data.name.trim(),
                    age: data.age
                };

                users.push(user);

                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    message: "User added successfully",
                    user: user
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
