const connect = require("../../../config/db.config");
const Appointment = require('./../../models/appointment.model');
const CustomError = require('../../../utils/Error');
const updateAppointment = async (req, res) => {
    const { id } = req.params;
    const obj = {}
    if (req.body.name) obj.name = req.body.name;
    if (req.body.patientId) obj.patientId = req.body.patientId;
    if (req.body.age && req.body.age != '') obj.age = req.body.parseInt(age);
    if (req.body.address) obj.address = req.body.address;
    if (req.body.phone) obj.phone = req.body.phone;
    if (req.body.doctor) obj.doctor = req.body.doctor;
    if (req.body.specialist) obj.specialist = req.body.specialist;
    if (req.body.app_Time) obj.app_Time = new Date(req.body.app_Time).toISOString();
    if (req.body.status) obj.status = req.body.status;
    try {
        const data = await Appointment.updateOne({ _id: id }, { $set: obj })
        return res.status(200).json({
            message: "Update appointment",
            data,
            success: true
        })
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}

module.exports = updateAppointment;
