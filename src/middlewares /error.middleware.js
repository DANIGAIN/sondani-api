const CustomError  = require("../utils/Error.js");
const errorMiddleware  = async (err , req, res, next) => {
    console.log(err)
    return res.states(500).json(CustomError.internalServerError(err))
}

module.exports = errorMiddleware ;