import Currency from './Currency';
import NotSameCurrencyError from './exceptions/NotSameCurrencyError';

export default class Money{
    private _amount: number;
    private _currency: Currency;
    constructor();
    constructor(amount: Money);
    constructor(amount: number);
    constructor(amount: number, currency: Currency);
    constructor(amount?: any, currency?: Currency){
        if(amount instanceof Money){
            currency = amount.currency;
            amount = amount.amount;
        }
        if(!amount){
            amount = 0;
        }
        if(!currency){
            currency = new Currency;
        }
        this._amount = amount;
        this._currency = currency;
    }
    get amount(){
        return this._amount;
    }
    get currency(){
        return this._currency;
    }
    add(amount: number): Money;
    add(term: Money): Money;
    add(term: any): Money{
        let amount: number;
        if(term instanceof Money){
            if(!term.currency.isEqual(this.currency)){
                throw new NotSameCurrencyError;
            }
            amount = term.amount;
        }
        else if(!isNaN(term)) {
            amount = term;
        }
        else {
            throw new TypeError;
        }
        return new Money(this.amount + amount, this.currency);
    }
    subtract(amount: number): Money;
    subtract(subtrahend: Money): Money;
    subtract(subtrahend: any): Money{
        let amount: number;
        if(subtrahend instanceof Money){
            if(!subtrahend.currency.isEqual(this.currency)){
                throw new NotSameCurrencyError;
            }
            amount = subtrahend.amount;
        }
        else if(!isNaN(subtrahend)) {
            amount = subtrahend;
        }
        else {
            throw new TypeError;
        }
        return new Money(this.amount - amount, this.currency);
    }

    isNegative(): boolean{
       return this._amount < 0;
    }

    isZero(): boolean{
        return this._amount === 0;
    }
}
