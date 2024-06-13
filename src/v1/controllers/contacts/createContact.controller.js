const Contact = require('./../../models/contact.model');
const connect = require("../../../config/db.config");
const CustomError = require('../../../utils/Error');
const createContact = async(req, res) => {
    try{
        await connect()
        const contact = await Contact.create(req.body)
        const data = {
            ...req.body,
            _id: contact._id
        };
        return res.status(201).json({
            message:"Contact Created successfully",
            data,
            success: true
        });
    }catch(error){
        return res.status(500).json(CustomError.internalServerError(error));
    }
}
module.exports = createContact;