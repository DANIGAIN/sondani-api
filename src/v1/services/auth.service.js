const bicrypt  = require('bcrypt')
const jwt = require('jsonwebtoken')
const hashPassword = (password) =>{
    return new Promise((resolve , reject) =>{
        bicrypt.genSalt(12, (error ,salt)=>{
            if(error){
                reject(error);
            }
            bicrypt.hash(password, salt, (error, hash) => {
                if(error){
                    reject(error);
                }
                resolve(hash);
            })

        })
    })
}

const comparePassword = (password , hashed) => {
    return bicrypt.compare(password, hashed);
}

const getUser = (token) =>{
    if(!token) return false;
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    return decode;
}

module.exports = {
    comparePassword,
    hashPassword,
    getUser
}
