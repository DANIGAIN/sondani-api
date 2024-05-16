const Doctor = require('./../../models/doctor.model');
const CustomError = require('../../../utils/Error');
const connect = require("../../../config/db.config");

const getAllDoctorsBySpecialist = async (req, res) => {
    try {
        await connect()
        const { sp } = req.params;
        if (!sp) {
            return res.status(404).json(CustomError.notFoundError({ message: "Not found ! Doctor can not exist" }));
        }
        const data = await Doctor.find({ specialist: sp })
        return res.status(200).json({
            message:"Get all doctors",
            success: true,
            data,
        })

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }
}

module.exports = getAllDoctorsBySpecialist;
