const mongoose = require('mongoose');
const { Schema } = mongoose;

const GoalSchema = new Schema({
    content: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Goal', GoalSchema);