const jwt = require('jsonwebtoken');
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
    const newUser = new Users(req.body)
    await newUser.save();
    const token = jwt.sign({
        _id: newUser._id
    }, 'secretKey');
    res.json({
        'status': 'New user saved'
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

userCtrl.loginUser = async (req, res) => {
    const {
        user,
        password
    } = req.body;
    const userLogin = await Users.findOne({
        user
    })
    if (!userLogin) return res.status(401).send("The user doen't exist");
    if (userLogin.password !== password) return res.status(401).send("Wrong Password");
    if (userLogin.condition == false) return res.status(401).send("Inactive user");

    const token = jwt.sign({
        _id: user._id
    }, 'secretKey');
    return res.status(200).json({
        token
    });
}

module.exports = userCtrl;