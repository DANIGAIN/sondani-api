const connect = require("../../../config/db.config");
const Appointment = require('./../../models/appointment.model');
const CustomError = require('../../../utils/Error');

const getAllAppointments = async () => {
    try {
        await connect();
        const data = await Appointment.find().populate(['doctor', 'specialist'])
        return res.json({
            message: "Get all appointments",
            data,
            success: true
        });
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }
}
module.exports = getAllAppointments;