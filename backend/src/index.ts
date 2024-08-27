import express, { Application, Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";

const app: Application = express();
const server = http.createServer(app);

const io: Server = new Server(server);

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

app.get('/test', (req: Request, res: Response) => {
    res.status(200).send("Hello");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
