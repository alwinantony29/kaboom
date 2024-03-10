import { FLOOR_HEIGHT, JUMP_FORCE } from "../../const";
import { spawnTree } from "./spawn-tree";

export const gameStart = () => {
  let scorePoint = 0;
  const score = add([text("Score: 0"), pos(24, 24)]);

  onUpdate(() => {
    scorePoint++;
    score.text = "Score:" + scorePoint;
  });

  const bean = add([sprite("bean"), pos(80, 40), area(), body(), "player"]);

  function jump() {
    // if (bean.isGrounded()) {
    bean.jump(JUMP_FORCE);
    // }
  }

  // jump when user press space
  onKeyPress("space", jump);
  onClick(jump);

  // add platform
  add([
    rect(width(), FLOOR_HEIGHT),
    pos(0, height() - 48),
    outline(4),
    area(),
    body({ isStatic: true }),
    color(127, 200, 255),
  ]);

  bean.onCollide("tree", () => {
    addKaboom(bean.pos);
    shake();
    go("game-over");
  });

  // add tree every second
  spawnTree();
};
