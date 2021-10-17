import { kLogo } from "../../utils/keys";

export default class GameLogo extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, kLogo);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true);
  }
}
