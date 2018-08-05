import Vec2DArray from './Vec2DArray';
import Point2DArray from './Point2DArray';

/**
 * @class ParticleController
 * @author Sean Free
 * @version 0.0.1
 * @classdesc
 */
class ParticleController {
	constructor(count, max) {
		this.count = count;
		this.max = max;
		this.life = new Vec2DArray(this.count, this.max);
		this.vertices = new Point2DArray(this.count, this.max);
		this.velocities = new Vec2DArray(this.count, this.max);
	}
	getLife(i) {
		return this.life.getX(i);
	}
	getTTL(i) {
		return this.life.getY(i);
	}
	setLife(i, life) {
		this.life.setX(i, life);
		return this;
	}
	setTTL(i, ttl) {
		this.life.setY(i, ttl);
		return this;
	}
	getVertex(i) {
		return this.vertices.get(i);
	}
	setVertex(i, x, y) {
		this.vertices.set(i, x, y);
		return this;
	}
	getVelocity(i) {
		return this.velocities.get(i);
	}
	setVelocity(i, x, y) {
		this.velocities.set(i, x, y);
		return this;
	}
}

export default ParticleController;