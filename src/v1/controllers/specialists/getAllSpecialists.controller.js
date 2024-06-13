const CustomError = require('../../../utils/Error');
const Specialist = require('./../../models/specialist.model');
const connect = require("../../../config/db.config");
const getAllSpecialists = async (req, res) => {
    try {
        await connect();
        const data = await Specialist.find().select('-__v');
        return res.status(200).json({
            message: "Get all  specialists",
            data,
            success: true
        });
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }

};
module.exports = getAllSpecialists;