const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: false,
  },

  regNumber:{
    type:String,
    required: true,
    unique: true
  },

  email:{
    type:String,
    required: true,
    unique: true
  },
  
  phoneNumber:{
    type:String,
    required: false,
    unique: true
  },

  password:{
    type:String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  hostelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hostel',
    required: false,
  },
  role:{
      type: String,
      required: false,
  },
  status: {
    type: Number,
    min: 0,
    max: 1,
    default: 1,
    required: true,
  }, 

}, {timestamps: true})

module.exports = mongoose.model('Student', studentSchema)
