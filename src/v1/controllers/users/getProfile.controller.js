const jwt = require('jsonwebtoken')
const getProfile = async(req, res) => {

    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (error, data) => {
            if (error) return res.json({
                success: false,
                data: null,
                message: "login first"
            })
            res.json({
                message: "your profile get successfull",
                data,
                success: true
            });
        })

    } else {
        return res.json({
            success: false,
            data: null,
            message: "login first"
        })
    }
}

module.exports = getProfile;