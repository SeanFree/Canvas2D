import chai from 'chai';
import chaiSpies from 'chai-spies';
chai.use(chaiSpies);
const expect = chai.expect;
const spyOn = chai.spy.on;

import Vec2D from '../lib/Vec2D';
import Point2D from '../lib/Point2D';

describe("the Point2D class", () => {
    describe("the constructor", () => {
        it("should create a components Float32Array with the supplied x and y values", () => {
            let x = 5;
            let y = 8;
            let point = new Point2D(x, y);
            expect(point.components instanceof Float32Array).to.be.true;
            expect(point.components.length).to.equal(2);
            expect(point.components[0]).to.equal(x);
            expect(point.components[1]).to.equal(y);
        });
        it("should set x and y values to [0, 0] if not supplied", () => {
            let point = new Point2D();
            expect(point.components[0]).to.equal(0);
            expect(point.components[1]).to.equal(0);
        });
        it("should not allow non-numeric values for x, y", () => {
            let bad1 = () => new Point2D("badbadnotgood", 1);
            let bad2 = () => new Point2D(1, [{}]);
            expect(bad1).to.throw(TypeError, "x value must be a number");
            expect(bad2).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("setting components", () => {
        it("should not allow non-numeric values", () => {
            let point = new Point2D(1,1);
            let badSetX = () => { point.x = "bananas"; };
            let badSetY = () => { point.y = {}; };
            expect(badSetX).to.throw(TypeError, "x value must be a number");
            expect(badSetY).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("the add function", () => {
        it("should add to the point's components", () => {
            let point = new Point2D(1,1);
            point.add([2,2]);
            expect(point.x).to.equal(3);
            expect(point.y).to.equal(3);
        });
        it("should not allow non-numeric values", () => {
            let point = new Point2D(1,1);
            let badAddX = () => { point.add(["nope", 1]); };
            let badAddY = () => { point.add([1, ["nah"]]); };
            expect(badAddX).to.throw(TypeError, "x value must be a number");
            expect(badAddY).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("the addX function", () => {
        it("should add to the point's x component", () => {
            let point = new Point2D(1,1);
            point.addX([2,2]);
            expect(point.x).to.equal(3);
            expect(point.y).to.equal(1);
        });
        it("should not allow non-numeric values", () => {
            let point = new Point2D(1,1);
            let badAddX = () => { point.add(["nope", 1]); };
            expect(badAddX).to.throw(TypeError, "x value must be a number");
        });
    });
    describe("the addY function", () => {
        it("should add to the point's y component", () => {
            let point = new Point2D(1,1);
            point.addY([2,2]);
            expect(point.x).to.equal(1);
            expect(point.y).to.equal(3);
        });
        it("should not allow non-numeric values", () => {
            let point = new Point2D(1,1);
            let badAddY = () => { point.add([1, ["nah"]]); };
            expect(badAddY).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("the sub function", () => {
        it("should subtract from the point's components", () => {
            let point = new Point2D(3,3);
            point.sub([2,2]);
            expect(point.x).to.equal(1);
            expect(point.y).to.equal(1);
        });
        it("should not allow non-numeric values", () => {
            let point = new Point2D(1,1);
            let badSubX = () => { point.sub(["nope", 1]); };
            let badSubY = () => { point.sub([1, ["nah"]]); };
            expect(badSubX).to.throw(TypeError, "x value must be a number");
            expect(badSubY).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("the subX function", () => {
        it("should subtract from the point's x component", () => {
            let point = new Point2D(3,3);
            point.subX([2,2]);
            expect(point.x).to.equal(1);
            expect(point.y).to.equal(3);
        });
        it("should not allow non-numeric values", () => {
            let point = new Point2D(1,1);
            let badSubX = () => { point.sub(["nope", 1]); };
            expect(badSubX).to.throw(TypeError, "x value must be a number");
        });
    });
    describe("the subY function", () => {
        it("should subtract from the point's y component", () => {
            let point = new Point2D(3,3);
            point.subY([2,2]);
            expect(point.x).to.equal(3);
            expect(point.y).to.equal(1);
        });
        it("should not allow non-numeric values", () => {
            let point = new Point2D(1,1);
            let badSubY = () => { point.sub([1, ["nah"]]); };
            expect(badSubY).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("the multiply function", () => {
        it("should multiply the point's components", () => {
            let point = new Point2D(2,3);
            point.multiply(3);
            expect(point.x).to.equal(6);
            expect(point.y).to.equal(9);
        });
        it("should not allow non-numeric values", () => {
            let point = new Point2D(1,1);
            let badmultiply = () => { point.multiply("8675309") };
            expect(badmultiply).to.throw(TypeError, "scalar value must be a number");
        });
    });
    describe("the multiplyX function", () => {
        it("should multiply the point's x component", () => {
            let point = new Point2D(2,3);
            point.multiplyX(3);
            expect(point.x).to.equal(6);
            expect(point.y).to.equal(3);
        });
        it("should not allow non-numeric values", () => {
            let point = new Point2D(1,1);
            let badmultiply = () => { point.multiplyX([]) };
            expect(badmultiply).to.throw(TypeError, "x scalar value must be a number");
        });
    });
    describe("the multiplyY function", () => {
        it("should multiply the point's y component", () => {
            let point = new Point2D(2,3);
            point.multiplyY(3);
            expect(point.x).to.equal(2);
            expect(point.y).to.equal(9);
        });
        it("should not allow non-numeric values", () => {
            let point = new Point2D(1,1);
            let badmultiply = () => { point.multiplyY({}) };
            expect(badmultiply).to.throw(TypeError, "y scalar value must be a number");
        });
    });
    describe("the lerp function", () => {
        it("should call lerp on the point's components with the supplied args", () => {
            let point = new Point2D(1,1);
            let target = [2,2];
            let amount = 1;
            spyOn(point.components, "lerp");
            point.lerp(target, amount);
            expect(point.components.lerp).to.have.been.called.with(target, amount);
        });
        it("should not allow non-numeric values", () => {
            let point = new Point2D(1,1);
            let badLerpX = () => { point.lerp(["nuh-uh", 1], 0.1); };
            let badLerpY = () => { point.lerp([1, {}], 0.1); };
            let badLerpAmt = () => { point.lerp([1, 2], "buckle my shoe"); };
            spyOn(point.components, "lerp");
            expect(badLerpX).to.throw(TypeError, "x value must be a number");
            expect(badLerpY).to.throw(TypeError, "y value must be a number");
            expect(badLerpAmt).to.throw(TypeError, "amount value must be a number");
            expect(point.components.lerp).to.not.have.been.called;
        });
    });
    describe("the clone function", () => {
        it("should return a copy of the point", () => {
            let point = new Point2D(5,6);
            let clone = point.clone();
            expect(point.x).to.equal(clone.x);
            expect(point.y).to.equal(clone.y);
            expect(point.magnitude).to.equal(clone.magnitude);
            expect(point.direction).to.equal(clone.direction);
        });
    });
});