const { Schema, model } = require('mongoose');


const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  diarys: { type: Array, required: true, default: [] },
});

module.exports = model('users', userSchema);