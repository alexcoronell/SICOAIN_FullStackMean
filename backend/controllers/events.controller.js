const Events = require('../models/events');

const eventCtrl = {};

eventCtrl.getEvents = async (req, res) => {
    const eventList = await Events.find();
    res.json(eventList);
}

eventCtrl.getEvent = async (req, res) => {
    const event = await Events.findById(req.params.id);
    res.json(event);
}

eventCtrl.createEvents = async (req, res) => {
    const event = new Events(req.body);
    await event.save();
    res.json({
        'status': 'Event saved'
    });
}

eventCtrl.updateEvents = async (req, res) => {
    const {
        id
    } = req.params;
    const event = {
        name: req.body.name,
        contidion: req.body.condition
    }
    await Events.findByIdAndUpdate(id, {
        $set: event
    }, {
        new: false
    });
    res.json({
        'status': 'Event updated'
    })
}

eventCtrl.activateEvent = function() {

}

eventCtrl.inactivateEvent = function() {

}

eventCtrl.deleteEvents = async (req, res) => {
    await Events.findByIdAndDelete(req.params.id)
    res.json({
        'status': 'Event deleted'
    })
}

module.exports = eventCtrl;