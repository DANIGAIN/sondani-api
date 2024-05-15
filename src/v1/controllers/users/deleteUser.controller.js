const connect = require("../../../config/db.config");
const User = require('./../../models/user.model')
const CustomError = require('../../../utils/Error');

const deleteUser = async (req, res) => {
    try {
        await connect()
        const { id } = req.params;
        const user = await User.findById(id);
        if (!id || !user ) {
            return res.status(404).json(CustomError.notFoundError({ message: "Not found ! User can not exist"}));
        }
        await User.deleteOne({ _id: id });
        return res.status(200).json({
            message: "user deleted successfuly",
            success: true
        });

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = deleteUser; 