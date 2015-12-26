export default class AccountExistsError implements Error{
    name: string;
    message: string;
    constructor(message?: string){
        this.name = "AccountExistsError";
        this.message = message;
    }
};

