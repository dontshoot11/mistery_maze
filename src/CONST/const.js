import { toRadians } from "../helpers";

export const CONST = {
	SCREEN_WIDTH: window.innerWidth,
	SCREEN_HEIGHT: window.innerHeight,
	TICK: 30,
	CELL_SIZE: 32,
	FOV: toRadians(60),
	COLORS: {
		floor: "#d52b1e", // "#ff6361"
		ceiling: "#ffffff", // "#012975",
		wall: "#013aa6", // "#58508d"
		wallDark: "#012975", // "#003f5c"
		rays: "#ffa600",
	},
};

console.log(CONST);
