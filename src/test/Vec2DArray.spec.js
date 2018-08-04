import chai from 'chai';
import chaiSpies from 'chai-spies';
chai.use(chaiSpies);
const expect = chai.expect;
const spyOn = chai.spy.on;

import Vec2D from '../lib/Vec2D';
import Vec2DArray from '../lib/Vec2DArray';
import { isObject } from 'util';

describe("the Vec2DArray class", () => {
    let v2r;
    beforeEach(() => { v2r = new Vec2DArray(10,200); });
    describe("the constructor", () => {
        it("should create a new Vec2DArray with supplied count and max values", () => {
            expect(v2r.count).to.equal(10);
            expect(v2r.max).to.equal(200);
        });
        it("should have 2 Float32Arrays - x & y", () => {
            expect(v2r.x).to.be.instanceOf(Float32Array);
            expect(v2r.y).to.be.instanceOf(Float32Array);
            expect(v2r.x.length).to.equal(200);
            expect(v2r.y.length).to.equal(200);
        });
        it("should not allow non-numeric values for count or max", () => {
            let badConstructorCount = () => new Vec2DArray("NO U", 5);
            let badConstructorMax = () => new Vec2DArray(5, "ok...");
            expect(badConstructorCount).to.throw(TypeError, "count value must be a number");
            expect(badConstructorMax).to.throw(TypeError, "max value must be a number");
        });
        it("should not allow count to be greater than max", () => {
            let badConstructor = () => new Vec2DArray(500,50);
            expect(badConstructor).to.throw(RangeError, "count value cannot be greater than max value");
        });
    });
    describe("the get function", () => {
        it("should return an array", () => {
            let components = v2r.get(0);
            expect(components).to.be.an("Array");
            expect(components.length).to.equal(2);
        });
        it("should not allow non-numeric values for i", () => {
            let badGet = () => v2r.get("(╯°□°）╯︵ ┻━┻");
            expect(badGet).to.throw(TypeError, "i value must be a number");
        });
    });
    describe("the getVec2D function", () => {
        it("should return a Vec2D", () => {
            let vec = v2r.getVec2D(0);
            expect(vec).to.be.an.instanceof(Vec2D);
        });
        it("should not allow non-numeric values for i", () => {
            let badGet = () => v2r.getVec2D("(╯°□°）╯︵ ┻━┻");
            expect(badGet).to.throw(TypeError, "i value must be a number");
        });
    });
    describe("the getX function", () => {
        it("should return the x value at supplied index", () => {
            v2r.setX(0, 5);
            expect(v2r.getX(0)).to.equal(5);
        });
        it("should not allow non-numeric values for i", () => {
            let badGet = () => v2r.getX("(╯°□°）╯︵ ┻━┻");
            expect(badGet).to.throw(TypeError, "i value must be a number");
        });
    });
    describe("the getY function", () => {
        it("should return the y value at supplied index", () => {
            v2r.setY(0, 5);
            expect(v2r.getY(0)).to.equal(5);
        });
        it("should not allow non-numeric values for i", () => {
            let badGet = () => v2r.getY("(╯°□°）╯︵ ┻━┻");
            expect(badGet).to.throw(TypeError, "i value must be a number");
        });
    });
    describe("the set function", () => {
        it("should set the supplied x, y values at the supplied index", () => {
            let x = 5;
            let y = 10;
            v2r.set(0, x, y);
            expect(v2r.x[0]).to.equal(x);
            expect(v2r.y[0]).to.equal(y);
        });
        it("should not allow non-numeric values for i, x, or y", () => {
            let badSetI = () => v2r.set("lel", 0, 0);
            let badSetX = () => v2r.set(0, "huehue", 0);
            let badSetY = () => v2r.set(0, 0, "doh");
            expect(badSetI).to.throw(TypeError, "i value must be a number");
            expect(badSetX).to.throw(TypeError, "x value must be a number");
            expect(badSetY).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("the setFromComponents function", () => {
        it("should set the x, y values from supplied components at the supplied index", () => {
            let components = [2,3];
            v2r.setFromComponents(0, components);
            expect(v2r.get(0)).to.eql(components);
        });
        it("should not allow non-numeric values for i, x, or y", () => {
            let badSetI = () => v2r.setFromComponents({}, [0,0]);
            let badSetX = () => v2r.setFromComponents(0, ["badbadnotgood", 0]);
            let badSetY = () => v2r.setFromComponents(0, [0,"yudodis"]);
            expect(badSetI).to.throw(TypeError, "i value must be a number");
            expect(badSetX).to.throw(TypeError, "x value must be a number");
            expect(badSetY).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("the setFromVec2D function", () => {
        let vec, x, y;
        beforeEach(() => { 
            x = 5;
            y = 5;
            vec = new Vec2D(x,y); 
        });
        it("should set the x, y values from supplied vector's components at the supplied index", () => {
            v2r.setFromVec2D(0, vec);
            expect(v2r.get(0)).to.eql([x,y]);
        });
        it("should not allow non-numeric values for i, x, or y", () => {
            let badSetI = () => v2r.setFromVec2D({}, {x, y});
            let badSetX = () => v2r.setFromVec2D(0, {x: [], y});
            let badSetY = () => v2r.setFromVec2D(0, {x, y: []});
            expect(badSetI).to.throw(TypeError, "i value must be a number");
            expect(badSetX).to.throw(TypeError, "x value must be a number");
            expect(badSetY).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("the setX function", () => {
        it("should set the supplied x value at the supplied index", () => {
            v2r.setX(0, 5);
            expect(v2r.x[0]).to.equal(5);
        });
        it("should not allow non-numeric values for i or x", () => {
            let badSetI = () => v2r.setX("won't work", 5);
            let badSetX = () => v2r.setX(0, []);
            expect(badSetI).to.throw(TypeError, "i value must be a number");
            expect(badSetX).to.throw(TypeError, "x value must be a number");
        });
    });
    describe("the setY function", () => {
        it("should set the supplied y value at the supplied index", () => {
            v2r.setY(0, 5);
            expect(v2r.y[0]).to.equal(5);
        });
        it("should not allow non-numeric values for i or y", () => {
            let badSetI = () => v2r.setY("won't work", 5);
            let badSetY = () => v2r.setY(0, []);
            expect(badSetI).to.throw(TypeError, "i value must be a number");
            expect(badSetY).to.throw(TypeError, "y value must be a number");
        });
    });
});