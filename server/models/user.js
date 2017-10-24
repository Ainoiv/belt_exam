const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
}, { timestamp: true })

mongoose.model("User", UserSchema)

const BidSchema = mongoose.Schema({
    bid1: { type: Number, minlength: 1 },
    bid2: { type: Number, minlength: 1 },
    bid3: { type: Number, minlength: 1 },

}, { timestamp: true })

mongoose.model("Bid", BidSchema)