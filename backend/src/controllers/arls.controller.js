const Arls = require('../models/arls');

const arlCtrl = {};

// Get All ARL
arlCtrl.getArls = async (req, res) => {
    const arls = await Arls.find().sort({"name": 1});
    res.json(arls);
};

// Get All Active ARL
arlCtrl.getActiveArls = async (req, res) => {
    const arls = await Arls.find({condition: true}).sort({"name": 1});
    res.json(arls);
};

// Get Arl
arlCtrl.getArl = async (req, res) => {
    const name = req.body.name;
    const arlData = await Arls.findOne({name});
    if (! arlData) 
        return res.status(401).send("The ARL doens't exist");
    


    if (arlData) 
        return res.status(200).json({arlData});
    


};

// Create Arl
arlCtrl.createArls = async (req, res) => {
    const newArl = new Arls(req.body);
    const name = req.body.name;
    const arlData = await Arls.findOne({name});
    if (arlData) 
        return res.status(401).send("This ARL is already registered");
    


    await newArl.save();
    res.json({'status': 'ARL saved'});
};

// Update Arl
arlCtrl.updateArls = async (req, res) => {
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
    await Arls.updateOne(filter, update, {new: false});
    res.json({'status': 'ARL updated'})
};

// Active and Desactive Arl
arlCtrl.actDesact = async (req, res) => {
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
    await Arls.updateOne(filter, update, {new: true});
    res.json({'status': 'condition updated'})
}

module.exports = arlCtrl;
