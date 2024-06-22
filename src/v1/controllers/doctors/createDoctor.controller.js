const Doctor_info = require("../../models/doctorinfo.model");

const connect = require("../../../config/db.config");
const User = require('./../../models/user.model');
const Doctor = require('./../../models/doctor.model');
const CustomError = require('../../../utils/Error');

const createDoctor = async(req, res) => {
    try {
        const { name, specialist, rating, email, about, starting, ending, graduation_from, job } = req.body;
        day = req.body.day.split(',')
        await connect();
        const info = await Doctor_info.create({ about, starting, ending, graduation_from, job, day })


        const data1 = {
            doctorinfo: info._id,
            name,
            specialist: specialist.split(","),
            rating,
            email,
            image: req.file.filename
        }
        const d = await Doctor.create(data1);
        const data = await Doctor.findOne({ _id: d._id })
            .populate('specialist', '_id category')
            .populate('doctorinfo')
            .select('-__v');
        data.image = `http://localhost:8000/images/${data.image}`;
        // await User.updateOne({ email: email, role: 10 }, { role: 1 })
        return res.status(201).json({
            message: "create a new doctor",
            success: true,
            data
        });

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }
}
module.exports = createDoctor;