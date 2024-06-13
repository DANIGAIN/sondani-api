const { adminUser } = require('./../../../utils/Constants');
const connect = require("../../../config/db.config.js");
const User = require('./../../models/user.model.js');
const { hashPassword } = require('../../../v1/services/auth.service.js');
const CustomError = require('../../../utils/Error.js');

const formatUser = async () => {
     const data = [];
     for(let email of adminUser){
        data.push({
            name:email.split('@')[0],
            email,
            password:await hashPassword('12345678'),
            role:0
        })
     } 
     return data;   
};

const seedUser = async (req, res) => {
    try{
        await connect();
        await User.deleteMany({'role': 0});
        await User.insertMany(await formatUser());
        res.status(201).send({
            message:"Droping ALL admin and then insert",
            success: true
        });
    }catch(error){
        return res.status(500).json(CustomError.internalServerError(error))
    }
}

module.exports = seedUser;


