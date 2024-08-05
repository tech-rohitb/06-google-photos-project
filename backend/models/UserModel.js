const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    //   tokens: {
    //     type: String,
    //     required: true,
    //   },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema); // Corrected this line

module.exports = User;
