const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const users = require("../models/usersModel");

exports.loginUser = async (req, res) => {
    try {
        // exist user validation
        const existUser = await users.findOne({ email: req.body.email });
        if (!existUser) return res.status(403).send({ message: "User not found" });

        // validating password
        const isMatched = await bcrypt.compare(
            req.body.password,
            existUser.password
        );

        if (!isMatched)
        return res.status(403).send({ message: "Password mismatch" });

        // generating token
        const token = await jwt.sign(existUser.toJSON(), process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRY || "1d",
        });
        
        res.send({ token: token });
    } catch (err) {
        console.log(err);
        res.status(403).send(err);
    }
};
