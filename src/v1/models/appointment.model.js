const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, "Name field is required"],
    },
    email: {
        type: String
    },
    phone: {
        type: String,
        required: [true, "Phone Number is required"],

    },
    doctor: {
        type: mongoose.Types.ObjectId,
        ref: 'Doctor',
        required: [true, "Doctor field is Required"],
    },
    specialist: {
        type: mongoose.Types.ObjectId,
        ref: 'Specialist',
        required: [true, "Specialist field is Required"],
    },
    time: {
        type: String,

    },
    date: {
        type: String,

    },
    message: {
        type: String,

    },

}, {
    timestamps: true
});

const Appointment = mongoose.model.Appointment || mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;