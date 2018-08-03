import { sqrt, pow, cos, sin, atan2, TO_DEG } from './Constants';

/** 
 * @class Vec2D 
 * @author Sean Free
 * 2D Vector class
 * Unless a method returns a specific value,
 * 'this' will be returned,
 * allowing for chaining of methods
 * @example
 * let vec3 = 
 *   vec1
 *     .add(vec2.components)
 *     .rotate(Math.PI)
 *     .scale(2)
 *     .clone()
 *     .norm;
 */

export default class Vec2D {
	/**
	 * Create a new Vec2D
	 * @param {Number} x - x-axis value
	 * @param {Number} y - y-axis value
	*/
	constructor(x = 0, y = 0) {
		if ("number" !== typeof x) {
			throw new TypeError("x value must be a number");
		}
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number");
		}
		this.components = new Float32Array(2);
		this.components.set([x, y], 0);
	}
	/**
	 * Static method to create a new Vec2D from direction and magnitude
	 * @param {Number} d - direction (angle) in radians
	 * @param {Number} m - magnitude (length)
	 * @returns {Vec2D}
	 * @example
	 * Vec2D.fromDirAndMag(1,1)
	 */
	static fromDirAndMag(d = 0, m = 1) {
		return new Vec2D(m * cos(d), m * sin(d));
	}
	/**
	 * Get the x-axis value
	 * @returns {Number}
	 */
	get x() {
		return this.components[0];
	}
	/**
	 * Set the x-axis value
	 * @param {Number} x - x-axis value
	 * @example
	 * vec.x = 5;
	 */
	set x(x) {
		this.components[0] = x;
	}
	/**
	 * Get the y-axis value
	 * @returns {Number}
	 */
	get y() {
		return this.components[1];
	}
	/**
	 * Set the y-axis value
	 * @param {Number} y - y-axis value
	 * @example
	 * vec.y = 5;
	 */
	set y(y) {
		this.components[1] = y;
	}
	/**
	 * Get the vector's direction (length) in radians
	 * @returns {Number} 
	 */
	get direction() {
		return atan2(this.y, this.x);
	}
	/**
	 * Get the vector's direction (length) in degrees
	 * @returns {Number} 
	 */
	get directionDeg() {
		return this.direction * TO_DEG;
	}
	/**
	 * Get the vector's magnitude (length)
	 * @returns {Number} 
	 */
	get magnitude() {
		return sqrt(pow(this.x, 2) + pow(this.y, 2));
	}
	/**
	 * Get the norm vector
	 * @returns {Vec2D}
	 */
	get unit() {
		return new Vec2D(this.x / this.magnitude, this.y / this.magnitude);
	}
	/**
	 * Add the supplied components (x, y values)
	 * @param {Array} components[x,y]
	 * @returns {Vec2D} current scope
	 * @example
	 * vec.add([1,1])
	 * vec1.add(vec2.components)
	 */
	add([x, y] = [0, 0]) {
		this.x += x;
		this.y += y;
		return this;
	}
	/**
	 * Add the x value from supplied components
	 * @param {Array} components[x,y]
	 * @returns {Vec2D} current scope
	 * @example
	 * vec.addX([1,1])
	 * vec1.addX(vec2.components)
	 */
	addX([x, y] = [0, 0]) {
		this.x += x;
		return this;
	}
	/**
	 * Add the y value from supplied components
	 * @param {Array} components[x,y]
	 * @returns {Vec2D} current scope
	 * @example
	 * vec.addY([1,1])
	 * vec1.addY(vec2.components)
	 */
	addY([x, y] = [0, 0]) {
		this.y += y;
		return this;
	}
	/**
	 * Subtract the supplied components (x, y values)
	 * @param {Array} components[x,y]
	 * @returns {Vec2D} current scope
	 * @example
	 * vec.sub([1,1])
	 * vec1.sub(vec2.components)
	 */
	sub([x, y] = [0, 0]) {
		this.x -= x;
		this.y -= y;
		return this;
	}
	/**
	 * Subtract the x value from supplied components
	 * @param {Array} components[x,y]
	 * @returns {Vec2D} current scope
	 * @example
	 * vec.subX([1,1])
	 * vec1.subX(vec2.components)
	 */
	subX([x, y] = [0, 0]) {
		this.x -= x;
		return this;
	}
	/**
	 * Subtract the y value from supplied components
	 * @param {Array} components[x,y]
	 * @returns {Vec2D} current scope
	 * @example
	 * vec.subY([1,1])
	 * vec1.subY(vec2.components)
	 */
	subY([x, y] = [0, 0]) {
		this.y -= y;
		return this;
	}
	/**
	 * Scale (multiply) x and y by the supplied value
	 * @param {Number} scalar 
	 * @returns {Vec2D} current scope
	 * @example
	 * vec.scale(2)
	 */
	scale(scalar = 1) {
		this.x *= scalar;
		this.y *= scalar;
		return this;
	}
	/**
	 * Scale (multiply) x by the supplied value
	 * @param {Number} x 
	 * @returns {Vec2D} current scope
	 * @example
	 * vec.scale(2)
	 */
	scaleX(x = 1) {
		this.x *= x;
		return this;
	}
	/**
	 * Scale (multiply) y by the supplied value
	 * @param {Number} y 
	 * @returns {Vec2D} current scope
	 * @example
	 * vec.scale(2)
	 */
	scaleY(y = 1) {
		this.y *= y;
		return this;
	}
	/**
	 * Rotate by the supplied value
	 * @param {Number} theta - rotation amount in radians
	 * @returns {Vec2D} current scope
	 * @example
	 * vec.rotate(0.1)
	 * vec.rotate(Math.PI)
	 */
	rotate(theta = 0) {
		let x2 = (cos(theta) * this.x) - (sin(theta) * this.y);
		let y2 = (sin(theta) * this.x) + (cos(theta) * this.y);
		this.x = abs(x2) > Number.EPSILON ? x2 : 0;
		this.y = abs(y2) > Number.EPSILON ? y2 : 0;
		return this;
	}
	/**
	 * Linear Interpolate to supplied components value by the supplied amount
	 * Used incrementally, the closer that amount is to 1,
	 * the faster the interpolation will complete
	 * @param {Array} components[x,y]
	 * @param {Number} amount 
	 * @returns {Vec2D} current scope
	 * @example
	 * vec.lerp([2,2], 0.005)
	 * vec1.lerp(vec2.components, 0.025)
	 */
	lerp([x, y] = [0, 0], amount = 0.1) {
		this.components.lerp(components, amount);
		return this;
	}
	/**
	 * Get the dot product of the supplied vector's components
	 * @param {Vec2D / Object} vec2D - {components: [1,1]}
	 * @returns {Number} scalar value
	 * @example
	 * vec1.dot(vec2)
	 * vec1.dot({components: [1,1]})
	 */
	dot({components = [0, 0]}) {
		return this.x * components[0] + this.y * components[1];
	}
	/**
	 * Get the angle between current and supplied vector
	 * @param {Vec2D / Object} vec2D - {components: [0,1], magnitude: 1}
	 * @returns {Number} angle in radians
	 * @example
	 * vec1.angleBetween(vec2)
	 * vec1.angleBetween({components:[0,1], magnitude: 1}) // !Not recommended
	 */
	angleBetween(vec2D = { components: [0, 0], magnitude: 0 }) {
		return this.dot(vec2D) / (this.magnitude * vec2D.magnitude);
	}
	/**
	 * Normalize the vector
	 * @returns {Vec2D} current scope
	 */
	normalize() {
		this.x /= this.magnitude;
		this.y /= this.magnitude;
		return this;
	}
	/**
	 * Get a copy of the vector
	 * @returns {Vec2D}
	 */
	clone() {
		return new Vec2D(this.x, this.y);
	}
}