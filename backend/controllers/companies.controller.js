const Companies = require('../models/companies');

const companyCtrl = {};

companyCtrl.getCompanies = async (req, res) => {
    const CompanyList = await Companies.find();
    res.json(CompanyList);
}

companyCtrl.getCompany = async (req, res) => {
    const Company = await Companies.findById(req.params.id);
    res.json(Company);
}

companyCtrl.createCompanies = async (req, res) => {
    const Company = new Companies(req.body);
    await Company.save();
    res.json({
        'status': 'Company saved'
    });
}

companyCtrl.updateCompanies = async (req, res) => {
    const {
        id
    } = req.params;
    const Company = {
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        contidion: req.body.condition
    }
    await Companies.findByIdAndUpdate(id, {
        $set: Company
    }, {
        new: false
    });
    res.json({
        'status': 'Company updated'
    })
}

companyCtrl.inactivateCompany = function() {

}

companyCtrl.activateCompany = function() {

}

companyCtrl.deleteCompany = async (req, res) => {
    await Companies.findByIdAndDelete(req.params.id)
    res.json({
        'status': 'Company deleted'
    })
}

module.exports = companyCtrl;