const mongoose = require('mongoose');
const contactSchima = new mongoose.Schema({
    uid: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Userid is required ']
    },
    name: {
        type: String,
        maxlength: [30, 'name is to large ...']
    },
    subject: {
        type: String,
        maxlength: [100, 'subject required 100 characters ...']
    },
    email: {
        type: String,
        match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"]
    },
    message: {
        type: String,
        required: [true, "message is required"],
        maxlength: [1000, 'Message required 1000 characters ...']
    },

}, {
    timestamps: true
});
const Contact = mongoose.model.Contact || mongoose.model('Contact' , contactSchima);
module.exports =  Contact