import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";
import keys from "../keys";
import bcrypt from "bcryptjs";

const maxAge = 3 * 24 * 60 * 60;

interface UserErrors {
  username?: string;
  email?: string;
  password?: string;
}

const handleError = (err: any): UserErrors => {
  const errors: UserErrors = {};

  if (err.code == 11000) {
    errors["email"] = "email arleady exists";
  }
  if (err.message == "incorrect username") {
    errors["username"] = "username is invalid";
  }

  if (err.message == "incorrect password") {
    errors["password"] = "password is invalid";
  }
  if (err.message.includes("User validation failed")) {
    const errorValues = Object.values(err.errors) as Array<{
      properties: { path: keyof UserErrors; message: string };
    }>;

    errorValues.forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const createToken = (id: string): string => {
  return jwt.sign({ id }, keys.jwt_key, { expiresIn: "1h" });
};

export const login_post = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      throw Error("incorrect username");
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      throw Error("incorrect password");
    }

    const token = createToken(user._id.toString());
    res.cookie("jwt", token, { maxAge: maxAge * 1000 });
    console.log(token);
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ errors: handleError(error) });
  }
};

export const signup_post = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const user = await new User({ username, email, password }).save();
    const token = createToken(user._id.toString());
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user });
  } catch (error: any) {
    res.status(400).json({ errors: handleError(error) });
  }
};
