const Venues = require('../models/venues');

const venuesCtrl = {};

venuesCtrl.getVenues = async (req, res) => {
    const venuesList = await Venues.find();
    res.json(venuesList);
}

venuesCtrl.getCampus = async (req, res) => {
    const name = req.body.name;
    const campusData = await Venues.findOne({
        name
    });
    if (!campusData) return res.status(401).send("The Campus doesn't exist");
    if (campusData) return res.status(200).json({
        campusData
    });
}

venuesCtrl.createVenues = async (req, res) => {
    const newCapus = new Venues(req.body);
    const name = req.body.name;
    const campusData = await Venues.findOne({
        name
    });
    if (campusData) return res.status(401).send("This Campus is already registered");
    await newCapus.save();
    res.json({
        'status': 'Campus saved'
    });
}

venuesCtrl.updateVenues = async (req, res) => {
    const filter = {
        "_id": req.body._id
    }
    const update = {
        $set: {
            company: req.body.company,
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            notes: req.body.notes
        }
    }
    await Venues.updateOne(filter, update, {
        new: false
    });
    res.json({
        'status': 'Campus updated'
    })
}

venuesCtrl.actDesact = async (req, res) => {
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
    await Venues.updateOne(filter, update, {
        new: true
    });
    res.json({
        'status': 'condition updated'
    })
}

module.exports = venuesCtrl;