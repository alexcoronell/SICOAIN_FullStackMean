const Events = require('../models/events');

const eventCtrl = {};

eventCtrl.getEvents = async (req, res) => {
    const eventList = await Events.find();
    res.json(eventList);
};

eventCtrl.getEvent = async (req, res) => {
    const {id} = req.params;
    const eventData = await Events.findOne({_id: id});
    if (! eventData) 
        return res.status(401).send("The Event doesn't exist");
    


    if (eventData) 
        return res.status(200).json({eventData});
    


};

eventCtrl.createEvents = async (req, res) => {
    const newEvent = new Events(req.body);
    const name = req.body.name;
    const eventData = await Events.findOne({name});
    if (eventData) 
        return res.status(401).send("This Event is already registered");
    


    await newEvent.save();
    res.json({'status': 'Event saved'});
};

eventCtrl.updateEvents = async (req, res) => {
    const filter = {
        "_id": req.body._id
    }
    const update = {
        $set: {
            name: req.body.name
        }
    }
    await Events.updateOne(filter, update, {new: false});
    res.json({'status': 'Event updated'})
};

eventCtrl.actDesact = async (req, res) => {
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
    await Events.updateOne(filter, update, {new: true});
    res.json({'status': 'condition updated'})
};

module.exports = eventCtrl;
