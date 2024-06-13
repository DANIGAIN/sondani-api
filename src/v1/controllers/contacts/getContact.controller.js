const CustomError = require('../../../utils/Error');
const Contact = require('./../../models/contact.model');
const connect = require("../../../config/db.config");
const getContact = async(req, res) =>{
    try{
        await connect();
        const {id } = req.params ;
        const data = await Contact.findOne({_id:id});
        if(!id || !data){
            return res.status(404).json(CustomError.notFoundError({ message: "Not found ! This Contact can not exist"}));
        }
        return res.status(200).json({
            message: "Get this contact successfuly",
            data,
            success: true
        });
    }catch(error){
        return res.status(500).json(CustomError.internalServerError(error));
    }
}

module.exports = getContact;