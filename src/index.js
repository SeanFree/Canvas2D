import Constants from './lib/Constants';
import Util from './lib/Util';
import Config from './lib/Config';
import Vec2D from './lib/Vec2D';
import Vec2DArray from './lib/Vec2DArray';
import Point2DArray from './lib/Point2DArray';
import ParticleController from './lib/ParticleController';

function lerp(n1, n2, speed) {
	return (1 - speed) * n1 + speed * n2;
}

Float32Array.prototype.lerp = function(target, amount) {
	this.forEach((n, i) => {
		this[i] = lerp(n, target[i], amount);
	});
};

window["Constants"] = Constants;
window["Config"] = Config;
window["Vec2D"] = Vec2D;
window["Vec2DArray"] = Vec2DArray;
window["Point2DArray"] = Point2DArray;
window["ParticleController"] = ParticleController;

export default {
	Constants,
	Util,
	Config,
	Vec2D,
	Vec2DArray,
	Point2DArray,
	ParticleController
};
