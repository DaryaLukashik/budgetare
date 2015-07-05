import Account from './Account';
import Transaction from './Transaction';
import TransactionGroup from './TransactionGroup';

export default class Budget {
    private _name: string;
    private _groups: TransactionGroup[];
    private _transactions: Transaction[];
    private _accounts: Account[];
    constructor(name: string){
        this._name = name;
    }
}
