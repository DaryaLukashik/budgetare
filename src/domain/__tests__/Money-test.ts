/// <reference path="../../../typings/mocha/mocha.d.ts" />
/// <reference path="../../__types__/expect.d.ts" />
import Money from '../Money';
import Currency from '../Currency';
import NotSameCurrencyError from '../exceptions/NotSameCurrencyError';

describe("Money", function(){
    it("takes amount as first argument", function(){
        var m = new Money(10);
        expect(m.amount).to.equal(10);
    });
    it("takes currency as second argument", function(){
        var m = new Money(0, new Currency("EUR"));
        expect(m.currency.name).to.equal("EUR");
    });
    it("has default value of amount equals 0", function(){
        var m = new Money();
        expect(m.amount).to.equal(0);
    });
    it("has default value of currency equals USD", function(){
        var m = new Money();
        expect(m.currency.name).to.equal("USD");
    });
    describe("add()", function(){
        it("works for same currency", function(){
            var m1 = new Money(20),
            m2 = new Money(40);
            expect(m1.add(m2).amount).to.equal(60);
        });
        it("works with numbers", () => {
            var m1 = new Money(20);
            expect(m1.add(30).amount).to.equal(50);
        });
        it("returns new object", function(){
            var m1 = new Money(),
            m2 = new Money();
            expect(m1.add(m2)).not.to.equal(m1);
            expect(m1.add(m2)).not.to.equal(m2);
        });
        it("throws error when not same currency passed", () => {
            let c1 = new Currency("EUR"),
            c2 = new Currency("GBP"),
            m1 = new Money(10, c1),
            m2 = new Money(20, c2);
            expect(() => {
                m1.add(m2);
            }).to.throw(NotSameCurrencyError);
        });
    });
    describe("subtract()", function(){
        it("subtracts money with same currency", function(){
            let c = new Currency("EUR");
            let m1 = new Money(40, c),
            m2 = new Money(20, c);
            expect(m1.subtract(m2).amount).to.equal(20);
        });
        it("works with numbers", () => {
            var m1 = new Money(20);
            expect(m1.subtract(15).amount).to.equal(5);
        });
        it("returns new object", function(){
            var m1 = new Money(),
            m2 = new Money();
            expect(m1.subtract(m2)).not.to.equal(m1);
            expect(m1.subtract(m2)).not.to.equal(m2);
        });
        it("throws error when not same currency passed", () => {
            let c1 = new Currency("EUR"),
            c2 = new Currency("GBP"),
            m1 = new Money(10, c1),
            m2 = new Money(20, c2);
            expect(() => {
                m1.subtract(m2);
            }).to.throw(NotSameCurrencyError);
        });
    });
    describe("isNegative()", function(){
        it("checks money.amount is negative", function(){
            let m = new Money(-5);
            expect(m.isNegative()).to.equal(true);
        });
    });
    describe("isZero()", function(){
       it("checks money.amount is zero", function(){
           let m = new Money(0);
           expect(m.isZero()).to.equal(true);
       });
    });
});
