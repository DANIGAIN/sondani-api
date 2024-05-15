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
    age: {
        type:Number
    },
    address: {
        type:String
    },
    email: {
        type: String
    },
    phone: {
        type: String,
        required: [true, "Phone Number is required"],
        minlength: [10, 'Number is incorrect ...'],
        maxlength: [15, 'Number is incorrect ...']
    },
    doctor: {
        type: mongoose.Types.ObjectId,
        ref: 'Doctor',
        required: [true, "Doctor field is Required"],
    },
    specialist:{
        type: mongoose.Types.ObjectId,
        ref: 'Specialist',
        required: [true, "Specialist field is Required"],
    },
    app_Time: {
        type: Date,
        required: [true, "Appointment time field is Required"],
        unique:[true,"This time doctor will be  busy"]
    },
    status:{
        type: Number
    }
},{
    timestamps: true
});

const Appointment = mongoose.model.Appointment ||  mongoose.model('Appointment' , appointmentSchema);
module.exports =  Appointment ;