const Companies = require('../models/companies');

const companyCtrl = {};

// Get All Companies
companyCtrl.getCompanies = async (req, res) => {
    const CompanyList = await Companies.find();
    res.json(CompanyList);
}

// Get Company
companyCtrl.getCompany = async (req, res) => {
    const company = req.body.name;
    const companyData = await Companies.findOne({
        company
    });
    if (!companyData) return res.status(401).send("The company doen't exist");
    if (companyData) return res.status(200).json({
        companyData
    });
}

// Create Company
companyCtrl.createCompanies = async (req, res) => {
    const newCompany = new Companies(req.body);
    const name = req.body.name;
    const companyData = await Companies.findOne({
        name
    });
    if (companyData) return res.status(401).send("This company is already registered");
    await newCompany.save();
    res.json({
        'status': 'Company saved'
    });
}


// Update company
companyCtrl.updateCompanies = async (req, res) => {
    const filter = {
        "_id": req.body._id
    }
    const update = {
        $set: {
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            contidion: req.body.condition
        }
    }
    await Companies.updateOne(filter, update, {
        new: false
    });
    res.json({
        'status': 'Company updated'
    })
}

// Activate/Desactivate Companies
companyCtrl.actDesact = async (req, res) => {
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
    await Companies.updateOne(filter, update, {
        new: true
    });
    res.json({
        'status': 'condition updated'
    })
}


module.exports = companyCtrl;