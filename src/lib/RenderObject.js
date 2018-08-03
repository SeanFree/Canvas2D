import Point2D from './Point2D';
import Vec2D from './Vec2D';

export default class RenderObject {
	constructor(x, y) {
		this.position = new Point2D(x, y);
		this.lastPosition = this.position.clone();
		this.velocity = new Vec2D();
	}
	getPosition() {
		return this.position.clone();
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
	getVelocity() {
		return this.velocity.clone();
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