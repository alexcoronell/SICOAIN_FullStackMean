export class Venues {

    constructor(
        _id = '',
        company = '',
        name = '',
        phone = '',
        address = '',
        notes = '',
        condition = true
    ){
        this._id = _id,
        this.company = company,
        this.name = name,
        this.phone = phone,
        this.address = address,
        this.notes = notes,
        this.condition = condition
    }

    _id: string;
    company: string;
    name: string;
    phone: string;
    address: string;
    notes: string;
    condition: boolean;
}
