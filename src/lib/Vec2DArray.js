import Vec2D from "./Vec2D";

export default class Vec2DArray {
	constructor(count = 0, max = 0) {
		this.count = count || max;
    this.max = max;
    this.x = new Float32Array(max);
    this.y = new Float32Array(max);
	}
	get(i) {
		return [this.x[i], this.y[i]];
	}
	getVec2D(i) {
		return new Vec2D(this.x[i], this.y[i]);
	}
	getX(i) {
		return this.x[i];
	}
	getY(i) {
		return this.y[i];
	}
	set(i, x, y) {
		this.x[i] = x;
		this.y[i] = y;
		return this;
	}
	setX(i, x) {
		this.x[i] = x;
		return this;
	}
	setY(i, y) {
		this.y[i] = y;
		return this;
	}
}