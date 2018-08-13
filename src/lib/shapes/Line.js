import Config from '../Config';

const LINE_DEFAULTS = {
	width: 1,
	color: "rgba(255,255,255,1)"
};

class Line {
	constructor(start, end, options) {
		if (!(start instanceof Point2D)) {
			throw new TypeError("'start' param must be a Point2D class");
		}
		if (!(end instanceof Point2D)) {
			throw new TypeError("'start' param must be a Point2D class");
		}
		this.start = start;
		this.end = end;
		this.options = new Config(LINE_DEFAULTS);
		this.options.apply(options);
		this.options.apply({
			x1: this.start.x,
			y1: this.start.y,
			x2: this.end.x,
			y2: this.end.y
		});
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
	set startX(x) {
		this.start.x = x;
		this.options.x1 = x;
	}
	set startY(y) {
		this.start.y = y;
		this.options.y1 = y;
	}
	set endX(x) {
		this.end.x = x;
		this.options.x2 = x;
	}
	set endY(y) {
		this.start.y = y;
		this.options.y2 = y;
	}
	move(vec2D) {
		this.start.translate(vec2D);
		this.end.translate(vec2D);
		return this;
	}
	moveStart(vec2D) {
		this.start.translate(vec2D);
		return this;
	}
	moveEnd(vec2D) {
		this.end.translate(vec2D);
		return this;
	}
	draw(canvas2D) {
		canvas2D.line(this.options);
	}
}

export default Line;