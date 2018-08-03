import Vec2D from './Vec2D';

export default class Point2D {
	constructor(x = 0, y = 0) {
		this.components = new Float32Array(2);
		this.components.set([x, y], 0);
	}
	get x() {
		return this.components[0];
	}
	set x(x) {
		this.components[0] = x;
	}
	get y() {
		return this.components[1];
	}
	set y(y) {
		this.components[1] = y;
	}
	translate([x, y] = [0, 0]) {
		this.x += x;
		this.y += y;
		return this;
	}
	translateX(x = 0) {
		this.x += x;
		return this;
	}
	translateY(y = 0) {
		this.y += y;
		return this;
	}
	lerp([x, y] = [0, 0], amount = 0.1) {
		this.components.lerp(components, amount);
		return this;
	}
	add([x, y] = [0, 0]) {
		return this.translate(components);
	}
	addX([x, y] = [0, 0]) {
		return this.translateX(x);
	}
	addY([x, y] = [0, 0]) {
		return this.translateY(y);
	}
	sub([x, y] = [0, 0]) {
		return this.translate(-x, -y);
	}
	subX([x, y] = [0, 0]) {
		return this.translateX(-x);
	}
	subY([x, y] = [0, 0]) {
		return this.translateY(-y);
	}
	multiply(scalar = 1) {
		this.x *= scalar;
		this.y *= scalar;
		return this;
	}
	multiplyX(x = 1) {
		this.x *= x;
		return this;
	}
	multiplyY(y = 1) {
		this.y *= y;
		return this;
	}
	distanceTo([x, y] = [0, 0]) {
		return sqrt(pow(x - this.x, 2) + pow(y - this.y, 2));
	}
	angleTo([x, y] = [0, 0]) {
		return atan2(y - this.y, x - this.x);
	}
	angleToDeg([x, y] = [0, 0]) {
		return atan2(y - this.y, x - this.x) * TO_DEG;
	}
	vectorBetween(components = [0, 0]) {
		return Vec2D.fromDirAndMag(this.angleTo(components), this.distanceTo(components));
	}
	clone() {
		return new Point2D(this.x, this.y);
	}
}