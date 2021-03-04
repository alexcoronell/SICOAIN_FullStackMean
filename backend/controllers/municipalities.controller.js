const Municipalities = require('../models/Municipalities');

const municipalityCtrl = {};

municipalityCtrl.getMunicipalities = async (req, res) => {
    const municipalityList = await Municipalities.find();
    res.json(municipalityList);
}

municipalityCtrl.getMunicipality = async (req, res) => {
    const municipality = await Municipalities.findById(req.params.id);
    res.json(municipality);
}

module.exports = municipalityCtrl;