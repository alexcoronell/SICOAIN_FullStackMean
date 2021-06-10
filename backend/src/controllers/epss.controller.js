const Epss = require('../models/epss');

const epsCtrl = {};

// Get all
epsCtrl.getEpss = async (req, res) => {
    const epss = await Epss.find().sort({"name": 1});
    res.json(epss);
};

// Get All Active
epsCtrl.getActiveEpss = async (req, res) => {
    const epss = await Epss.find({condition: true}).sort({"name": 1});
    res.json(epss);
};

// Get Eps
epsCtrl.getEps = async (req, res) => {
    const name = req.body.name;
    const epsData = await Epss.findOne({name});
    if (! epsData) 
        return res.status(401).send("The EPS doesn't exist");
    
    if (epsData) 
        return res.status(200).json({epsData});
    
};

// Create
epsCtrl.createEpss = async (req, res) => {
    const newEps = new Epss(req.body);
    const name = req.body.name;
    const EpsData = await Epss.findOne({name});
    if (EpsData) 
        return res.status(401).send("This EPS is already registered");
    
    await newEps.save();
    res.json({'status': 'EPS saved'});
};

// Update
epsCtrl.updateEpss = async (req, res) => {
    const filter = {
        "_id": req.body._id
    }
    const update = {
        $set: {
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            email: req.body.email
        }
    }
    await Epss.updateOne(filter, update, {new: false});
    res.json({'status': 'EPS updated'})
};

// Active and Desactive
epsCtrl.actDesact = async (req, res) => {
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
    await Epss.updateOne(filter, update, {new: true});
    res.json({'status': 'condition updated'})
};

module.exports = epsCtrl;
