import kaboom from "kaboom";
import { gameStart } from "./scenes/game-start";
import { gameOver } from "./scenes/game-over";
import { intro } from "./scenes/intro";

kaboom({ background: [191, 219, 255] });
setGravity(1600);

scene("game-start", gameStart);
scene('intro',intro)
scene("game-over", gameOver);

go("game-start");
