const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    middlename: String, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: String,
    file: String
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel