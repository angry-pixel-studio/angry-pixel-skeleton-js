import { Scene } from "angry-pixel";
import { ASSETS } from "../config/assets";
import { camera } from "../entity/Camera";
import { logo } from "../entity/logo";
import { MoveAndBounceSystem } from "../system/MoveAndBounceSystem";

export class MainScene extends Scene {
  loadAssets() {
    Object.values(ASSETS.images).forEach((filename) =>
      this.assetManager.loadImage(filename)
    );
    Object.values(ASSETS.fonts).forEach((data) =>
      this.assetManager.loadFont(data.name, data.url)
    );
    Object.values(ASSETS.audio).forEach((filename) =>
      this.assetManager.loadAudio(filename)
    );
    Object.values(ASSETS.video).forEach((filename) =>
      this.assetManager.loadVideo(filename)
    );
  }

  loadSystems() {
    this.systems = [MoveAndBounceSystem];
  }

  setup() {
    this.entityManager.createEntity(camera);
    this.entityManager.createEntity(logo);
  }
}
