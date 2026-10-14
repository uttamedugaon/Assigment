// Question 11: POST Request - receive body and print it
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/users" && req.method === "POST") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            console.log("Received body:", body);
            res.end("Data received successfully");
        });
    } else {
        res.writeHead(404);
        res.end("404 - Page Not Found");
    }
});

server.listen(5000, () => {
    console.log("Server started on port 5000");
});
