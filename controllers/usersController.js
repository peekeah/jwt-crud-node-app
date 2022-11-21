const users = require('../models/usersModel');
const bcrypt = require('bcrypt');

// module to create new user
exports.createUser = async(req, res) => {
    try {
        // hashing password
        const salt = await bcrypt.genSalt(7);
        req.body.password = await bcrypt.hash(req.body.password, salt);

        // saving in db
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
        if(req.body.password) {
            // hashing password
            const salt = await bcrypt.genSalt(7);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        // updating data in db
        const response = await users.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(403).send(err);
    }
}
