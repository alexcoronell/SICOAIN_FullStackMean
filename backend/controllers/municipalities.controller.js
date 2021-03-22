const Municipalities = require('../models/municipalities');

const municipalityCtrl = {};

municipalityCtrl.getMunicipalities = async (req, res) => {
    const municipalities = await Municipalities.find();
    res.json(municipalities);
}

municipalityCtrl.getMunicipalitiesDepartment = async (req, res) => {
    const municipalityList = await Municipalities.find();
    res.json(municipalityList);
}

module.exports = municipalityCtrl;