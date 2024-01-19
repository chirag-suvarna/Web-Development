const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    contact_no: {
      type: Number,
      required: true,
      unique: true,
    },
    email_id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    is_verified: {
      type: Boolean,
      default: false,
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
