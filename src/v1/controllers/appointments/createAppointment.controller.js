const connect = require("../../../config/db.config");
const Appointment = require('./../../models/appointment.model');
const CustomError = require('../../../utils/Error');
const createAppointment = async(req, res) => {

    const { name, email, phone, doctor, specialist, date, time, message } = req.body;

    try {
        await connect();
        const data = {
            patientId: req.body.uid,
            name,
            message,
            email,
            phone,
            doctor,
            specialist,
            date,
            time,

        };

        const app = await Appointment.create(data);
        data._id = app._id;
        return res.status(201).json({
            data,
            success: true,
            message: "created new appointment"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json(CustomError.internalServerError(error))
    }

}

module.exports = createAppointment;