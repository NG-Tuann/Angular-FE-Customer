export class LoginModel {
    username: string;
    password: string;

    constructor(usr: string, pass: string){
        this.username = usr;
        this.password = pass;
    }
}