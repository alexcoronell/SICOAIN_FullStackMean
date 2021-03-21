const Arls = require('../models/arls');

const arlCtrl = {};

arlCtrl.getArls = async (req, res) => {
    const ArlList = await Arls.find();
    res.json(ArlList);
}

arlCtrl.getArl = async (req, res) => {
    const name = req.body.name;
    const arlData = await Arls.findOne({
        name
    });
    if (!arlData) return res.status(401).send("The ARL doen't exist");
    if (arlData) return res.status(200).json({
        arlData
    });
}

arlCtrl.createArls = async (req, res) => {
    const newArl = new Arls(req.body);
    const name = req.body.name;
    const arlData = await Arls.findOne({
        name
    });
    if (arlData) return res.status(401).send("This ARL is already registered");
    await newArl.save();
    res.json({
        'status': 'ARL saved'
    });
}

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
    await Arls.updateOne(filter, update, {
        new: false
    });
    res.json({
        'status': 'ARL updated'
    })
}

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
    await Arls.updateOne(filter, update, {
        new: true
    });
    res.json({
        'status': 'condition updated'
    })
}

module.exports = arlCtrl;