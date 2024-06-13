const connect = require("../../../config/db.config");
const Appointment = require('./../../models/appointment.model');
const CustomError = require('../../../utils/Error');

const deleteAppointment = async (req, res) => {
    const { id } = req.params;
    try {
        await connect()
        const app = await Appointment.findById(id);
        if (!id || !app) {
            return res.status(404).json(CustomError.notFoundError({ message: "Not found ! Appointment can not exist" }));
        }
        await Appointment.deleteOne({ _id: id });
        return res.status(200).json({
            message: "Appointment deleted successfully",
            success: true,
        });
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }
}

module.exports = deleteAppointment;