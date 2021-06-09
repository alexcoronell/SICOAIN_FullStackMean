export class Records {

    constructor(
        _id = '',
        idRecord = '',
        employee = '',
        employeeName = '',
        event = '',
        dateRecord = '',
        dateIncident = '',
        description = '',
        filename = '',
        reasonForCancellation = '',
        condition = true
    ){
        this._id = _id
        this.idRecord = idRecord
        this.employee = employee,
        this.employeeName = employeeName,
        this.event = event,
        this.dateRecord = dateRecord,
        this.dateIncident = dateIncident,
        this.description = description,
        this.filename = filename,
        this.reasonForCancellation = reasonForCancellation,
        this.condition = condition
    }

    _id: string;
    idRecord: String;
    employee: String;
    employeeName: String;
    event: String;
    dateRecord: String;
    dateIncident: String;
    description: String;
    filename: String;
    reasonForCancellation: String;
    condition: Boolean;

}
