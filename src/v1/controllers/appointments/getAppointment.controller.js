const connect = require("../../../config/db.config");
const Appointment = require('./../../models/appointment.model');
const CustomError = require('../../../utils/Error');

const getAppointment = async (req, res) => {
    const { id } = req.params;
    try {
        await connect();
        const data = await Appointment.find({_id:id }).populate(['doctor', 'specialist'])
        return res.status(200).json({
            message: "find a appointment",
            data,
            success: true
        });
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }
} 

module.exports = getAppointment;