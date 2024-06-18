const mongoose = require('mongoose');
const doctorInfoSchema = new mongoose.Schema({
    about: {
        type: String,
    },
    starting: {
        type: Date
    },
    ending: {
        type: Date
    },
    graduation_from: {
        type: String
    },
    job: {
        type: String
    },
    day: [{
        type: String
    }]

}, {
    timestamps: true
})

const Doctor_info = mongoose.model.Doctor_info || mongoose.model('Doctor_info', doctorInfoSchema);

module.exports = Doctor_info