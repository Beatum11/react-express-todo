const mongoose = require("mongoose");

const titleSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model("titles", titleSchema);