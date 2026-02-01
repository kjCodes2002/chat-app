import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Server } from "socket.io";
import http from "http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
    console.log("A user connected");
    socket.on('disconnect', () => {
        console.log("A user disconnected");
    })
    socket.on('chat message', (msg) => {
        console.log("Message: " + msg);
        io.emit('chat message', msg);
    })
})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});