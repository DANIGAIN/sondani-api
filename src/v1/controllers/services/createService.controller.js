const CustomError = require('../../../utils/Error');
const Service = require('./../../models/service.model');
const connect = require("../../../config/db.config");
const createService = async (req, res) => {
    try {
        await connect();
        const service = req.body;
        const data =  await  Service.create(service);
        return res.status(201).json({
            message: "Created new Services",
            data,
            success: true
        });
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }

};
module.exports = createService;