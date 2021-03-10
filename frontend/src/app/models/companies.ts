export class Companies {

    constructor(
        _id = '',
        name = '',
        phone = '',
        address = '',
        condition = true
    ){
        this._id = _id,
        this.name = name,
        this.phone = phone,
        this.address = address,
        this.condition = condition
    }

    _id: string;
    name: string;
    phone: string;
    address: string;
    condition: boolean;

}
