export class Events {

    constructor(
        _id = '',
        name = '',
        condition = true
    ){
        this._id = _id
        this.name = name,
        this.condition = condition
    }
    
    _id: string;
    name: String;
    condition: Boolean;
}
