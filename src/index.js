import { initControls } from "./controls";
import { movePlayer } from "./movement";
import { CONST } from "./CONST/const";
import { clearScreen } from "./helpers";
import { player } from "./player";
import { getRays, renderScene, renderMinimap } from "./engine/engine";

function gameLoop() {
	clearScreen();
	movePlayer(player);
	const rays = getRays();
	renderScene(rays);
	renderMinimap(0, 0, 0.25, rays);
}

setInterval(gameLoop, CONST.TICK);

initControls();
