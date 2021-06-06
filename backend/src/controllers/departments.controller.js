const Departments = require('../models/departments');

const departmentCtrl = {};

departmentCtrl.getDepartments = async (req, res) => {
    const departments = await Departments.find().sort({
        "name": 1
    });
    res.json(departments);
}

module.exports = departmentCtrl;