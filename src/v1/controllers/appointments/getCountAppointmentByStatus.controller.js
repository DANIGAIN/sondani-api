const connect = require("../../../config/db.config");
const Appointment = require('./../../models/appointment.model');
const CustomError = require('../../../utils/Error');

const getCountAppointmentByStatus = async (req, res) => {
    const { status } = req.params;
    try {
        const data = await Appointment.find({ status }).count();
        return res.status(201).json({
            message: "count Appointment",
            success: true,
            data
        });
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }
}

module.exports = getCountAppointmentByStatus;