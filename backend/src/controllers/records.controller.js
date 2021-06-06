const Records = require('../models/records');

const recordCtrl = {};

recordCtrl.getRecords = async (req, res) => {
    const recordList = await Records.find();
    res.json(recordList);
}

recordCtrl.getRecord = async (req, res) => {
    const record = await Records.findById(req.params.id);
    res.json(record);
}

recordCtrl.createRecords = async (req, res) => {
    const record = new Records(req.body);
    await record.save();
    res.json({
        'status': 'Record saved'
    });
}

recordCtrl.updateRecords = async (req, res) => {
    const {
        id
    } = req.params;
    const record = {
        idRecord: req.body.idRecord,
        employee: req.body.employee,
        dateRecord: req.body.dateRecord,
        dataIncident: req.body.dataIncident,
        description: req.body.description,
        digitalEvidence: req.body.digitalEvidence,
        reasonForCancellation: req.body.reasonForCancellation,
        contidion: req.body.condition
    }
    await Records.findByIdAndUpdate(id, {
        $set: record
    }, {
        new: false
    });
    res.json({
        'status': 'record updated'
    })
}

recordCtrl.inactivaterecord = function() {

}

recordCtrl.deleteRecords = async (req, res) => {
    await Records.findByIdAndDelete(req.params.id)
    res.json({
        'status': 'Record deleted'
    })
}

module.exports = recordCtrl;