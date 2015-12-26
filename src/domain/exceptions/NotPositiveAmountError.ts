export default class NotPositiveAmountError implements Error{
    name: string;
    message: string;
    constructor(message?: string){
        this.name = "NotPositiveAmountError";
        this.message = message;
    }
};

