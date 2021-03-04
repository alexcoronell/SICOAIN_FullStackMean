const Arls = require('../models/arls');

const arlCtrl = {};

arlCtrl.getArls = async (req, res) => {
    const ArlList = await Arls.find();
    res.json(ArlList);
}

arlCtrl.getArl = async (req, res) => {
    const arl = await Arls.findById(req.params.id);
    res.json(arl);
}

arlCtrl.createArls = async (req, res) => {
    const arl = new Arls(req.body);
    await arl.save();
    res.json({
        'status': 'Arl saved'
    });
}

arlCtrl.updateArls = async (req, res) => {
    const {
        id
    } = req.params;
    const arl = {
        Arl: req.body.Arl,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        email: req.body.email,
        contidion: req.body.condition
    }
    await Arls.findByIdAndUpdate(id, {
        $set: arl
    }, {
        new: false
    });
    res.json({
        'status': 'Arl updated'
    })
}

arlCtrl.inactivateArls = function() {

}

arlCtrl.activateArls = function() {

}

arlCtrl.deleteArls = async (req, res) => {
    await Arls.findByIdAndDelete(req.params.id)
    res.json({
        'status': 'Arl deleted'
    })
}

module.exports = arlCtrl;