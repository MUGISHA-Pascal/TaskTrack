import { model, Schema } from "mongoose";
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

const User = model("User", userSchema);

export default User;
