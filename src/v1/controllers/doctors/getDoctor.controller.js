const connect = require("../../../config/db.config");
const Doctor = require('./../../models/doctor.model')
const CustomError = require('../../../utils/Error');

const getDoctor = async(req, res) => {
    try {
        await connect()
        const { id } = req.params;
        const data = await Doctor.findById(id)
            .populate('specialist')
            .populate('doctorinfo')
            .select('-__v')
        data.image = `${process.env.APP_DOMAIN
        }/images/` + data.image;
        return res.status(200).json({
            message: "Get doctor successfuly",
            data,
            success: true
        });

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = getDoctor;