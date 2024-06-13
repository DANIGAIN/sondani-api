const CustomError = require('../../../utils/Error');
const Specialist = require('./../../models/specialist.model');
const Doctor = require('./../../models/doctor.model');
const connect = require("../../../config/db.config");
const deleteSpecialist = async (req, res) => {
    try {
        await connect();
        const { id } = req.params;
        const specialist = await Specialist.findById(id);
        if (!id || !specialist ) {
            return res.status(404).json(CustomError.notFoundError({ message: "Not found ! Specialist can not exist"}));
        }
        const doctor = await Doctor.find({ specialist: id })
        if(!doctor){
            await Specialist.deleteOne({_id:id})
        }else{
            return res.status(409).json(CustomError.conflictError({ message: "Specialist can not deleted because some doctor have specilist"}));
        }
        
 
        return res.status(200).json({
            message: "Deleted this specialist",
            success: true
        });
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }

};
module.exports = deleteSpecialist;