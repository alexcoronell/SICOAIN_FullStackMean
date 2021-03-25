const recordCounter = require('../models/recordCounter');

const recordCounterCtrl = {};

recordCounterCtrl.getRecordCounter = async (req, res) => {
    const CurrentRecordCounter = await recordCounter.findOne();
    if (!CurrentRecordCounter) return res.status(401).send("There is a problem with the counter");
    if (CurrentRecordCounter) return res.status(200).send({
        CurrentRecordCounter
    });
}


recordCounterCtrl.updateRecordCounter = async (req, res) => {
    const filter = {
        "_id": req.body._id
    }
    const temp = 0;
    const update = {
        $set: {
            records: temp
        }
    }
    await recordCounter.updateOne(filter, update, {
        new: false
    });
    res.json({
        'status': 'Record Counter updated'
    })
}

module.exports = recordCounterCtrl;