export class Municipalities {
    constructor(
        _id = '',
        nombre = '',
        idDepartment = ''
    ){
        this._id = _id,
        this.nombre = nombre
        this.idDepartment = idDepartment
    }
    _id: string;
    nombre: string;
    idDepartment: string
}
