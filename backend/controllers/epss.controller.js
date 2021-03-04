const Epss = require('../models/epss');

const epsCtrl = {};

epsCtrl.getEpss = async (req, res) => {
    const epsList = await Epss.find();
    res.json(epsList);
}

epsCtrl.getEps = async (req, res) => {
    const eps = await Epss.findById(req.params.id);
    res.json(eps);
}

epsCtrl.createEpss = async (req, res) => {
    const eps = new Epss(req.body);
    await eps.save();
    res.json({
        'status': 'Eps saved'
    });
}

epsCtrl.updateEpss = async (req, res) => {
    const {
        id
    } = req.params;
    const eps = {
        eps: req.body.eps,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        email: req.body.email,
        contidion: req.body.condition
    }
    await Epss.findByIdAndUpdate(id, {
        $set: eps
    }, {
        new: false
    });
    res.json({
        'status': 'Eps updated'
    })
}

epsCtrl.inactivateEps = function() {

}

epsCtrl.activateEps = function() {

}

epsCtrl.deleteEpss = async (req, res) => {
    await Epss.findByIdAndDelete(req.params.id)
    res.json({
        'status': 'Eps deleted'
    })
}

module.exports = epsCtrl;