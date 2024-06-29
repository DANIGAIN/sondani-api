const CustomError = require('../../../utils/Error');
const Service = require('./../../models/service.model');
const connect = require("../../../config/db.config");
const getAllServices = async(req, res) => {
    try {
        await connect();
        const data = await Service.find()
            .sort({
                'createdAt': -1
            })
            .select('-__v');
        return res.status(200).json({
            message: "Get all  Services",
            data,
            success: true
        });
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }

};
module.exports = getAllServices;