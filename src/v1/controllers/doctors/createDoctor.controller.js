const connect = require("../../../config/db.config");
const User = require('./../../models/user.model');
const Doctor = require('./../../models/doctor.model');
const CustomError = require('../../../utils/Error');

const createDoctor = async(req, res) => {
    try {
        await connect();
        const { name, specialist, rating, email } = req.body;
        const data = {
            name,
            specialist: specialist.split(","),
            rating,
            email,
            image: req.file.filename
        }
        const doctor = await Doctor.create(data);
        data._id = doctor._id;
        data.createdAt = doctor.createdAt;
        data.updatedAt = doctor.updatedAt;


        //change user Role 
        // await User.updateOne({ email: email, role: 10 }, { role: 1 })
        return res.status(201).json({
            message: "create a new doctor",
            success: true,
            data
        });

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }
}
module.exports = createDoctor;