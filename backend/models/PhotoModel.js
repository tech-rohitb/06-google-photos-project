const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PhotoSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    dateUploaded: {
      type: Date,
      default: Date.now,
    },
    tags: {
      type: [String],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Photo = mongoose.model("Photo", PhotoSchema);

module.exports = Photo;
