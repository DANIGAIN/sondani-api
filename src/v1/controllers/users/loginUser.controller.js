const User = require("../../models/user.model.js");
const connect = require("../../../config/db.config.js");
const CustomError = require("../../../utils/Error.js");
const { comparePassword } = require("../../../v1/services/auth.service.js");
const jwt = require('jsonwebtoken')

const loginUser = async (req, res) => {
    try {
        await connect()

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.send(CustomError.unauthorizeError({ message: "Not found! The requested user wes not found" }))
        }
        const data = {
            '_id': user._id,
            'name': user.name,
            'email': user.email,
            'role': user.role,
        }
        const matched = await comparePassword(password, user.password);
        if (matched) {
            //jwt ---->   
            jwt.sign({ email: user.email, name: user.name, id: user._id, role: user.role }, process.env.JWT_SECRET, {}, (error, token) => {
                if (error) throw error;
                res.cookie('token', token, {
                    expires: new Date(Date.now() + 2589200000),
                    httpOnly: true,
                }).json(data);
            });


        } else {
            return res.status(400).json(CustomError.badRequestError({ message: "Bad request ! Requested property are invalid" }))
        }

    } catch (error) {
        return res.status(500).json(CustomError.internalServerError(error))
    }

}

module.exports = loginUser;

