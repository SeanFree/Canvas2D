import Point2D from './Point2D';
import Vec2DArray from './Vec2DArray';

/**
 * @class Point2DArray
 * @extends {Vec2DArray}
 * @author Sean Free
 * @version 0.0.1
 * @classdesc
 * A class for storing multiple x, y values to be used as a Point2D's components.
 * Extends Vec2DArray.
 * By default lengths of x and y arrays will be max,
 * this allows for 'resizing' of arrays at runtime.
 */
class Point2DArray extends Vec2DArray {
	/**
	 * Create a new Point2DArray
	 * @param {Number} count - the number of available values
	 * @param {Number} max - the number of max possible values
	 * @throws {TypeError} if count or max is non-numeric
	 * @throws {RangeError} if count is greater than max
	 */
	constructor(count = 0, max = 0) {
		super(count, max);
		this.getVec2D = undefined;
        this.setFromVec2D = undefined;
	}
	/**
	 * Get a Point2D object at supplied index
	 * @param {Number} i
	 * @returns {Point2D}
	 */
	getPoint2D(i) {
		if ("number" !== typeof i) {
			throw new TypeError("i value must be a number")
		}
		return new Point2D(this.x[i], this.y[i]);
	}
	/**
	 * Set the x and y value from a Point2D at the supplied index
	 * @param {Number} i
	 * @param {Point2D} {Number,Number} x,y
	 * @returns {Point2DArray} current scope
	 */
	setFromPoint2D(i, {x, y}) {
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
}

export default Point2DArray;
