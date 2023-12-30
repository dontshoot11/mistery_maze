import { CONST } from "./CONST/const";
import { toRadians } from "./helpers";

export const player = {
	x: CONST.CELL_SIZE * 1.5,
	y: CONST.CELL_SIZE * 2,
	width: CONST.CELL_SIZE / 2,
	height: CONST.CELL_SIZE / 2,
	angle: toRadians(0),
	speed: 0,
};
