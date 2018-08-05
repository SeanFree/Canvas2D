import RenderObject from './RenderObject';

class Particle extends RenderObject {
	constructor(x, y) {
		super(x, y);
		this.ttl = CONFIG.particles.maxTTL;
		this.reset = false;
		this.setHueFunction();
		this.setAlphaFunction();
	}
	scope() {
		return this;
	}
	update(vX, vY) {
		this.setVelocity(vX, vY)
			.setLastPosition()
			.checkLife()
			.setColor()
			[CONFIG.noise.enabled ? "addNoise" : "scope"]()
			.position.add(this.velocity);
		
		return this;
	}
	checkLife() {
		if (this.life >= this.ttl) this.reset = true;
		return this;
	}
	setNormalizedSpeed() {
		this.normalizedSpeed =
			(CONFIG.targetSpeed - 
				sqrt(
					pow(this.position.x - this.lastPosition.x, 2) +
					pow(this.position.y - this.lastPosition.y, 2)
				)) /
			CONFIG.targetSpeed;
		return this;
	}
	setColor() {
		this.color = `hsla(${this.getHue()}, 100%, 50%, ${this.getAlpha()})`;
		return this;
	}
	setHueFunction() {
		switch (CONFIG.particles.colorStyle) {
			case "static":
				this.getHue = () => CONFIG.particles.baseHue;
				break;
			case "speed":
				this.getHue = () =>
					CONFIG.particles.baseHue +
					this.normalizedSpeed * CONFIG.particles.hueRange;
				break;
			case "noise":
				this.getHue = () =>
					CONFIG.particles.baseHue +
					(1 +
						noise.simplex3(
							this.position.x * CONFIG.noise.xOffActual,
							this.position.y * CONFIG.noise.yOffActual,
							tick * CONFIG.noise.zOffActual
						)) *
						0.5 *
						CONFIG.particles.hueRange * -CONFIG.noise.banding;
				break;
			default:
				this.getHue = () => CONFIG.particles.baseHue;
				break;
		}
	}
	setAlphaFunction() {
		switch (CONFIG.particles.fade) {
			case "none":
				this.getAlpha = () => 1;
				break;
			case "in":
				this.getAlpha = () => fadeIn(this.life, this.ttl);
				break;
			case "out":
				this.getAlpha = () => fadeOut(this.life, this.ttl);
				break;
			case "inOut":
				this.getAlpha = () => fadeInOut(this.life, this.ttl);
				break;
			default:
				this.getAlpha = () => 1;
				break;
		}
	}
	draw(canvas) {
		canvas.buffer.save();
		canvas.buffer.globalCompositeOperation = "lighter";
		canvas.line(
			this.lastPosition.x,
			this.lastPosition.y,
			this.position.x,
			this.position.y,
			CONFIG.particles.width,
			this.color
		);
		canvas.buffer.restore();
		return this;
	}
}

export default Particle;