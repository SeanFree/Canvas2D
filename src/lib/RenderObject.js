import Point2D from './Point2D';
import Vec2D from './Vec2D';

class RenderObject {
	constructor(x, y) {
		this.position = new Point2D(x, y);
		this.lastPosition = this.position.clone();
		this.velocity = new Vec2D();
	}
	get position() {
		return [this.position.x, this.position.y];
	}
	get vec2DPosition() {
		return this.position.clone();
	}
	get velocity() {
		return [this.velocity.x, this.velocity.y];
	}
	get vec2DVelocity() {
		return this.velocity.clone();
	}
	setPosition(x, y) {
		this.position.x = x;
		this.position.y = y;
		return this;
	}
	setLastPosition() {
		this.lastPosition.x = this.position.x;
		this.lastPosition.y = this.position.y;
		return this;
	}
	setVelocity(x, y) {
		this.velocity.x = x;
		this.velocity.y = y;
		return this;
	}
	getLife() {
		return this.life;
	}
	setLife(n) {
		this.life = n;
		return this;
	}
}

export default RenderObject;