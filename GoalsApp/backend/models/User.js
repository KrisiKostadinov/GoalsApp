const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please add a name ']
    },
    email: {
        type: String,
        required: [true, 'Please add email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please add password']
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);