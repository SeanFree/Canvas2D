import chai from 'chai';
import chaiSpies from 'chai-spies';
chai.use(chaiSpies);
const expect = chai.expect;
const spyOn = chai.spy.on;

import Vec2DArray from '../lib/Vec2DArray';

describe("the Vec2DArray class", () => {
    describe("the constructor", () => {
        it("should create a new Vec2DArray with supplied count and max values", () => {
            let v2r = new Vec2DArray(10, 200);
            expect(v2r.count).to.equal(10);
            expect(v2r.max).to.equal(200);
        });
        it("should have 2 Float32Arrays - x & y", () => {
            let v2r = new Vec2DArray(10, 200);
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
});