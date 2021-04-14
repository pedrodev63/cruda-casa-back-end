const mongoose = require("mongoose")
const user = mongoose.Schema({
    user_name: {
        type: String,
        require: true,
    },
    user_password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    telefone: {
        type: String,
        require: true
    },
    email: {
        type: String,
    }
})

mongoose.model("user", user)