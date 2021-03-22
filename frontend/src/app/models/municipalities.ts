export class Municipalities {
    constructor(
        _id = '',
        name = '',
        department = ''
    ){
        this._id = _id,
        this.name = name
        this.department = department
    }
    _id: string;
    name: string;
    department: string
}
