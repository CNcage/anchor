const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name'],
    },
    email: { 
        type: String, 
        required: [true, 'Please tell us your email'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Please provide your password']
    }
})

module.exports = model('users', userSchema);