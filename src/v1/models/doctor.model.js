const mongoose = require('mongoose');
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is require"],
    },
    email: {
        type: String,
        unique: [true, "Email is unique"],
        required: [true, "Email is require"],
    },
    specialist: [{
        type: mongoose.Types.ObjectId,
        ref: 'Specialist',
    }],
    doctorinfo: {
        type: mongoose.Types.ObjectId,
        ref: 'Doctor_info',
    },
    rating: {
        type: String,
        required: [true, "reting fild is require"]
    },
    image: {
        type: String
    },

}, {
    timestamps: true
})

const Doctor = mongoose.model.Doctor || mongoose.model('Doctor', doctorSchema);

module.exports = Doctor