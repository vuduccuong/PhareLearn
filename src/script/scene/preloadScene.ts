import { kBackground, kLogo, kParticles } from "./../../utils/keys";
import { SceneKey } from "./../../utils/keys";

export default class Preload extends Phaser.Scene {
  constructor() {
    super({ key: SceneKey.Preload });
  }

  init() {
    console.log("init");
  }

  preload() {
    console.log("preload");
    //Load tất cả các nội dung bên ngoài: Hình ảnh, âm thanh, map, file..

    this.load.setBaseURL("http://labs.phaser.io");

    this.load.image(kBackground, "assets/skies/space3.png");
    this.load.image(kLogo, "assets/sprites/phaser3-logo.png");
    this.load.image(kParticles, "assets/particles/red.png");
  }

  create() {
    console.log("create");
    this.scene.start(SceneKey.Create);
  }
}
