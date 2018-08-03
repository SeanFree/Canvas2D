const LINE_DEFAULTS = {
	width: 1,
	color: "rgba(255,255,255,1)"
};

export default class Line {
	constructor(start, end, options) {
		if (!(start instanceof Point2D)) {
			throw new TypeError("'start' param must be a Point2D class");
		}
		if (!(end instanceof Point2D)) {
			throw new TypeError("'start' param must be a Point2D class");
		}
		this.start = start;
		this.end = end;
		this.options = Object.defineProperties(LINE_DEFAULTS, Object.getOwnPropertyDescriptors(options));
	}
	get startX() {
		return this.start.x;
	}
	get startY() {
		return this.start.y;
	}
	get endX() {
		return this.end.x;
	}
	get endY() {
		return this.end.y;
	}
	translate(vec2D) {
		this.start.translate(vec2D);
		this.end.translate(vec2D);
		return this;
	}
	translateStart(vec2D) {
		this.start.translate(vec2D);
		return this;
	}
	translateEnd(vec2D) {
		this.end.translate(vec2D);
		return this;
	}
	draw(canvas2D) {
		canvas2D.line(this.startX, this.startY, this.endX, this.endY);
	}
}