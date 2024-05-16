const connect = require("../../../config/db.config");
const Appointment = require('./../../models/appointment.model');
const CustomError = require('../../../utils/Error');
const createAppointment = async (req, res) => {
    const { patientId, name, age, address, email, phone, doctor, tropic, app_Time, status } = req.body;
    try {
        await connect();
        const data = {
            patientId,
            name,
            address,
            email,
            phone,
            doctor,
            specialist: tropic,
            app_Time: new Date(app_Time).toISOString(),
            status
        };
        if (age != '') data.age = parseInt(data);
        const app = await Appointment.create(data);
        data._id = app._id;
        return res.status(201).json({
            data,
            success: true,
            message: "created new appointment"
        });

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }

}

module.exports = createAppointment;
