const CustomError = require('../../../utils/Error');
const Specialist = require('./../../models/specialist.model');
const connect = require("../../../config/db.config");
const addSpecialist = async (req, res) => {
    try {
        await connect();
        const { category } = req.body;
        const specialist = await Specialist.create({ category });
        const data = {
            _id: specialist._id,
            category
        };
        return res.status(201).json({
            message: "Created new Specialist",
            data,
            success: true
        });
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }

};
module.exports = addSpecialist;