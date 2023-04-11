const mongoos = require("mongoose")

const UserShema = mongoos.Schema({

    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
})

module.exports = mongoos.model("User", UserShema)