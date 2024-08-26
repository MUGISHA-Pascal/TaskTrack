import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import isEmail from "validator/lib/isEmail";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "please enter the username"],
  },
  password: {
    type: String,
    required: [true, "please enter the password"],

    minLength: [6, "the password is not six characters"],
  },
  email: {
    type: String,
    unique: true,
    validate: [isEmail, "your email is not valid"],
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = model("User", userSchema);

export default User;
