export class Eps {

    constructor(
        _id = '',
        name = '',
        phone = '',
        address = '',
        email = '',
        condition = true
    ){
        this._id = _id,
        this.name = name,
        this.phone = phone,
        this.address = address,
        this.email = email,
        this.condition = condition
    }

    _id: string;
    name: string;
    phone: string;
    address: string;
    email: string;
    condition: boolean;
}
