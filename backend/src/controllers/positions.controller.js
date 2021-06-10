const Positions = require('../models/positions');

const positionCtrl = {};

positionCtrl.getPositions = async (req, res) => {
    const positions = await Positions.find().sort({"name": 1});
    res.json(positions);
};

positionCtrl.getActivePositions = async (req, res) => {
    const positions = await Positions.find({condition: true}).sort({"name": 1});
    res.json(positions);
};

positionCtrl.getPosition = async (req, res) => {
    const name = req.body.name;
    const positionData = await Positions.findOne({name});
    if (! positionData) 
        return res.status(401).send("The Position doesn't exist");
    
    if (positionData) 
        return res.status(200).json({positionData});
    
};

positionCtrl.createPositions = async (req, res) => {
    const newPosition = new Positions(req.body);
    const name = req.body.name;
    const positionData = await Positions.findOne({name});
    if (positionData) 
        return res.status(401).send("This position is already registered");
    


    await newPosition.save();
    res.json({'status': 'Position saved'});
};

positionCtrl.updatePositions = async (req, res) => {
    const filter = {
        "_id": req.body._id
    }
    const update = {
        $set: {
            name: req.body.name,
            description: req.body.description
        }
    }
    await Positions.updateOne(filter, update, {new: false});
    res.json({'status': 'Position updated'})
};

positionCtrl.actDesact = async (req, res) => {
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
    await Positions.updateOne(filter, update, {new: true});
    res.json({'status': 'condition updated'})
};


module.exports = positionCtrl;
