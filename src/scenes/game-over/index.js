export const gameOver = () => {
  add([text("Game Over"), pos(center()), anchor("center")]);
  add([
    sprite("bean"),
    pos(width() / 2, height() / 2 - 80),
    scale(2),
    anchor("center"),
  ]);

  // display score
  add([
    text(89),
    pos(width() / 2, height() / 2 + 80),
    scale(2),
    anchor("center"),
  ]);

  // go back to game with space is pressed
  onKeyPress("space", () => go("game-start"));
  onClick(() => go("game-start"));
};
