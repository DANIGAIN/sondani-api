const CustomError = require('../../../utils/Error');
const Service = require('./../../models/service.model');
const connect = require("../../../config/db.config");
const createService = async(req, res) => {
    try {
        await connect();
        req.body.image = `${process.env.APP_DOMAIN}/images/` + req.file.filename;
        const data = await Service.create(req.body);
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