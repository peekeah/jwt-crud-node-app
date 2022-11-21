const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();



// db connection
const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL;

mongoose.connect(URL, () => {
    app.listen(PORT, () => {
        console.log(`server started on ${PORT}`);
    });
});