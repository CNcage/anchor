const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({
    date: { type: String, required: true },
    time: { type: String, required: true },
    diary: { type: Array, required: true, default: [] },
});

module.exports = mongoose.model('diaries', diarySchema);