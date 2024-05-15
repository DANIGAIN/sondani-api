const mongoose = require('mongoose');
const specialistSchema = new mongoose.Schema({
    category: {
      type: String,
      unique: true,
      required: [true , "Category name is required"],
    }
  }, {
    timestamps: true
});

const Specialist = mongoose.model.Specialist ||  mongoose.model('Specialist' ,specialistSchema);
module.exports =  Specialist ;