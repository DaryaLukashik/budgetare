export default class SameAccountsError implements Error{
    name: string;
    message: string;
    constructor(message?: string){
        this.name = "SameAccountsError";
        this.message = message;
    }
};
