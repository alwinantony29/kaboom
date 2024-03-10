import kaboom from "kaboom";
import { gameScene } from "./scenes/game-scene";

kaboom();
loadSprite("bean", "sprites/bean.png");
setGravity(1600);

scene("game-start", gameScene);

scene("game-over", (score) => {
	debug.log(score)
  add([text("Game Over"), pos(center()), anchor("center")]);
  add([
    sprite("bean"),
    pos(width() / 2, height() / 2 - 80),
    scale(2),
    anchor("center"),
  ]);

  // display score
  add([
    text(score),
    pos(width() / 2, height() / 2 + 80),
    scale(2),
    anchor("center"),
  ]);

  // go back to game with space is pressed
  onKeyPress("space", () => go("game-start"));
  onClick(() => go("game-start"));
});

go("game");
