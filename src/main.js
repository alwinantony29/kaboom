import kaboom from "kaboom";

kaboom();
loadSprite("bean", "sprites/bean.png");

const bean = add([sprite("bean"), pos(80, 40), area(), body()]);
// add platform
add([
  rect(width(), 48),
  pos(0, height() - 48),
  outline(4),
  area(),
  body({ isStatic: true }),
  color(127, 200, 255),
]);
// add tree
add([
  rect(48, 64),
  area(),
  outline(4),
  pos(width(), height() - 48),
  anchor("botleft"),
  color(255, 180, 255),
  move(LEFT, 240),
  "tree",
]);

setGravity(1600);
onKeyPress("space", () => {
  if (bean.isGrounded()) {
    bean.jump();
  }
});

onClick(() => addKaboom(mousePos()));

bean.onCollide("tree", () => {
  addKaboom(bean.pos);
  shake();
});
