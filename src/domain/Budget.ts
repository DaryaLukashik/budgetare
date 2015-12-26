import Account from './Account';
import TransactionGroup from './TransactionGroup';
import Money from './Money';
import AccountExists from './exception/AccountExists'

export default class Budget {
    private name: string;
    private groups: TransactionGroup[];
    private accounts: Account[];

    constructor(name: string){
        this.name = name;
    }

    addGroup(group: TransactionGroup): Budget{
        this.groups.push(group);
        return this;
    }

    addAccount(account: Account): Budget{
        if(this.accounts.indexOf(account) === -1){
            this.accounts.push(account);
        }
        else{
            throw new AccountExistsError();
        }
        return this;
    }

    deleteGroup(group: TransactionGroup): Budget{
        this.groups.splice(this.groups.indexOf(group), 1);
        return this;
    }

    deleteAccount(account: Account): Budget{
            this.accounts.splice(this.accounts.indexOf(account), 1);
        return this;
    }
}
