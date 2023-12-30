import { canvas } from "./engine/engine";
import { player } from "./player";
import { toRadians } from "./helpers";

export const initControls = () => {
	canvas.addEventListener("click", () => {
		//canvas.requestPointerLock();
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "w") {
			player.speed = 1;
		}
		if (e.key === "s") {
			player.speed = -1;
		}
		if (e.key === "a") {
			player.angle -= toRadians(5);
		}
		if (e.key === "d") {
			player.angle += toRadians(5);
		}
	});

	document.addEventListener("mousemove", function (event) {
		//	player.angle += toRadians(event.movementX);
	});

	document.addEventListener("keyup", (e) => {
		if (e.key === "w" || e.key === "s") {
			player.speed = 0;
		}
	});
};
