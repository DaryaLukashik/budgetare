import Account from './Account';
import TransactionGroup from './TransactionGroup';
import Money from './Money';

export default class Transaction {
    name: string;
    from: Account;
    to: Account;
    groups: TransactionGroup[];
    payment: Money;
}
