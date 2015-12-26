/// <reference path="../../../typings/mocha/mocha.d.ts" />
/// <reference path="../../__types__/expect.d.ts" />

import Budget from '../Budget';
import TransactionGroup from '../TransactionGroup';

describe("Budget", function(){
    describe("addGroup()", function(){
        it("group added in array TransactionGroup", function(){
            var budget = new Budget('my budget'),
                g1 = new TransactionGroup('credit');
            expect(budget.addGroup(g1)).to.contain('credit');
        });
    });
    describe('deleteGroup()', function(){
        it('group deleted from array TransactionGroup', function(){
            var budget = new Budget('my budget'),
                g1 = new TransactionGroup('credit');
                budget.addGroup(g1);
            expect(budget.deleteGroup(g1)).to.contain('credit')
        })
    })

});
