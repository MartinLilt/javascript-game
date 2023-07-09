import Phaser from "phaser";
import "./assets/styles/index.css";
import tileSprite from "./assets/maps/snowy-sheet.png";
import map from "./assets/maps/map.json";
import player from "./assets/images/santa.png";

class mainScene {
  preload() {
    this.load.image("player", player);
    this.load.image("coin", player);
  }
  create() {
    this.score = 0;
    let style = { font: "20px Arial", fill: "#fff" };
    this.scoreText = this.add.text(20, 20, "score: " + this.score, style);
    this.player = this.physics.add.sprite(100, 100, "player");
    this.coin = this.physics.add.sprite(300, 300, "coin");
  }
}

const game = new Phaser.Game({
  type: Phaser.AUTO,
  backgroundColor: "#3498db",
  physics: { default: "arcade" },
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: mainScene,
  parent: "game",
});
