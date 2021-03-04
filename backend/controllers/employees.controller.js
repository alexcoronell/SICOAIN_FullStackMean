const Employees = require('../models/employees');

const EmployeeCtrl = {};

EmployeeCtrl.getEmployees = async (req, res) => {
    const employeeList = await Employees.find();
    res.json(employeeList);
}

EmployeeCtrl.getEmployee = async (req, res) => {
    const employee = await Employees.findById(req.params.id);
    res.json(employee);
}

EmployeeCtrl.createEmployees = async (req, res) => {
    const employee = new Employees(req.body);
    await employee.save();
    res.json({
        'status': 'Employee saved'
    });
}

EmployeeCtrl.updateEmployees = async (req, res) => {
    const {
        id
    } = req.params;
    const employee = {
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
        coments: req.body.coments,
        contidion: req.body.condition
    }
    await Employees.findByIdAndUpdate(id, {
        $set: employee
    }, {
        new: false
    });
    res.json({
        'status': 'Employee updated'
    })
}

EmployeeCtrl.inactivateEmployee = function() {

}

EmployeeCtrl.activateEmployee = function() {

}

EmployeeCtrl.deleteEmployees = async (req, res) => {
    await Employees.findByIdAndDelete(req.params.id)
    res.json({
        'status': 'Employee deleted'
    })
}

module.exports = EmployeeCtrl;