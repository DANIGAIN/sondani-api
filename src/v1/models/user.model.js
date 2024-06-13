const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowerCase:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"]
    },
    password:{
        type: String 
    },
    role:{
        type: Number,
        required: [true, "User role is required"]
    },
},{
    timestamps:true
})
const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports =  User;