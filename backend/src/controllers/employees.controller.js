const Employees = require('../models/employees');

const EmployeeCtrl = {};

EmployeeCtrl.getEmployees = async (req, res) => {
    const employeeList = await Employees.find().sort({"identificationNumber": 1});
    res.json(employeeList);
};

EmployeeCtrl.getEmployee = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    const employeeData = await Employees.findOne({_id: id});
    if (! employeeData) 
        return res.status(401).send("The Employee doesn't exist");
    

    if (employeeData) 
        return res.status(200).json({employeeData});
    
};

EmployeeCtrl.createEmployees = async (req, res) => {
    const newEmployee = new Employees(req.body);
    const identificationNumber = req.body.identificationNumber;
    const employeeData = await Employees.findOne({identificationNumber});
    if (employeeData) {
        return res.status(401).send("This Employee is already registered");
    }
    await newEmployee.save();
    res.json({'status': 'Employee saved'});
};

EmployeeCtrl.updateEmployees = async (req, res) => {

    const filter = {
        "_id": req.body._id
    }
    const update = {
        $set: {
            identificationType: req.body.identificationType,
            identificationNumber: req.body.identificationNumber,
            names: req.body.names,
            lastNames: req.body.lastNames,
            department: req.body.department,
            municipality: req.body.municipality,
            address: req.body.address,
            phone: req.body.phone,
            mobile: req.body.mobile,
            email: req.body.email,
            company: req.body.company,
            venues: req.body.venues,
            position: req.body.position,
            eps: req.body.eps,
            arl: req.body.arl,
            emergencyContactName: req.body.emergencyContactName,
            emergencyContactPhone: req.body.emergencyContactPhone,
            emergencyContactRelationship: req.body.emergencyContactRelationship,
            coments: req.body.coments
        }
    }
    await Employees.updateOne(filter, update, {new: false});
    res.json({'status': 'Employee updated'})
};

EmployeeCtrl.actDesact = async (req, res) => {
    const filter = {
        "_id": req.body._id
    }
    const oldCondition = req.body.condition;
    var newCondition;
    if (oldCondition == true) {
        newCondition = false
    } else {
        newCondition = true
    }
    const update = {
        $set: {
            condition: newCondition
        }
    }
    await Employees.updateOne(filter, update, {new: true});
    res.json({'status': 'condition updated'})
};

module.exports = EmployeeCtrl;
