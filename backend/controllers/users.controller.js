const jwt = require('jsonwebtoken');
const Users = require('../models/users');
const bcrypt = require('bcrypt');

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
    const userList = await Users.find();
    res.json(userList);
}


// Obtener usuario
userCtrl.getUser = async (req, res) => {
    
    const user = req.body.user;

    const userData = await Users.findOne({
        user
    });

    if (!userData) return res.status(401).send("The user doen't exist");

    if (userData) return res.status(200).json({userData});
        
}



// Create user
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


// Actualización de usuario
userCtrl.updateUsers = async (req, res) => {
    const {
        id
    } = req.params;

    const filter = {
        "_id": req.body._id
        }

    const update = {
        $set: {
            user: req.body.user,
            name: req.body.name,
            superuser: req.body.superuser,
            admin: req.body.admin,
            analyst: req.body.analyst,
            assistant: req.body.assistant,
            consultant: req.body.consultant,
        }
    }

    await Users.updateOne( filter, update, 
        {
       new: true
    });
    res.json({
        'status': 'user updated'
    })
}


// Actualización de contraseña
userCtrl.passwordUpdate = async (req, res) => {
    const {
        id
    } = req.params;
    
    const filter = {
        "_id": req.body._id
        }

    const password = req.body.password;
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt)
  

    const update = {
        $set: {
            password: hash
        }
    }

    await Users.updateOne( filter, update, 
        {
       new: true
    });
    res.json({
        'status': 'password updated'
    })

}

userCtrl.inactivateUser = function() {

}

userCtrl.activateUser = function() {

}

// Delete user
userCtrl.deleteUser = async (req, res) => {
    await Users.findByIdAndDelete(req.params.id)
    res.json({
        'status': 'User deleted'
    })
}



// login
userCtrl.loginUser = async (req, res) => {
    const user = req.body.user;
    const password = req.body.password


    const userLogin = await Users.findOne({
        user
    })
    if (!userLogin) return res.status(401).send("The user doen't exist");
    if (userLogin.condition == false) return res.status(401).send("Inactive user");
    bcrypt.compare(password, userLogin.password)
        .then(match => {
            if (match) {
                const userData = userLogin;

                const token = jwt.sign({
                    _id: user._id
                }, 'secretKey');
                return res.status(200).json({
                    token,
                    userData
                })
            } else {
                return res.status(401).send("Wrong Password");
            }
        })
}

// Verificación del token
userCtrl.verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized Request');
    }
    // const token = req.headers.authorization.split(' ')[1];
    const token = req.headers.authorization;
    if (token === 'null') {
        return res.status(401).send('Unauthorized Request')
    }

    const payload = jwt.verify(token, 'secretKey');
    req.userId = payload._id;
    next();
}


module.exports = userCtrl;