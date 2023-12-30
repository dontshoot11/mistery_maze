import { CONST } from "./CONST/const";
import { context } from "./engine/engine";

export function toRadians(deg) {
	return (deg * Math.PI) / 180;
}
export function clearScreen() {
	context.fillStyle = "red";
	context.fillRect(0, 0, CONST.SCREEN_WIDTH, CONST.SCREEN_HEIGHT);
}
