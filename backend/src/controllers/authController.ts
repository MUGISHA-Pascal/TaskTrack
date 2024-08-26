import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";
import keys from "../keys";
const maxAge = 3 * 24 * 60 * 60;

interface user {
  username: string;
  email: string;
  password: string;
  _id: string;
}
interface err {
  username: string;
  email: string;
  password: string;
}
const handleError = (err: any) => {
  const errors: err = { username: "", email: "", password: "" };
  // if (err.message.includes("User validation failed")) {
  Object.values(err.errors).forEach(({ properties }) => {
    errors[properties.path] = properties.message;
  });
  return errors;
};

const createToken = (id: string): string => {
  return jwt.sign({ id }, keys.jwt_key, { expiresIn: "1h" });
};

export const login_post = (req: Request, res: Response) => {};

export const signup_post = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const user = await new User({ username, email, password }).save();
    const token = createToken(user._id.toString());
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.json({ user });
  } catch (error) {
    res.json({ errors: handleError(error) });
  }
};
