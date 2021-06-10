const Companies = require('../models/companies');

const companyCtrl = {};

// Get All Companies
companyCtrl.getCompanies = async (req, res) => {
    const companies = await Companies.find().sort({"name": 1});
    res.json(companies);
};

// Get All Active Companies
companyCtrl.getActiveCompanies = async (req, res) => {
    const companies = await Companies.find({condition: true}).sort({"name": 1});
    res.json(companies);
};

// Get Company
companyCtrl.getCompany = async (req, res) => {
    const name = req.body.name;
    const companyData = await Companies.findOne({name});
    if (! companyData) 
        return res.status(401).send("The company doesn't exist");
    
    if (companyData) 
        return res.status(200).json({companyData});
    
};

// Create Company
companyCtrl.createCompanies = async (req, res) => {
    const newCompany = new Companies(req.body);
    const name = req.body.name;
    const companyData = await Companies.findOne({name});
    if (companyData) 
        return res.status(401).send("This company is already registered");
    
    await newCompany.save();
    res.json({'status': 'Company saved'});
};


// Update company
companyCtrl.updateCompanies = async (req, res) => {
    const filter = {
        "_id": req.body._id
    }
    const update = {
        $set: {
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address
        }
    }
    await Companies.updateOne(filter, update, {new: false});
    res.json({'status': 'Company updated'})
};

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
    await Companies.updateOne(filter, update, {new: true});
    res.json({'status': 'condition updated'})
};


module.exports = companyCtrl;
