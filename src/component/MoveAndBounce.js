import { Vector2 } from "angry-pixel";

export class MoveAndBounce {
  boundaries = [476, -476, 896, -896]; // top, bottom, left, right
  direction = new Vector2(1, 1); // the direction in wich the entity will move
  speed = 200; // pixels per second
}
