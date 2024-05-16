const Doctor = require('./../../models/doctor.model');
const connect = require("../../../config/db.config");
const CustomError = require('../../../utils/Error');
const path = require('path');
const fs = require('fs');
const deleteDoctor = async (req, res) => {
    try {
        await connect();
        const { id } = req.params;
        const doctor = await Doctor.find({ _id: id });
        if (!id || !doctor[0] ) {
            return res.status(404).json(CustomError.notFoundError({ message: "Not found ! Doctor can not exist"}));
        }
        let reqPath = path.join(__dirname, '../../../../', 'public/', doctor[0].image)
        
        fs.unlink(reqPath, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Deleted image successfully")
        });
      
        // await Doctor.deleteOne({ _id: id });
        return res.status(200).json({
            message:"Delete doctors successfully",
            success: true 
        });

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }
}

module.exports = deleteDoctor;