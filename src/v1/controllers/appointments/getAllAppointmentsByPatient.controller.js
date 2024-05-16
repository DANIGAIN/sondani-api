const connect = require("../../../config/db.config");
const Appointment = require('./../../models/appointment.model');
const CustomError = require('../../../utils/Error');
const getAllAppointmentsByPatient = async (req, res) => {
    const { id } = req.params;
    try {
        await connect();
        const data = await Appointment.find({patientId:id }).populate(['doctor', 'specialist'])
        return res.status(200).json({
            message: "find All appointment by patient id",
            data,
            success: true
        });
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }
} 

module.exports = getAllAppointmentsByPatient;