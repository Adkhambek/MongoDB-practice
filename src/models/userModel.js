const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "first name required"],
    },
    lastName: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
