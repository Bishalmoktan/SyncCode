import express, { Application, Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";
import { ACTIONS } from "./actions";

const app: Application = express();
const server = http.createServer(app);

const io: Server = new Server(server);

interface UserSocketMap {
    [socketId: string]: string;
  }

const userSocketMap: UserSocketMap = {};
function getAllConnectedClients(roomId: string) {
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId,
        name: userSocketMap[socketId],
      };
    }
  );
}

io.on("connection", (socket) => {
  console.log("User connected: ", socket.id);

  socket.on(ACTIONS.JOIN, ({ roomId, name }) => {
    userSocketMap[socket.id] = name;
    socket.join(roomId);
    const clients = getAllConnectedClients(roomId);
    clients.forEach(({ socketId }) => {
      io.to(socketId).emit(ACTIONS.JOINED, {
        clients,
        name,
        socketId: socket.id,
      });
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

export default server;
