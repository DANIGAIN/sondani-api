const CustomError = require('../../../utils/Error');
const Service = require('./../../models/service.model');
const connect = require("../../../config/db.config");
const deleteService = async (req, res) => {
    try {
        await connect();
        const { id } = req.params;
        const service = await Service.findById(id);
        if (!id || !service ) {
            return res.status(404).json(CustomError.notFoundError({ message: "Not found ! Service can not exist"}));
        }
        await Service.deleteOne({_id:id})
        return res.status(200).json({
            message: "Deleted this select",
            success: true
        });
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }

};
module.exports = deleteService;