import chai from 'chai';
import Vec2D from '../lib/Vec2D';
const expect = chai.expect;

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
    describe("the (get) unit function", () => {
        it("should return a new Vec2D with the correct x, y and magnitude values", () => {
            let vec = new Vec2D(0,20);
            let norm = vec.norm;
            expect(norm.x).to.equal(0);
            expect(norm.y).to.equal(1);
            expect(norm.magnitude).to.equal(1);
        });
    });
});