const jwt = require('jsonwebtoken')
const getProfile = async (req, res) => {

    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (error, user) => {
            if (error) throw error
            res.json(user);
        })

    } else {
        return res.json(null)
    }
}

module.exports = getProfile;