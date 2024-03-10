const FLOOR_HEIGHT = 48;
const JUMP_FORCE = 800;
const SPEED = 480;

export const gameScene = () => {
  let score = 0;
  const scoreLabel = add([text(score), pos(24, 24)]);
  onUpdate(() => {
    score++;
    scoreLabel.text = score;
  });

  const bean = add([sprite("bean"), pos(80, 40), area(), body()]);
  function jump() {
    if (bean.isGrounded()) {
      bean.jump(JUMP_FORCE);
    }
  }

  // jump when user press space
  onKeyPress("space", jump);
  onClick(jump);

  // add platform
  add([
    rect(width(), 48),
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
  loop(rand(1, 3), () => {
    // add tree
    add([
      rect(48, rand(24, 64)),
      area(),
      outline(4),
      pos(width(), height() - 48),
      anchor("botleft"),
      color(255, 180, 255),
      move(LEFT, 240),
      "tree", // add a tag here
    ]);
  });
};
