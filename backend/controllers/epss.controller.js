const Epss = require('../models/epss');

const epsCtrl = {};

epsCtrl.getEpss = async (req, res) => {
    const epsList = await Epss.find();
    res.json(epsList);
}

epsCtrl.getEps = async (req, res) => {
    const name = req.body.name;
    const EpsData = await Epss.findOne({
        name
    });
    if (!EpsData) return res.status(401).send("The EPS doen't exist");
    if (EpsData) return res.status(200).json({
        EpsData
    });
}

epsCtrl.createEpss = async (req, res) => {
    const newEps = new Epss(req.body);
    const name = req.body.name;
    const EpsData = await Epss.findOne({
        name
    });
    if (EpsData) return res.status(401).send("This EPS is already registered");
    await newEps.save();
    res.json({
        'status': 'EPS saved'
    });
}

epsCtrl.updateEpss = async (req, res) => {
    const filter = {
        "_id": req.body._id
    }
    const update = {
        $set: {
            name: req.body.name,
            description: req.body.description
        }
    }
    await Epss.updateOne(filter, update, {
        new: false
    });
    res.json({
        'status': 'Position updated'
    })
}

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
    await Epss.updateOne(filter, update, {
        new: true
    });
    res.json({
        'status': 'condition updated'
    })
}

module.exports = epsCtrl;