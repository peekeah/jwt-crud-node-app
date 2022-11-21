const mongoose = require('mongoose');


// schema for users
const schema = new mongoose.Schema({ 
    first_name: { type: 'string', required: true },
    middle_name: { type: 'string' },
    last_name: { type: 'string', required: true },
    email: { type: 'string', required: true, unique: true, dropDups: true },
    phone_no: { type: 'number', required: true, unique: true, dropDups: true },
    occupation: { type: 'string' }, 
    company: { type: 'string' }, 
    password: { type: 'string', required: true }
});



module.exports = mongoose.model('users', schema);