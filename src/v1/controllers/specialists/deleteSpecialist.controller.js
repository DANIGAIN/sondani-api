const CustomError = require('../../../utils/Error');
const Specialist = require('./../../models/specialist.model');
const connect = require("../../../config/db.config");
const deleteSpecialist = async (req, res) => {
    try {
        await connect();
        const { id } = req.params;
        const specialist = await Specialist.findById(id);
        if (!id || !specialist ) {
            return res.status(404).json(CustomError.notFoundError({ message: "Not found ! Specialist can not exist"}));
        }

        await Specialist.deleteOne({_id:id})
 
        return res.status(200).json({
            message: "Deleted this specialist",
            success: true
        });
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }

};
module.exports = deleteSpecialist;