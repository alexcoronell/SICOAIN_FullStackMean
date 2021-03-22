const Departments = require('../models/departments');

const departmentCtrl = {};

departmentCtrl.getDepartments = async (req, res) => {
    const departments = await Departments.find();
    res.json(departments);
}

module.exports = departmentCtrl;