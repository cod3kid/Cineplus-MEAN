const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    mobilenumber: String,
    password: String,
});

module.exports = mongoose.model('user', userSchema, 'users');