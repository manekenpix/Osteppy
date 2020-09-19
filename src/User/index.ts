
export default class User {
    private userName: string;
    private userId: string;
    private eod: string[];

    constructor(name: string, id: string, eod?: string) {
        this.userName = name;
        this.userId = id;
        this.eod = [];

        if (eod) this.eod.push(eod);
    };
};
