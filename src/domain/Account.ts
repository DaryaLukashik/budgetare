import Currency from './Currency';
import Money from './Money';
import Transaction from './Transaction';
import NotSameCurrencyError from './exception/AccountExists'

export default class Account {
    protected name: string;
    protected currency: Currency;
    protected money: Money;
    protected transactions: Transaction[];

    constructor(
        name: string,
        currency: Currency
    );
    constructor(
        name: string,
        currency: Currency,
        money: Money
    );
    constructor(
        name: string,
        currency: Currency,
        money?: Money

    ){
        this.name = name;
        if(!money) {
            this.money = new Money(0, currency);
        }
        this.money = money;
        this.currency = currency;

    }
    credit(transaction: Transaction): Account{
        if(this.currency.isEqual(transaction.money.currency)) {
            this.money.amount = this.money.amount + transaction.money.amount;
            this.transactions.push(transaction);
        }
        else {
            throw new NotSameCurrencyError();
        }
        return this;
    }

    debit(transaction: Transaction): Account{
        if(this.currency.isEqual(transaction.money.currency)) {
            this.money.amount = this.money.amount - transaction.money.amount;
            this.transactions.push(transaction);
        }
        else {
            throw new NotSameCurrencyError();
        }
        return this;
    }
}
