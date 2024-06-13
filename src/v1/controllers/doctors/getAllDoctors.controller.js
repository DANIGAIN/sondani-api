const Doctor = require('./../../models/doctor.model');
const CustomError = require('../../../utils/Error');
const connect = require("../../../config/db.config");
const getAllDoctors = async(req, res) => {
    try {
        await connect();
        const doctors = await Doctor.find().populate({ path: 'specialist', select: '_id category' });
        const data = [];
        doctors.map((value, key) => {
            const obj = {
                '_id': value._id,
                'specialist': value.specialist,
                'rating': value.rating,
                'email': value.email,
                'name': value.name,
                'image': `${process.env.APP_DOMAIN}/images/${value.image}`

            }
            data.push(obj)
        })
        return res.status(200).json({
            message: "Get all doctors",
            data,
            success: true
        });

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }

}
module.exports = getAllDoctors;