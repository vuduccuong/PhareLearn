import GameLogo from "../objects/gameLogo";
import { kBackground, kParticles } from "./../../utils/keys";
import { SceneKey } from "./../../utils/keys";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: SceneKey.Create });
  }

  create() {
    this.add.image(400, 300, kBackground);

    const particles = this.add.particles(kParticles);

    const emitter = particles.createEmitter({
      speed: 200,
      scale: { start: 2, end: 0 },
      blendMode: "ADD",
    });

    const logo = new GameLogo(this, 400, 100);

    emitter.startFollow(logo);
  }

  update() {}
}
