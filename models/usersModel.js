const mongoose = require("mongoose");
const { isEmail } = require("validator");


// schema for users
const schema = new mongoose.Schema({
    first_name: { type: "string", required: true },
    middle_name: { type: "string" },
    last_name: { type: "string", required: true },
    email: {
        type: "string",
        required: true,
        lowercase: true,
        validate: {
        validator: isEmail,
        message: "Please enter a valid email address",
        isAsync: false,
        },
    },
    mobile_no: {
        type: "string",
        required: true,
        minlength: [10, "Please enter valid mobile number"],
        maxlength: [10, "Please enter valid mobile number"],
    },
    occupation: { type: "string" },
    company: { type: "string" },
    password: { type: "string", required: true },
});

module.exports = mongoose.model("users", schema);
