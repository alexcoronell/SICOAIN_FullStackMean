export class Employees {

    constructor(
        _id = '',
        identificationType = '',
        identificationNumber = '',
        names = '',
        lastNames = '',
        department = '',
        municipality = '',
        address = '',
        phone = '',
        mobile = '',
        email = '',
        company = '',
        venues = '',
        position = '',
        eps = '',
        arl = '',
        emergencyContactName = '',
        emergencyContactPhone = '',
        emergencyContactRelationship = '',
        coments = '',
        condition = true
    ){
        this._id = _id
        this.identificationType = identificationType
        this.identificationNumber = identificationNumber,
        this.names = names,
        this.lastNames = lastNames,
        this.department = department,
        this.municipality = municipality,
        this.address = address,
        this.phone = phone,
        this.mobile = mobile,
        this.email = email,
        this.company = company,
        this.venues = venues,
        this.position = position,
        this.eps = eps,
        this.arl = arl,
        this.emergencyContactName = emergencyContactName,
        this.emergencyContactPhone = emergencyContactPhone,
        this.emergencyContactRelationship = emergencyContactRelationship,
        this.coments = coments,
        this.condition = condition
    }

    _id: string;
    identificationType: String;
    identificationNumber: String;
    names: String;
    lastNames: String;
    department: String;
    municipality: String;
    address: String;
    phone: String;
    mobile: String;
    email: String;
    company: String;
    venues: String;
    position: String;
    eps: String;
    arl: String;
    emergencyContactName: String;
    emergencyContactPhone: String;
    emergencyContactRelationship: String;
    coments: String;
    condition: Boolean;

}
