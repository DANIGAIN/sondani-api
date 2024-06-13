const mongoose = require('mongoose');
const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is required"],
        trim: true,
        lowerCase: true,
    },
    phone: {
        type: String,
        required: [true, "Phone Number is required"],
        minlength: [10, 'Number is incorrect ...'],
        maxlength: [15, 'Number is incorrect ...']
    },
    group: {
        type: String,
        required: [true, "Group field is required"]
    },
    info: String,
    price: {
        type: String,
        required: [true, "Price field is required"]
    }
}, {
    timestamps: true
});

const Service = mongoose.model.Service || mongoose.model('Service', serviceSchema);
module.exports = Service;