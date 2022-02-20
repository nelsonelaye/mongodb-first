const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    fullName:{
        type: String,
        require:true
    },
    course:{
        type: String,
        require:true
    },
    age:{
        type: Number,
        require:true
    }
})

module.exports = mongoose.model("users", userSchema)