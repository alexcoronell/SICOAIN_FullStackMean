const Users = require('../models/users');

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
    const userList = await Users.find();
    res.json(userList);
}

userCtrl.getUser = async (req, res) => {
    const user = await Users.findById(req.params.id);
    res.json(user);
}

userCtrl.createUsers = async (req, res) => {
    const user = new Users(req.body);
    await user.save();
    res.json({
        'status': 'User saved'
    });
}

userCtrl.updateUsers = async (req, res) => {
    const {
        id
    } = req.params;
    const user = {
        user: req.body.user,
        name: req.body.name,
        superuser: req.body.superuser,
        admin: req.body.admin,
        analyst: req.body.analyst,
        assistant: req.body.assistant,
        consultant: req.body.consultant,
        password: req.body.password,
        contidion: req.body.condition
    }
    await Users.findByIdAndUpdate(id, {
        $set: user
    }, {
        new: false
    });
    res.json({
        'status': 'user updated'
    })
}

userCtrl.updateUserPassword = function() {

}

userCtrl.inactivateUser = function() {

}

userCtrl.activateUser = function() {

}

userCtrl.deleteUser = async (req, res) => {
    await Users.findByIdAndDelete(req.params.id)
    res.json({
        'status': 'User deleted'
    })
}

module.exports = userCtrl;