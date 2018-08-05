import  { abs, sqrt, pow, cos, sin, atan2 } from './Util';
import { TO_DEG, TO_RAD, EPSILON } from './Constants';

/**
 * @class Vec2D
 * @author Sean Free
 * @version 0.0.1
 * @classdesc
 * 2D Vector class.
 * Unless a method returns a specific value,
 * 'this' will be returned,
 * allowing for chaining of methods.
 * @example
 * let vec3 =
 *   vec1
 *     .add(vec2.components)
 *     .rotate(Math.PI)
 *     .scale(2)
 *     .clone()
 *     .norm;
 */
class Vec2D {
	/**
	 * Create a new Vec2D
	 * @param {Number} x - x-axis value
	 * @param {Number} y - y-axis value
	 * @throws {TypeError} if x or y value is non-numeric
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
	 * @static
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
	 * @throws {TypeError} if x value is non-numeric
	 * @example
	 * vec.x = 5;
	 */
	set x(x) {
		if ("number" !== typeof x) {
			throw new TypeError("x value must be a number");
		}
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
	 * @throws {TypeError} if y value is non-numeric
	 * @example
	 * vec.y = 5;
	 */
	set y(y) {
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number");
		}
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
	 * Alias for direction
	 * @returns {Number}
	 */
	get angle() {
		return this.direction;
	}
	/**
	 * Alias for dirctionDeg
	 * @returns {Number}
	 */
	get angleDeg() {
		return this.directionDeg;
	}
	/**
	 * Get the vector's magnitude (length)
	 * @returns {Number}
	 */
	get magnitude() {
		return sqrt(pow(this.x, 2) + pow(this.y, 2));
	}
	/**
	 * Alias for magnitude
	 * @returns {Number}
	 */
	get length() {
		return this.magnitude;
	}
	/**
	 * Get the norm vector
	 * @returns {Vec2D}
	 */
	get norm() {
		return new Vec2D(this.x / this.magnitude, this.y / this.magnitude);
	}
	/**
	 * Add the supplied components (x, y values)
	 * @param {Array} components
	 * @returns {Vec2D} current scope
	 * @throws {TypeError} if x or y value is non-numeric
	 * @example
	 * vec.add([1,1])
	 * vec1.add(vec2.components)
	 */
	add([x, y] = [0, 0]) {
		if ("number" !== typeof x) {
			throw new TypeError("x value must be a number");
		}
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number");
		}
		this.x += x;
		this.y += y;
		return this;
	}
	/**
	 * Add the x value from supplied components
	 * @param {Array} components
	 * @returns {Vec2D} current scope
	 * @throws {TypeError} if x value is non-numeric
	 * @example
	 * vec.addX([1,1])
	 * vec1.addX(vec2.components)
	 */
	addX([x, y] = [0, 0]) {
		if ("number" !== typeof x) {
			throw new TypeError("x value must be a number");
		}
		this.x += x;
		return this;
	}
	/**
	 * Add the y value from supplied components
	 * @param {Array} components
	 * @returns {Vec2D} current scope
	 * @throws {TypeError} if y value is non-numeric
	 * @example
	 * vec.addY([1,1])
	 * vec1.addY(vec2.components)
	 */
	addY([x, y] = [0, 0]) {
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number");
		}
		this.y += y;
		return this;
	}
	/**
	 * Subtract the supplied components (x, y values)
	 * @param {Array} components
	 * @returns {Vec2D} current scope
	 * @throws {TypeError} if x or y value is non-numeric
	 * @example
	 * vec.sub([1,1])
	 * vec1.sub(vec2.components)
	 */
	sub([x, y] = [0, 0]) {
		if ("number" !== typeof x) {
			throw new TypeError("x value must be a number");
		}
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number");
		}
		this.x -= x;
		this.y -= y;
		return this;
	}
	/**
	 * Subtract the x value from supplied components
	 * @param {Array} components
	 * @returns {Vec2D} current scope
	 * @throws {TypeError} if x value is non-numeric
	 * @example
	 * vec.subX([1,1])
	 * vec1.subX(vec2.components)
	 */
	subX([x, y] = [0, 0]) {
		if ("number" !== typeof x) {
			throw new TypeError("x value must be a number");
		}
		this.x -= x;
		return this;
	}
	/**
	 * Subtract the y value from supplied components
	 * @param {Array} components
	 * @returns {Vec2D} current scope
	 * @throws {TypeError} if y value is non-numeric
	 * @example
	 * vec.subY([1,1])
	 * vec1.subY(vec2.components)
	 */
	subY([x, y] = [0, 0]) {
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number");
		}
		this.y -= y;
		return this;
	}
	/**
	 * Scale (multiply) x and y by the supplied value
	 * @param {Number} scalar
	 * @returns {Vec2D} current scope
	 * @throws {TypeError} if scalar value is non-numeric
	 * @example
	 * vec.scale(2)
	 */
	scale(scalar = 1) {
		if ("number" !== typeof scalar ) {
			throw new TypeError("scalar value must be a number");
		}
		this.x *= scalar;
		this.y *= scalar;
		return this;
	}
	/**
	 * Scale (multiply) x by the supplied value
	 * @param {Number} x
	 * @returns {Vec2D} current scope
	 * @throws {TypeError} if x scalar value is non-numeric
	 * @example
	 * vec.scale(2)
	 */
	scaleX(x = 1) {
		if ("number" !== typeof x) {
			throw new TypeError("x scalar value must be a number");
		}
		this.x *= x;
		return this;
	}
	/**
	 * Scale (multiply) y by the supplied value
	 * @param {Number} y
	 * @returns {Vec2D} current scope
	 * @throws {TypeError} if y scalar value is non-numeric
	 * @example
	 * vec.scale(2)
	 */
	scaleY(y = 1) {
		if ("number" !== typeof y) {
			throw new TypeError("y scalar value must be a number");
		}
		this.y *= y;
		return this;
	}
	/**
	 * Rotate by the supplied value (radians)
	 * @param {Number} theta - rotation amount in radians
	 * @returns {Vec2D} current scope
	 * @throws {TypeError} if theta value is non-numeric
	 * @example
	 * vec.rotate(0.1)
	 * vec.rotate(Math.PI)
	 */
	rotate(theta = 0) {
		if ("number" !== typeof theta) {
			throw new TypeError("theta (angle) value must be a number");
		}
		let x2 = (cos(theta) * this.x) - (sin(theta) * this.y);
		let y2 = (sin(theta) * this.x) + (cos(theta) * this.y);
		this.x = abs(x2) > EPSILON ? x2 : 0;
		this.y = abs(y2) > EPSILON ? y2 : 0;
		return this;
	}
	/**
	 * Rotate by the supplied value (degrees)
	 * @param {Number} theta - rotation amount in degrees
	 * @returns {Vec2D} convert to radians -> call rotate -> current scope
	 * @throws {TypeError} if theta value is non-numeric
	 * @example
	 * vec.rotate(20)
	 * vec.rotate(180)
	 */
	rotateDeg(theta = 0) {
		if ("number" !== typeof theta) {
			throw new TypeError("theta (angle) value must be a number");
		}
		return this.rotate(theta * TO_RAD);
	}
	/**
	 * Linear Interpolate to supplied components value by the supplied amount
	 * Used incrementally, the closer that amount is to 1,
	 * the faster the interpolation will complete
	 * @param {Array} components
	 * @param {Number} amount
	 * @returns {Vec2D} current scope
	 * @throws {TypeError} if x, y or amount value is non-numeric
	 * @example
	 * vec.lerp([2,2], 0.005)
	 * vec1.lerp(vec2.components, 0.025)
	 */
	lerp([x, y] = [0, 0], amount = 0.1) {
		if ("number" !== typeof x) {
			throw new TypeError("x value must be a number");
		}
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number");
		}
		if ("number" !== typeof amount) {
			throw new TypeError("amount value must be a number");
		}
		this.components.lerp([x,y], amount);
		return this;
	}
	/**
	 * Get the dot product of the supplied vector's components
	 * @param {Vec2D | Object} vec2D - {components: [1,1]}
	 * @returns {Number} scalar value
	 * @example
	 * vec1.dot(vec2)
	 * vec1.dot({components: [1,1]})
	 */
	dot({components = [0, 0]}) {
		return this.x * components[0] + this.y * components[1];
	}
	/**
	 * Get the angle between current and supplied vector in radians
	 * @param {Vec2D | Object} vec2D - {components: [0,1], magnitude: 1}
	 * @returns {Number} angle in radians
	 * @example
	 * vec1.angleBetween(vec2)
	 * vec1.angleBetween({components:[0,1], magnitude: 1}) // !Not recommended
	 */
	angleBetween(vec2D) {
		return (vec2D.direction - this.direction) * 0.5;
	}
	/**
	 * Get the angle between current and supplied vector in degrees
	 * @param {Vec2D | Object} vec2D - {components: [0,1], magnitude: 1}
	 * @returns {Number} angle in degrees
	 * @example
	 * vec1.angleBetweenDeg(vec2)
	 * vec1.angleBetweenDeg({components:[0,1], magnitude: 1}) // !Not recommended
	 */
	angleBetweenDeg(vec2D) {
		return this.angleBetween(vec2D) * TO_DEG;
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

export default Vec2D;
