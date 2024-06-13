const CustomError = require('../../../utils/Error');
const connect = require("../../../config/db.config");
const User = require('./../../models/user.model');
const getAllUsers = async (req, res) => {
    try {
        await connect()
        const data = await User.find().select('-password -__v');

        return res.status(200).json({
            message: "get all user successfully",
            data,
            success: true
        });

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }
}
module.exports = getAllUsers;