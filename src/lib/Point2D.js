import Vec2D from './Vec2D';
import { distance, angle } from './Util';

/**
 * @class Point2D
 * @author Sean Free
 * @version 0.0.1
 * @classdesc
 * 2D Point class.
 * Like the Vec2D class, methods are chainable.
 */
class Point2D {
	/**
	 * Create a new Point2D
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
	 * point.x = 5;
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
	 * @param {Number} x - y-axis value
	 * @throws {TypeError} if y value is non-numeric
	 * @example
	 * point.y = 5;
	 */
	set y(y) {
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number");
		}
		this.components[1] = y;
	}
	/**
	 * Translate (add) by the supplied components (x, y values)
	 * @param {Array<Nunmber>} components
	 * @returns {Point2D} current scope
	 * @throws {TypeError} if x or y value is non-numeric
	 * @example
	 * point.translate([1,1])
	 * point1.translate(point2.components)
	 */
	translate([x, y] = [0, 0]) {
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
	 * Translate (add) by the x value from supplied components
	 * @param {Array<Number>} components
	 * @returns {Point2D} current scope
	 * @throws {TypeError} if x value is non-numeric
	 * @example
	 * point.translateX(2)
	 * point1.translateX(point2.x)
	 */
	translateX(x = 0) {
		if ("number" !== typeof x) {
			throw new TypeError("x value must be a number");
		}
		this.x += x;
		return this;
	}
	/**
	 * Translate (add) by the y value from supplied components
	 * @param {Array<Number>} components
	 * @returns {Point2D} current scope
	 * @throws {TypeError} if y value is non-numeric
	 * @example
	 * point.translateY(2)
	 * point1.translateY(point2.y)
	 */
	translateY(y = 0) {
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number");
		}
		this.y += y;
		return this;
	}
	/**
	 * Linear Interpolate to supplied components value by the supplied amount.
	 * Used incrementally, the closer amount is to 1,
	 * the faster the interpolation will complete.
	 * @param {Array} components
	 * @param {Number} amount
	 * @returns {Point2D} current scope
	 * @throws {TypeError} if x, y or amount value is non-numeric
	 * @example
	 * point.lerp([2,2], 0.005)
	 * point1.lerp(point2.components, 0.025)
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
		this.components.lerp([x, y], amount);
		return this;
	}
	/**
	 * Add the supplied components (x, y values)
	 * @param {Array<Number>} components
	 * @returns {Point2D} current scope
	 * @throws {TypeError} if x or y value is non-numeric
	 * @example
	 * point.add([1,1])
	 * point1.add(point2.components)
	 */
	add([x, y] = [0, 0]) {
		return this.translate([x, y]);
	}
	/**
	 * Add the x value from supplied components
	 * @param {Array<Number>} components
	 * @returns {Point2D} current scope
	 * @throws {TypeError} if x value is non-numeric
	 * @example
	 * point.addX([1,1])
	 * point1.addX(point2.components)
	 */
	addX([x, y] = [0, 0]) {
		console.log(x, y);
		return this.translateX(x);
	}
	/**
	 * Add the y value from supplied components
	 * @param {Array<Number>} components
	 * @returns {Point2D} current scope
	 * @throws {TypeError} if y value is non-numeric
	 * @example
	 * point.addY([1,1])
	 * point1.addY(point2.components)
	 */
	addY([x, y] = [0, 0]) {
		console.log(x, y);
		return this.translateY(y);
	}
	/**
	 * Subtract the supplied components (x, y values)
	 * @param {Array<Number>} components
	 * @returns {Point2D} current scope
	 * @throws {TypeError} if x or y value is non-numeric
	 * @example
	 * point.sub([1,1])
	 * point1.sub(point2.components)
	 */
	sub([x, y] = [0, 0]) {
		if ("number" !== typeof x) {
			throw new TypeError("x value must be a number");
		}
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number");
		}
		return this.translate([-x, -y]);
	}
	/**
	 * Subtract the x value from supplied components
	 * @param {Array<Number>} components
	 * @returns {Point2D} current scope
	 * @throws {TypeError} if x value is non-numeric
	 * @example
	 * point.subX([1,1])
	 * point1.subX(point2.components)
	 */
	subX([x, y] = [0, 0]) {
		return this.translateX(-x);
	}
	/**
	 * Subtract the y value from supplied components
	 * @param {Array<Number>} components
	 * @returns {Point2D} current scope
	 * @throws {TypeError} if y value is non-numeric
	 * @example
	 * point.subY([1,1])
	 * point1.subY(point2.components)
	 */
	subY([x, y] = [0, 0]) {
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number");
		}
		return this.translateY(-y);
	}
	/**
	 * Multiply x and y by the supplied value
	 * @param {Number} scalar
	 * @returns {Point2D} current scope
	 * @throws {TypeError} if scalar value is non-numeric
	 * @example
	 * point.scale(2);
	 */
	multiply(scalar = 1) {
		if ("number" !== typeof scalar) {
			throw new TypeError("scalar value must be a number");
		}
		this.x *= scalar;
		this.y *= scalar;
		return this;
	}
	/**
	 * Multiply x by the supplied value
	 * @param {Number} scalar
	 * @returns {Point2D} current scope
	 * @throws {TypeError} if scalar value is non-numeric
	 * @example
	 * point.multiplyX(2);
	 */
	multiplyX(x = 1) {
		if ("number" !== typeof x) {
			throw new TypeError("x scalar value must be a number");
		}
		this.x *= x;
		return this;
	}
	/**
	 * Multiply y by the supplied value
	 * @param {Number} scalar
	 * @returns {Point2D} current scope
	 * @throws {TypeError} if scalar value is non-numeric
	 * @example
	 * point.multiplyY(2);
	 */
	multiplyY(y = 1) {
		if ("number" !== typeof y) {
			throw new TypeError("y scalar value must be a number");
		}
		this.y *= y;
		return this;
	}
	/**
	 * Get the distance to the supplied components
	 * @param {Array<Number>} components
	 * @returns {Number} distance
	 * @throws {TypeError} if x or y value is non-numeric
	 * @example
	 * point.distanceTo([2.2]);
	 * point1.distanceTo(point2.components);
	 */
	distanceTo([x, y] = [0, 0]) {
		if ("number" !== typeof x) {
			throw new TypeError("x value must be a number");
		}
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number");
		}
		return distance(this.x, this.y, x, y);
	}
	/**
	 * Get the angle (radians) to the supplied components
	 * @param {Array<Number>} components
	 * @returns {Number} angle in radians
	 * @throws {TypeError} if x or y value is non-numeric
	 * @example
	 * point.angleTo([2.2]);
	 * point1.angleTo(point2.components);
	 */
	angleTo([x, y] = [0, 0]) {
		if ("number" !== typeof x) {
			throw new TypeError("x value must be a number");
		}
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number");
		}
		return angle(y - this.y, x - this.x);
	}
	/**
	 * Get the angle (degrees) to the supplied components
	 * @param {Array<Number>} components
	 * @returns {Number} angle in degrees
	 * @throws {TypeError} if x or y value is non-numeric
	 * @example
	 * point.angleTo([2.2]);
	 * point1.angleTo(point2.components);
	 */
	angleToDeg([x, y] = [0, 0]) {
		if ("number" !== typeof x) {
			throw new TypeError("x value must be a number");
		}
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number");
		}
		return this.angleTo([x, y]) * TO_DEG;
	}
	/**
	 * Get a vector from one point to another
	 * @param {Array<Number>} components 
	 * @returns {Vec2D}
	 * @throws {TypeError} if x or y value is non-numeric
	 */
	vectorBetween([x, y] = [0, 0]) {
		if ("number" !== typeof x) {
			throw new TypeError("x value must be a number");
		}
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number");
		}
		return Vec2D.fromDirAndMag(this.angleTo([x, y]), this.distanceTo([x, y]));
	}
	/**
	 * Get a copy of the point
	 * @returns {Point2D}
	 */
	clone() {
		return new Point2D(this.x, this.y);
	}
}

export default Point2D;