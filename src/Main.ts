import "phaser";
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from "./utils/constraints";
import Preload from "./script/scene/preloadScene";
import MainScene from "./script/scene/mainScene";

const config = {
  type: Phaser.AUTO,
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 800 },
    },
  },
  scene: [Preload, MainScene],
};

window.addEventListener("load", () => {
  new Phaser.Game(config);
});
