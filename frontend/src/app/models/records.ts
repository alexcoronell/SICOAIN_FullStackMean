export class Records {

    constructor(
        _id = '',
        idRecord = '',
        employee = '',
        events = '',
        dateRecord = '',
        dataIncident = '',
        description = '',
        digitalEvidence = '',
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
        this.digitalEvidence = digitalEvidence,
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
    digitalEvidence: String;
    reasonForCancellation: String;
    condition: Boolean;
    
}
