export const intro = () => {

    add([text("Press Any Key to Start"), pos(center()), anchor("center")]);

  // go back to game with space is pressed
  onKeyPress("space", () => go("game-start"));
  onClick(() => go("game-start"));
};
