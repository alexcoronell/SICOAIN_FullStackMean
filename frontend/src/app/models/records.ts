export class Records {

    constructor(
        _id = '',
        idRecord = '',
        employee = '',
        events = '',
        dateRecord = '',
        dataIncident = '',
        description = '',
        filename = '',
        reasonForCancellation = '',
        condition = true
    ){
        this._id = _id
        this.idRecord = idRecord
        this.employee = employee,
        this.events = events,
        this.dateRecord = dateRecord,
        this.dataIncident = dataIncident,
        this.description = description,
        this.filename = filename,
        this.reasonForCancellation = reasonForCancellation,
        this.condition = condition
    }

    _id: string;
    idRecord: String;
    employee: String;
    events: String;
    dateRecord: String;
    dataIncident: String;
    description: String;
    filename: String;
    reasonForCancellation: String;
    condition: Boolean;

}
