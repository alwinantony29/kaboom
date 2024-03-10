import { FLOOR_HEIGHT } from "../../const";

let SPEED = 320;

// add tree obj
export function spawnTree() {
  SPEED ++;
  add([
    sprite('aama'),
    // rect(48, rand(32, 96)),
    area(),
    // outline(4),
    pos(width(), height() - FLOOR_HEIGHT),
    anchor("botleft"),
    // color(255, 180, 255),
    move(LEFT, SPEED),
    "tree",
  ]);

  // wait a random amount of time to spawn next tree
  wait(rand(0.8, 1.8), spawnTree);
}
