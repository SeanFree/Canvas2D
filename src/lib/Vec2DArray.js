import Vec2D from "./Vec2D";

/**
 * @class Vec2DArray
 * @author Sean Free
 * @version 0.0.1
 * @classdesc
 * A class for storing multiple x, y values to be used as a Vec2D's components.
 * By default lengths of x and y arrays will be max,
 * this allows for 'resizing' of arrays at runtime.
 */

class Vec2DArray {
	/**
	 * Create a new Vec2DArray
	 * @param {Number} count - the number of available values
	 * @param {Number} max - the number of max possible values
	 * @throws {TypeError} if count or max is non-numeric
	 * @throws {RangeError} if count is greater than max
	 */
	constructor(count = 0, max = 0) {
		if ("number" !== typeof count) {
			throw new TypeError("count value must be a number");
		}
		if ("number" !== typeof max) {
			throw new TypeError("max value must be a number");
		}
		if (count > max) {
			throw new RangeError("count value cannot be greater than max value");
		}
		this.count = count;
		this.max = max;
		this.x = new Float32Array(max);
		this.y = new Float32Array(max);
	}
	/**
	 * Get a components array at supplied index
	 * @param {Number} i
	 * @returns {Array<Number>}
	 */
	get(i) {
		if ("number" !== typeof i) {
			throw new TypeError("i value must be a number")
		}
		return [this.x[i], this.y[i]];
	}
	/**
	 * Get a Vec2D object at supplied index
	 * @param {Number} i
	 * @memberof {Vec2DArray}
	 * @returns {Vec2D}
	 */
	getVec2D(i) {
		if ("number" !== typeof i) {
			throw new TypeError("i value must be a number")
		}
		return new Vec2D(this.x[i], this.y[i]);
	}
	/**
	 * Get the x value at the supplied index
	 * @param {Number} i
	 * @returns {Number}
	 */
	getX(i) {
		if ("number" !== typeof i) {
			throw new TypeError("i value must be a number")
		}
		return this.x[i];
	}
	/**
	 * Get the y value at the supplied index
	 * @param {Number} i
	 * @returns {Number}
	 */
	getY(i) {
		if ("number" !== typeof i) {
			throw new TypeError("i value must be a number")
		}
		return this.y[i];
	}
	/**
	 * Set the x and y value at the supplied index
	 * @param {Number} i
	 * @param {Number} x
	 * @param {Number} y
	 * @returns {Vec2DArray} current scope
	 */
	set(i, x, y) {
		if ("number" !== typeof i) {
			throw new TypeError("i value must be a number")
		}
		if ("number" !== typeof x) {
			throw new TypeError("x value must be a number")
		}
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number")
		}
		this.x[i] = x;
		this.y[i] = y;
		return this;
	}
	/**
	 * Set the x and y value from an array at the supplied index
	 * @param {Number} i
	 * @param {Array<Number>} components
	 * @returns {Vec2DArray} current scope
	 */
	setFromComponents(i, [x, y]) {
		if ("number" !== typeof i) {
			throw new TypeError("i value must be a number")
		}
		if ("number" !== typeof x) {
			throw new TypeError("x value must be a number")
		}
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number")
		}
		this.x[i] = x;
		this.y[i] = y;
		return this;
	}
	/**
	 * Set the x and y value from a Vec2D at the supplied index
	 * @param {Number} i
	 * @param {Vec2D} {Number,Number} x,y
	 * @memberof {Vec2DArray}
	 * @returns {Vec2DArray} current scope
	 */
	setFromVec2D(i, {x, y}) {
		if ("number" !== typeof i) {
			throw new TypeError("i value must be a number")
		}
		if ("number" !== typeof x) {
			throw new TypeError("x value must be a number")
		}
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number")
		}
		this.x[i] = x;
		this.y[i] = y;
		return this;
	}
	/**
	 * Set the x value at the supplied index
	 * @param {Number} i
	 * @param {Number} x
	 * @returns {Vec2DArray} current scope
	 */
	setX(i, x) {
		if ("number" !== typeof i) {
			throw new TypeError("i value must be a number")
		}
		if ("number" !== typeof x) {
			throw new TypeError("x value must be a number")
		}
		this.x[i] = x;
		return this;
	}
	/**
	 * Set the y value at the supplied index
	 * @param {Number} i
	 * @param {Number} y
	 * @returns {Vec2DArray} current scope
	 */
	setY(i, y) {
		if ("number" !== typeof i) {
			throw new TypeError("i value must be a number")
		}
		if ("number" !== typeof y) {
			throw new TypeError("y value must be a number")
		}
		this.y[i] = y;
		return this;
	}
}

export default Vec2DArray;
