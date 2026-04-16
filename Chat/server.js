const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static("public"));

wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.on("message", (msg) => {
        try {
            const data = JSON.parse(msg);

            const payload = {
                name: data.name || "Unknown",
                message: data.message || ""
            };

            // broadcast to all clients
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(payload));
                }
            });

        } catch (err) {
            console.log("Invalid message received");
        }
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});