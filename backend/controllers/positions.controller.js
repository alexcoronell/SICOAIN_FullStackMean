const Positions = require('../models/positions');

const positionCtrl = {};

positionCtrl.getPositions = async (req, res) => {
    const positionList = await Positions.find();
    res.json(positionList);
}

positionCtrl.getPosition = async (req, res) => {
    const position = await Positions.findById(req.params.id);
    res.json(position);
}

positionCtrl.createPositions = async (req, res) => {
    const position = new Positions(req.body);
    await position.save();
    res.json({
        'status': 'Position saved'
    });
}

positionCtrl.updatePositions = async (req, res) => {
    const {
        id
    } = req.params;
    const position = {
        name: req.body.name,
        description: req.body.description,
        contidion: req.body.condition
    }
    await Positions.findByIdAndUpdate(id, {
        $set: position
    }, {
        new: false
    });
    res.json({
        'status': 'Position updated'
    })
}


positionCtrl.inactivateposition = function() {

}

positionCtrl.activateposition = function() {

}

positionCtrl.deletePositions = async (req, res) => {
    await Positions.findByIdAndDelete(req.params.id)
    res.json({
        'status': 'Position deleted'
    })
}

module.exports = positionCtrl;