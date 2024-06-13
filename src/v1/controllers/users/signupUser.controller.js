const connect = require("../../../config/db.config.js");
const User = require('./../../models/user.model.js');
const Doctor = require('./../../models/doctor.model.js');
const { hashPassword } = require('../../../v1/services/auth.service.js');
const CustomError = require('../../../utils/Error.js');

const signupUser = async (req, res) => {
    try {
        await connect()
        const { name, email, password, role } = req.body;
        if (!name || !email) {
            return res.status(400).json(CustomError.badRequestError({ message: "name && email is required" }))
        }

        if (!password || password.lenght < 6) {
            return res.status(400).json(CustomError.badRequestError({ message: "password is  required it whould be at least 6 characters" }))

        }
        const exist = await User.findOne({ email });
        if (exist) {
            return res.status(409).json(CustomError.conflictError({ message: "The email was alrady exist" }))
        }

        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            name, email, role, password: hashedPassword
        });
        const data = {
            '_id': user._id,
            'name': user.name,
            'email': user.email,
            'role': user.role,
        }

        // const existDoctorList = await Doctor.find({ email });
        // if (existDoctorList) {
        //     await User.updateOne({ email }, { role: 1 })
        // }

        return res.status(201).json({
            message: "signup successfully",
            data,
            success: true
        });

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }

}

module.exports = signupUser;
