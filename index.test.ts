import {expect} from "chai";
import { counter } from ".";

describe("COUNTER METHOD",() => {
    it("should increment value",() => {
        const [getA,nextA] = counter(1);
        expect(getA()).to.be.eq(1);
        nextA();
        nextA();
        nextA();
        expect(getA()).to.be.eq(4);
    });

    it("should create separate instances for each counter",() => {
        const [getA,nextA] = counter(1);
        expect(getA()).to.be.eq(1);
        nextA();
        expect(getA()).to.be.eq(2);

        const [getB,nextB] = counter(5);
        expect(getB()).to.be.eq(5);
        nextB();
        expect(getB()).to.be.eq(6);

        expect(getA()).to.be.eq(2);
    });
})