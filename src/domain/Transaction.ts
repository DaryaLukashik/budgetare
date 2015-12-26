import Account from './Account';
import TransactionGroup from './TransactionGroup';
import Money from './Money';
import NotSameCurrencyError from './exceptions/SameAccountsError';
import NotSameCurrencyError from './exceptions/NotPositiveAmountError';

export default class Transaction {
    protected name: string;
    protected from: Account;
    protected to: Account;
    protected date: Date;
    protected group: TransactionGroup;
    protected payment: Money;

    constructor(
        from: Account,
        to: Account,
        payment: Money,
        name?: string,
        group?: TransactionGroup
    ) {
        if(from === to) {
            throw new SameAccountsError();
        }
        else {
            this.from = from;
            this.to = to;
        }
        if(payment.isNegative()) {
            throw new NotPositiveAmountError();
        }
        this.payment = payment;
        this.name = name;
        this.group = group;
        this.date = new Date();
    }
}
