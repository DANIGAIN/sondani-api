const connect = require("../../../config/db.config");
const User = require('./../../models/user.model')
const CustomError = require('../../../utils/Error');

const getUser = async (req, res) => {
    try {
        await connect()
        const { id } = req.params;
        const data = await User.findById(id).select('-password -__v');
        if (!id || !data ) {
            return res.status(404).json(CustomError.notFoundError({ message: "Not found ! User can not exist" }));
        }
        return res.status(200).json({
            message: "Get user successfuly",
            data,
            success: true
        });

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = getUser; 