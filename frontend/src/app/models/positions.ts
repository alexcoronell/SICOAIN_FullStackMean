export class Positions {
    constructor(
        _id = '',
        name = '',
        description = '',
        condition = true
    ){
        this._id = _id,
        this.name = name,
        this.description = description,
        this.condition = condition
    }

    _id: string;
    name: string;
    description: string;
    condition: boolean;
}
