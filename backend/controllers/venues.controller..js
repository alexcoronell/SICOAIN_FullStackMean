const Venues = require('../models/venues');

const venuesCtrl = {};

venuesCtrl.getVenues = async (req, res) => {
    const venuesList = await Venues.find();
    res.json(venuesList);
}

venuesCtrl.getCampus = async (req, res) => {
    const Campus = await Venues.findById(req.params.id);
    res.json(Campus);
}

venuesCtrl.createVenues = async (req, res) => {
    const venues = new Venues(req.body);
    await venues.save();
    res.json({
        'status': 'Campus saved'
    });
}

venuesCtrl.updateVenues = async (req, res) => {
    const {
        id
    } = req.params;
    const venues = {
        company: req.body.company,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        notes: req.body.notes,
        contidion: req.body.condition
    }
    await Venues.findByIdAndUpdate(id, {
        $set: venues
    }, {
        new: false
    });
    res.json({
        'status': 'Campus updated'
    })
}

venuesCtrl.inactivateVenues = function() {

}

venuesCtrl.activateVenues = function() {

}

venuesCtrl.deleteVenues = async (req, res) => {
    await Venues.findByIdAndDelete(req.params.id)
    res.json({
        'status': 'Campus deleted'
    })
}

module.exports = venuesCtrl;