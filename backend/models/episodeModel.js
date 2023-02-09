const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const episodeSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Episode", episodeSchema);
