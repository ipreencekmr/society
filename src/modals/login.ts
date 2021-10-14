export class LoginResponse {

    loginId:number;
    loginName:string;
    userRoleId:number;
    roleId:number;
    password:string;

    constructor() {
        this.loginId = 0;
        this.loginName = '';
        this.userRoleId = 0;
        this.roleId = 0;
        this.password = '';
    }
}
