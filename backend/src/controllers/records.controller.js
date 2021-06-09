const path = require('path');
const fs = require('fs-extra');
const Records = require('../models/records');
const {randomDocName} = require('../helpers/libs');

const recordCtrl = {};

recordCtrl.getRecords = async (req, res) => {
    const recordList = await Records.find();
    console.log(recordList);
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

recordCtrl.createRecords = async (req, res) => { /* const saveRecord = async () => {
        if (req.body.filename !== '') {
            const filenameUrl = randomDocName();
            console.log(randomDocName);
            const findrecords = await Records.find({filename: filenameUrl});
            if (findrecords.length > 0) {
                saveRecord();
            } else {
                const recordTempPath = req.file.path; // Ruta actual del archivo
                const ext = path.extname(req.file.originalname).toLowerCase(); // Se obtiene extensión del archivo
                const targetPath = path.resolve(`src/public/upload/records/${filenameUrl}${ext}`); // Se indica ruta y nombre final del archivo
                if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.bmp' || ext === '.pdf') {
                    await fs.rename(recordTempPath, targetPath);
                    const newRecord = new Records({
                        idRecord: req.body.idRecord,
                        identificationNumber: req.body.identificationNumber,
                        employee: req.body.employee,
                        employeeName: req.body.employeeName,
                        event: req.body.event,
                        dateRecord: req.body.identificationNumber,
                        dataIncident: req.body.dataIncident,
                        description: req.body.description,
                        filename: filenameUrl + ext
                    });
                    await newRecord.save();
                    res.json({'status': 'New record saved'});
                } else {
                    await fs.unlink(recordTempPath);
                    res.status(500).json({error: 'Only images and pdf are allowed'})
                }
            }
        } else {
            const newRecord = new Records(req.body);
            await newRecord.save();
            res.json({'status': 'New record saved'});
        }
    };
    saveRecord(); */
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
        filename: req.body.filename,
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
