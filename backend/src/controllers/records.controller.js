const path = require('path');
const fs = require('fs-extra');
const Records = require('../models/records');
const {randomDocName} = require('../helpers/libs');

const recordCtrl = {};

recordCtrl.getRecords = async (req, res) => {
    const recordList = await Records.find();
    res.json(recordList);
};

recordCtrl.getRecord = async (req, res) => {
    const recordCount = await Records.findById(req.params.id);
    res.json(recordCount);
};

recordCtrl.getRecordNumber = async (req, res) => {
    const record = await Records.count()
    res.json(record);
};

recordCtrl.createRecords = async (req, res) => {
    const newRecord = new Records(req.body);
    await newRecord.save();
    res.json({'status': 'New record saved'});
};

recordCtrl.updateRecords = async (req, res) => {
    const {id} = req.params;
    const record = {
        idRecord: req.body.idRecord,
        employee: req.body.employee,
        dataIncident: req.body.dataIncident,
        description: req.body.description,
        digitalEvidence: req.body.digitalEvidence,
        reasonForCancellation: req.body.reasonForCancellation,
        contidion: req.body.condition
    }
    await Records.findByIdAndUpdate(id, {
        $set: record
    }, {new: false});
    res.json({'status': 'record updated'})
};

recordCtrl.inactivaterecord = function () {}

recordCtrl.cancelRecords = async (req, res) => {
    await Records.findByIdAndDelete(req.params.id)
    res.json({'status': 'Record deleted'})
};

module.exports = recordCtrl;
