import chai from 'chai';
import chaiSpies from 'chai-spies';
chai.use(chaiSpies);
const expect = chai.expect;
const spyOn = chai.spy.on;

import Point2D from '../lib/Point2D';
import Point2DArray from '../lib/Point2DArray';

describe("the Point2DArray class", () => {
    let p2r;
    beforeEach(() => { p2r = new Point2DArray(10,200); });
    describe("the constructor", () => {
        it("should create a new Point2DArray with supplied count and max values", () => {
            expect(p2r.count).to.equal(10);
            expect(p2r.max).to.equal(200);
        });
        it("should have 2 Float32Arrays - x & y", () => {
            expect(p2r.x).to.be.instanceOf(Float32Array);
            expect(p2r.y).to.be.instanceOf(Float32Array);
            expect(p2r.x.length).to.equal(200);
            expect(p2r.y.length).to.equal(200);
        });
        it("should not allow non-numeric values for count or max", () => {
            let badConstructorCount = () => new Point2DArray("NO U", 5);
            let badConstructorMax = () => new Point2DArray(5, "ok...");
            expect(badConstructorCount).to.throw(TypeError, "count value must be a number");
            expect(badConstructorMax).to.throw(TypeError, "max value must be a number");
        });
        it("should not allow count to be greater than max", () => {
            let badConstructor = () => new Point2DArray(500,50);
            expect(badConstructor).to.throw(RangeError, "count value cannot be greater than max value");
        });
    });
    describe("the get function", () => {
        it("should return an array", () => {
            let components = p2r.get(0);
            expect(components).to.be.an("Array");
            expect(components.length).to.equal(2);
        });
        it("should not allow non-numeric values for i", () => {
            let badGet = () => p2r.get("(╯°□°）╯︵ ┻━┻");
            expect(badGet).to.throw(TypeError, "i value must be a number");
        });
    });
    describe("the getPoint2D function", () => {
        it("should return a Point2D", () => {
            let point = p2r.getPoint2D(0);
            expect(point).to.be.an.instanceof(Point2D);
        });
        it("should not allow non-numeric values for i", () => {
            let badGet = () => p2r.getPoint2D("(╯°□°）╯︵ ┻━┻");
            expect(badGet).to.throw(TypeError, "i value must be a number");
        });
    });
    describe("the getX function", () => {
        it("should return the x value at supplied index", () => {
            p2r.setX(0, 5);
            expect(p2r.getX(0)).to.equal(5);
        });
        it("should not allow non-numeric values for i", () => {
            let badGet = () => p2r.getX("(╯°□°）╯︵ ┻━┻");
            expect(badGet).to.throw(TypeError, "i value must be a number");
        });
    });
    describe("the getY function", () => {
        it("should return the y value at supplied index", () => {
            p2r.setY(0, 5);
            expect(p2r.getY(0)).to.equal(5);
        });
        it("should not allow non-numeric values for i", () => {
            let badGet = () => p2r.getY("(╯°□°）╯︵ ┻━┻");
            expect(badGet).to.throw(TypeError, "i value must be a number");
        });
    });
    describe("the set function", () => {
        it("should set the supplied x, y values at the supplied index", () => {
            let x = 5;
            let y = 10;
            p2r.set(0, x, y);
            expect(p2r.x[0]).to.equal(x);
            expect(p2r.y[0]).to.equal(y);
        });
        it("should not allow non-numeric values for i, x, or y", () => {
            let badSetI = () => p2r.set("lel", 0, 0);
            let badSetX = () => p2r.set(0, "huehue", 0);
            let badSetY = () => p2r.set(0, 0, "doh");
            expect(badSetI).to.throw(TypeError, "i value must be a number");
            expect(badSetX).to.throw(TypeError, "x value must be a number");
            expect(badSetY).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("the setFromComponents function", () => {
        it("should set the x, y values from supplied components at the supplied index", () => {
            let components = [2,3];
            p2r.setFromComponents(0, components);
            expect(p2r.get(0)).to.eql(components);
        });
        it("should not allow non-numeric values for i, x, or y", () => {
            let badSetI = () => p2r.setFromComponents({}, [0,0]);
            let badSetX = () => p2r.setFromComponents(0, ["badbadnotgood", 0]);
            let badSetY = () => p2r.setFromComponents(0, [0,"yudodis"]);
            expect(badSetI).to.throw(TypeError, "i value must be a number");
            expect(badSetX).to.throw(TypeError, "x value must be a number");
            expect(badSetY).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("the setFromPoint2D function", () => {
        let point, x, y;
        beforeEach(() => { 
            x = 5;
            y = 5;
            point = new Point2D(x,y); 
        });
        it("should set the x, y values from supplied pointtor's components at the supplied index", () => {
            p2r.setFromPoint2D(0, point);
            expect(p2r.get(0)).to.eql([x,y]);
        });
        it("should not allow non-numeric values for i, x, or y", () => {
            let badSetI = () => p2r.setFromPoint2D({}, {x, y});
            let badSetX = () => p2r.setFromPoint2D(0, {x: [], y});
            let badSetY = () => p2r.setFromPoint2D(0, {x, y: []});
            expect(badSetI).to.throw(TypeError, "i value must be a number");
            expect(badSetX).to.throw(TypeError, "x value must be a number");
            expect(badSetY).to.throw(TypeError, "y value must be a number");
        });
    });
    describe("the setX function", () => {
        it("should set the supplied x value at the supplied index", () => {
            p2r.setX(0, 5);
            expect(p2r.x[0]).to.equal(5);
        });
        it("should not allow non-numeric values for i or x", () => {
            let badSetI = () => p2r.setX("won't work", 5);
            let badSetX = () => p2r.setX(0, []);
            expect(badSetI).to.throw(TypeError, "i value must be a number");
            expect(badSetX).to.throw(TypeError, "x value must be a number");
        });
    });
    describe("the setY function", () => {
        it("should set the supplied y value at the supplied index", () => {
            p2r.setY(0, 5);
            expect(p2r.y[0]).to.equal(5);
        });
        it("should not allow non-numeric values for i or y", () => {
            let badSetI = () => p2r.setY("won't work", 5);
            let badSetY = () => p2r.setY(0, []);
            expect(badSetI).to.throw(TypeError, "i value must be a number");
            expect(badSetY).to.throw(TypeError, "y value must be a number");
        });
    });
});