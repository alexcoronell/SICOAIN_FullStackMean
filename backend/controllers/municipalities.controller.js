const Municipalities = require('../models/municipalities');

const municipalityCtrl = {};

municipalityCtrl.getMunicipalities = async (req, res) => {
    const municipalities = await Municipalities.find();
    res.json(municipalities);
}

municipalityCtrl.getMunicipalitiesDepartment = async (req, res) => {
    const {
        id
    } = req.params;

    var municipalities = [];
    municipalities = await Municipalities.find({
        "idDepartamento": id
    });
    if (!municipalities) return res.status(401).send('Error')
    res.json({
        municipalities
    });
}

module.exports = municipalityCtrl;