const mongoos = require("mongoose")

const TodoShema = mongoos.Schema({
    task: {
        type: String,
    },
    name: {
        type: String,
    },
    desc: {
        type: String,
    },

})

module.exports = mongoos.model("Todo", TodoShema)