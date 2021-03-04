const Departments = require('../models/departments');

const departmentCtrl = {};

departmentCtrl.getDepartments = async (req, res) => {
    const departmentList = await Departments.find();
    res.json(departmentList);
}

departmentCtrl.getDepartment = async (req, res) => {
    const department = await Departments.findById(req.params.id);
    res.json(department);
}

module.exports = departmentCtrl;