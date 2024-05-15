const CustomError = require("./../../../utils/Error");
const logoutUser = async (req, res) => {
    try {
        res.clearCookie('token');
        return res.json({
            success: true,
            message: 'Logout successful',
        });
    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error));

    }
};

module.exports = logoutUser;



