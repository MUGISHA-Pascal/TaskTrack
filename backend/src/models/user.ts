import { model, Schema, Document, Model } from "mongoose";
import bcrypt from "bcryptjs";
import isEmail from "validator/lib/isEmail";

interface usercre extends Document {
  _id: string;
  username: string;
  email: string | null;
  password: string;
}

interface userModel extends Model<usercre> {
  login(username: string, password: string): Promise<usercre>;
}

const userSchema = new Schema<usercre>({
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

const User = model<usercre, userModel>("User", userSchema);

export default User;
