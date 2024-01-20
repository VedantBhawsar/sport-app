const mongoose = require("mongoose");
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.comparePassword = async function (password: any) {
  return await bcrypt.compare(password, this.password);
};

module.exports =
  mongoose.models["users"] || mongoose.model("users", userSchema);
