import io from "socket.io-client";
import { useRef, useEffect } from "react";
import { windowResizer } from "./helpers/windowResizer";
import imageMap from "./assets/images/snowy-sheet.png";
import imageEntity from "./assets/images/santa.png";

const Game = () => {
  const socket = io.connect("http://localhost:3001");
  const ref = useRef(null);

  const mapImage = new Image();
  mapImage.src = imageMap;

  const entityImage = new Image();
  entityImage.src = imageEntity;

  socket.on("connect", () => {
    console.log("connected");
  });

  let map = [[]];
  let players = [];
  const TILE_SIZE = 32;

  socket.on("map", (loadedMap) => {
    map = loadedMap;
  });

  socket.on("players", (serverPlayers) => {
    players = serverPlayers;
  });

  const handleCanvasClick = (e) => {
    const canvas = ref.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    socket.emit("target", { x, y });
  };

  useEffect(() => {
    windowResizer();
    const canvas = ref.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const myPlayer = players.find((player) => player.id === socket.id);
      let cameraX = 0;
      let cameraY = 0;
      let cameraFlagX = 0;
      let cameraFlagY = 0;
      if (myPlayer) {
        cameraX = parseInt(myPlayer.x - canvas.width / 2);
        cameraY = parseInt(myPlayer.y - canvas.height / 2);
        cameraFlagX = myPlayer ? myPlayer.flagX - cameraX + canvas.width / 2 : 0;
        cameraFlagY = myPlayer ? myPlayer.flagY - cameraY + canvas.height / 2 : 0;
      }

      const TILES_IN_ROW = 8;

      for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[0].length; col++) {
          const { id } = map[row][col];
          const imageRow = parseInt(id / TILES_IN_ROW);
          const imageCol = id % TILES_IN_ROW;

          ctx.drawImage(
            mapImage,
            imageCol * TILE_SIZE,
            imageRow * TILE_SIZE,
            TILE_SIZE,
            TILE_SIZE,
            col * TILE_SIZE,
            row * TILE_SIZE,
            TILE_SIZE,
            TILE_SIZE
          );
        }
      }

      for (const player of players) {
        ctx.fillStyle = "red";
        ctx.fillRect(
          player.flagX,
          player.flagY,
          TILE_SIZE,
          TILE_SIZE
        );
        ctx.drawImage(entityImage, player.x, player.y);
      }

      window.requestAnimationFrame(loop);
    };

    window.requestAnimationFrame(loop);
  }, []);

  return <canvas ref={ref} onClick={handleCanvasClick}></canvas>;
};

export default Game;
