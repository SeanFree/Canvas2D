import chai from 'chai';
import chaiSpies from 'chai-spies';
chai.use(chaiSpies);
const expect = chai.expect;
const spyOn = chai.spy.on;

import Vec2D from '../lib/Vec2D';

describe("the Vec2D class", () => {
    describe("the constructor", () => {
        it("should create a components Float32Array with the supplied x and y values", () => {
            let x = 5;
            let y = 8;
            let vec = new Vec2D(x, y);
            expect(vec.components instanceof Float32Array).to.be.true;
            expect(vec.components.length).to.equal(2);
            expect(vec.components[0]).to.equal(x);
            expect(vec.components[1]).to.equal(y);
        });
        it("should set x and y values to [0, 0] if not supplied", () => {
            let vec = new Vec2D();
            expect(vec.components[0]).to.equal(0);
            expect(vec.components[1]).to.equal(0);
        });
        it("should not allow non-numeric values for x, y", () => {
            let bad1 = () => new Vec2D("badbadnotgood", 1);
            let bad2 = () => new Vec2D(1, [{}]);
            expect(bad1).to.throw(TypeError, "x value must be a number");
            expect(bad2).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("setting components", () => {
        it("should not allow non-numeric values", () => {
            let vec = new Vec2D(1,1);
            let badSetX = () => { vec.x = "bananas"; };
            let badSetY = () => { vec.y = {}; };
            expect(badSetX).to.throw(TypeError, "x value must be a number");
            expect(badSetY).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("the fromDirAndMag function", () => {
        it("should return a new Vector", () => {
            let vec = Vec2D.fromDirAndMag(Math.PI, 1);
            expect(vec instanceof Vec2D).to.be.true;
        });
    });
    describe("the (get) direction function", () => {
        it("should return the correct angle of the vector", () => {
            let vec = new Vec2D(-1,0); // vector pointing directly to the left
            expect(vec.direction).to.equal(Math.PI);
        });
    });
    describe("the (get) direction function", () => {
        it("should return the correct angle of the vector in radians", () => {
            let vec = new Vec2D(-1,0); // vector pointing directly to the left
            expect(vec.direction).to.equal(Math.PI);
        });
    });
    describe("the (get) directionDeg function", () => {
        it("should return the correct angle of the vector in degress", () => {
            let vec = new Vec2D(-1,0); // vector pointing directly to the left
            expect(vec.directionDeg).to.equal(180);
        });
    });
    describe("the (get) magnitude function", () => {
        it("should return the correct magnitude of the vector", () => {
            let vec = new Vec2D(0,1);
            expect(vec.magnitude).to.equal(1);
        });
    });
    describe("the (get) norm function", () => {
        it("should return a new Vec2D with the correct x, y values and a magnitude of 1", () => {
            let vec = new Vec2D(0,20);
            let norm = vec.norm;
            expect(norm.x).to.equal(0);
            expect(norm.y).to.equal(1);
            expect(norm.magnitude).to.equal(1);
        });
    });
    describe("the add function", () => {
        it("should add to the vector's components", () => {
            let vec = new Vec2D(1,1);
            vec.add([2,2]);
            expect(vec.x).to.equal(3);
            expect(vec.y).to.equal(3);
        });
        it("should not allow non-numeric values", () => {
            let vec = new Vec2D(1,1);
            let badAddX = () => { vec.add(["nope", 1]); };
            let badAddY = () => { vec.add([1, ["nah"]]); };
            expect(badAddX).to.throw(TypeError, "x value must be a number");
            expect(badAddY).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("the addX function", () => {
        it("should add to the vector's x component", () => {
            let vec = new Vec2D(1,1);
            vec.addX([2,2]);
            expect(vec.x).to.equal(3);
            expect(vec.y).to.equal(1);
        });
        it("should not allow non-numeric values", () => {
            let vec = new Vec2D(1,1);
            let badAddX = () => { vec.add(["nope", 1]); };
            expect(badAddX).to.throw(TypeError, "x value must be a number");
        });
    });
    describe("the addY function", () => {
        it("should add to the vector's y component", () => {
            let vec = new Vec2D(1,1);
            vec.addY([2,2]);
            expect(vec.x).to.equal(1);
            expect(vec.y).to.equal(3);
        });
        it("should not allow non-numeric values", () => {
            let vec = new Vec2D(1,1);
            let badAddY = () => { vec.add([1, ["nah"]]); };
            expect(badAddY).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("the sub function", () => {
        it("should subtract from the vector's components", () => {
            let vec = new Vec2D(3,3);
            vec.sub([2,2]);
            expect(vec.x).to.equal(1);
            expect(vec.y).to.equal(1);
        });
        it("should not allow non-numeric values", () => {
            let vec = new Vec2D(1,1);
            let badSubX = () => { vec.sub(["nope", 1]); };
            let badSubY = () => { vec.sub([1, ["nah"]]); };
            expect(badSubX).to.throw(TypeError, "x value must be a number");
            expect(badSubY).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("the subX function", () => {
        it("should subtract from the vector's x component", () => {
            let vec = new Vec2D(3,3);
            vec.subX([2,2]);
            expect(vec.x).to.equal(1);
            expect(vec.y).to.equal(3);
        });
        it("should not allow non-numeric values", () => {
            let vec = new Vec2D(1,1);
            let badSubX = () => { vec.sub(["nope", 1]); };
            expect(badSubX).to.throw(TypeError, "x value must be a number");
        });
    });
    describe("the subY function", () => {
        it("should subtract from the vector's y component", () => {
            let vec = new Vec2D(3,3);
            vec.subY([2,2]);
            expect(vec.x).to.equal(3);
            expect(vec.y).to.equal(1);
        });
        it("should not allow non-numeric values", () => {
            let vec = new Vec2D(1,1);
            let badSubY = () => { vec.sub([1, ["nah"]]); };
            expect(badSubY).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("the scale function", () => {
        it("should scale (multiply) the vector's components", () => {
            let vec = new Vec2D(2,3);
            vec.scale(3);
            expect(vec.x).to.equal(6);
            expect(vec.y).to.equal(9);
        });
        it("should not allow non-numeric values", () => {
            let vec = new Vec2D(1,1);
            let badScale = () => { vec.scale("8675309") };
            expect(badScale).to.throw(TypeError, "scalar value must be a number");
        });
    });
    describe("the scaleX function", () => {
        it("should scale (multiply) the vector's x component", () => {
            let vec = new Vec2D(2,3);
            vec.scaleX(3);
            expect(vec.x).to.equal(6);
            expect(vec.y).to.equal(3);
        });
        it("should not allow non-numeric values", () => {
            let vec = new Vec2D(1,1);
            let badScale = () => { vec.scaleX([]) };
            expect(badScale).to.throw(TypeError, "x scalar value must be a number");
        });
    });
    describe("the scaleY function", () => {
        it("should scale (multiply) the vector's y component", () => {
            let vec = new Vec2D(2,3);
            vec.scaleY(3);
            expect(vec.x).to.equal(2);
            expect(vec.y).to.equal(9);
        });
        it("should not allow non-numeric values", () => {
            let vec = new Vec2D(1,1);
            let badScale = () => { vec.scaleY({}) };
            expect(badScale).to.throw(TypeError, "y scalar value must be a number");
        });
    });
    describe("the rotate function", () => {
        it("should rotate the vector by the supplied angle (radians)", () => {
            let vec = new Vec2D(1,0); // pointing right
            vec.rotate(Math.PI); // rotate 180 degrees -> pointing left
            expect(vec.x).to.equal(-1);
            expect(vec.y).to.equal(0);
        });
        it("should not allow non-numeric values", () => {
            let vec = new Vec2D(1,0);
            let badRotate = () => { vec.rotate("barrel roll"); };
            expect(badRotate).to.throw(TypeError, "theta (angle) value must be a number");
        });
    });
    describe("the rotateDeg function", () => {
        it("should rotate the vector by the supplied angle (degrees)", () => {
            let vec = new Vec2D(1,0); // pointing right
            vec.rotateDeg(180); // pointing left
            expect(vec.x).to.equal(-1);
            expect(vec.y).to.equal(0);
        });
        it("should not allow non-numeric values", () => {
            let vec = new Vec2D(1,0);
            let badRotate = () => { vec.rotateDeg("barrel roll"); };
            expect(badRotate).to.throw(TypeError, "theta (angle) value must be a number");
        });
    });
    describe("the lerp function", () => {
        it("should call lerp on the vector's components with the supplied args", () => {
            let vec = new Vec2D(1,1);
            let target = [2,2];
            let amount = 1;
            spyOn(vec.components, "lerp");
            vec.lerp(target, amount);
            expect(vec.components.lerp).to.have.been.called.with(target, amount);
        });
        it("should not allow non-numeric values", () => {
            let vec = new Vec2D(1,1);
            let badLerpX = () => { vec.lerp(["nuh-uh", 1], 0.1); };
            let badLerpY = () => { vec.lerp([1, {}], 0.1); };
            let badLerpAmt = () => { vec.lerp([1, 2], "buckle my shoe"); };
            spyOn(vec.components, "lerp");
            expect(badLerpX).to.throw(TypeError, "x value must be a number");
            expect(badLerpY).to.throw(TypeError, "y value must be a number");
            expect(badLerpAmt).to.throw(TypeError, "amount value must be a number");
            expect(vec.components.lerp).to.not.have.been.called;
        });
    });
    describe("the dot function", () => {
        it("should return the dot product of the vector and the suppled vector", () => {
            let vec1 = new Vec2D(1,1);
            let vec2 = new Vec2D(1,1);
            expect(vec1.dot(vec2)).to.equal(2);
        });
    });
    describe("the angleBetween function", () => {
        it("should return the correct angle in radians", () => {
            let vec1 = new Vec2D(1,0); // pointing right -> 0 deg -> 0 rad
            let vec2 = new Vec2D(-1,0); // pointing left -> 180 deg -> PI rad
            expect(vec1.angleBetween(vec2)).to.equal(Math.PI * 0.5);
        });
    });
    describe("the angleBetweenDeg function", () => {
        it("should return the correct angle in degrees", () => {
            let vec1 = new Vec2D(1,0); // pointing right -> 0 deg -> 0 rad
            let vec2 = new Vec2D(-1,0); // pointing left -> 180 deg -> PI rad
            expect(vec1.angleBetweenDeg(vec2)).to.equal(90);
        });
    });
    describe("the normalize function", () => {
        it("should normalize the vector", () => {
            let vec = new Vec2D(0,20);
            vec.normalize();
            expect(vec.y).to.equal(1);
            expect(vec.magnitude).to.equal(1);
        });
    });
    describe("the clone function", () => {
        it("should return a copy of the vector", () => {
            let vec = new Vec2D(5,6);
            let clone = vec.clone();
            expect(vec.x).to.equal(clone.x);
            expect(vec.y).to.equal(clone.y);
            expect(vec.magnitude).to.equal(clone.magnitude);
            expect(vec.direction).to.equal(clone.direction);
        });
    });
});