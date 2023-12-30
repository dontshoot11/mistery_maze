import { CONST } from "./CONST/const";
import { player } from "./player";
import { map } from "./map";

const playerPadding = 0.1 * CONST.CELL_SIZE; // Например, 10% от размера ячейки

export function movePlayer() {
	const moveStep = player.speed;
	const potentialX = player.x + Math.cos(player.angle) * moveStep;
	const potentialY = player.y + Math.sin(player.angle) * moveStep;

	if (!checkCollision(potentialX, player.y, playerPadding)) {
		player.x = potentialX;
	}

	if (!checkCollision(player.x, potentialY, playerPadding)) {
		player.y = potentialY;
	}
}

export function checkCollision(x, y, padding) {
	const corners = getPlayerCorners(x, y, padding);
	for (const corner of corners) {
		if (isWallAt(corner.x, corner.y)) {
			return true;
		}
	}
	return false;
}

function getPlayerCorners(x, y, padding) {
	return [
		{ x: x - player.width / 2 - padding, y: y - player.height / 2 - padding },
		{ x: x + player.width / 2 + padding, y: y - player.height / 2 - padding },
		{ x: x - player.width / 2 - padding, y: y + player.height / 2 + padding },
		{ x: x + player.width / 2 + padding, y: y + player.height / 2 + padding },
	];
}

function isWallAt(x, y) {
	const cellX = Math.floor(x / CONST.CELL_SIZE);
	const cellY = Math.floor(y / CONST.CELL_SIZE);
	return map[cellY] && map[cellY][cellX] === 1;
}
