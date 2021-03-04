const Arls = require('../models/arl');

const arlCtrl = {};

arlCtrl.getArls = async (req, res) => {
    const ArlList = await Arls.find();
    res.json(ArlList);
}

arlCtrl.getArl = async (req, res) => {
    const Arl = await Arls.findById(req.params.id);
    res.json(Arl);
}

arlCtrl.createArls = async (req, res) => {
    const Arl = new Arls(req.body);
    await Arl.save();
    res.json({
        'status': 'Arl saved'
    });
}

arlCtrl.updateArls = async (req, res) => {
    const {
        id
    } = req.params;
    const Arl = {
        Arl: req.body.Arl,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        email: req.body.email,
        contidion: req.body.condition
    }
    await Arls.findByIdAndUpdate(id, {
        $set: Arl
    }, {
        new: false
    });
    res.json({
        'status': 'Arl updated'
    })
}

arlCtrl.inactivateArl = function() {

}

arlCtrl.activateArl = function() {

}

arlCtrl.deleteArl = async (req, res) => {
    await Arls.findByIdAndDelete(req.params.id)
    res.json({
        'status': 'Arl deleted'
    })
}

module.exports = arlCtrl;