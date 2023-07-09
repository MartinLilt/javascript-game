const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const loadMap = require("./gameMapLoader/index");

const SPEED = 20;
const TICK_RATE = 30;
let players = [];
const inputsMap = {};

function tick() {
  for (const player of players) {
    const inputs = inputsMap[player.id];

    const dx = inputs.x - player.x;
    const dy = inputs.y - player.y;

    // Calculate the distance between the player's current position and the target position
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Check if the player has reached the target
    if (distance <= SPEED) {
      player.x = inputs.x;
      player.y = inputs.y;
    } else {
      // Calculate the normalized direction vector
      const directionX = dx / distance;
      const directionY = dy / distance;

      // Update the player's position based on the direction and speed (using whole values)
      player.x += Math.round(directionX * SPEED);
      player.y += Math.round(directionY * SPEED);
    }

    player.flagX = inputs.x;
    player.flagY = inputs.y;
  }

  io.emit("players", players);
}

async function main() {
  const map2D = await loadMap();

  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    inputsMap[socket.id] = {
      x: 0,
      y: 0,
    };

    players.push({ id: socket.id, x: 0, y: 0, flagX: 0, flagY: 0 });

    socket.emit("map", map2D);

    socket.on("target", (target) => {
      inputsMap[socket.id] = target;
    });

    socket.on("disconnect", () => {
      players = players.filter((player) => player.id !== socket.id);
      console.log(`User Disconnected: ${socket.id}`);
    });
  });

  setInterval(() => tick(), 1000 / TICK_RATE);
}

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});

main();
