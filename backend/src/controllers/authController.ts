import { Response, Request } from "express";
export const login_get = (req: Request, res: Response) => {
  res.redirect("/login");
};

export const login_post = (req: Request, res: Response) => {};

export const signup_get = (req: Request, res: Response) => {};

export const signup_post = (req: Request, res: Response) => {};
