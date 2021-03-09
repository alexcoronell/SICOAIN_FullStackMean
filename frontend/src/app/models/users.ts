export class Users {

    constructor(
        _id = '',
        name = '',
        superuser = false,
        admin = false,
        analyst = false,
        assistant = false,
        consultant = false,
        password = '',
        condition = true
    ){
        this._id = _id,
        this.name = name,
        this.superuser = superuser,
        this.admin = admin,
        this.analyst = analyst,
        this.assistant = assistant,
        this.consultant = consultant,
        this.password = password,
        this.condition = condition
    }

    _id: string;
    user: string;
    name: string;
    superuser: boolean;
    admin: boolean;
    analyst: boolean;
    assistant: boolean;
    consultant: boolean;
    password: string;
    condition: boolean;
}
