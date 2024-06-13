const Contact = require('./../../models/contact.model');
const connect = require("../../../config/db.config");
const CustomError = require('../../../utils/Error');
const getAllContacts = async(req, res) => {
    try{
        await connect()
        const data = await Contact.find().select('-__v')
        return res.status(201).json({
            message:"Get all contact successfully",
            data,
            success: true
        })
    }catch(error){
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = getAllContacts