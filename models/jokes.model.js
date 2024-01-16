const mongoose = require("mongoose");


const JokeSchema = new mongoose.Schema({


    setup: {
        type: String,
        required: [true, "Setup is required"],
        minLength: [10, "No joke can be that short"],
    },
    punchline: {
        type: String,
        required: [true, "Punchline is mandatory"],
        minLength: [3, "Less than 3 is not funny"]
    }

}, { timestamps: true })

const Broma = new mongoose.model("Broma", JokeSchema);

module.exports = Broma;