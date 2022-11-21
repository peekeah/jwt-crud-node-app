const users = require('../models/usersModel');

// module to create new user
exports.createUser = async(req, res) => {
    try {
        const response = await new users(req.body).save();
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(403).send(err);
    }
}


// module to update existing user
exports.updateUser = async(req, res) => {
    try {
        const response = await users.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(403).send(err);
    }
}