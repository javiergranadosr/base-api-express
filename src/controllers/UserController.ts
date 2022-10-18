import { Request, Response } from "express";

export class UserController {
  constructor() {}

  public getUsers(req: Request, res: Response) {
    try {
      res.json({ message: "GET USERS" });
    } catch (err) {
      console.error(err);
    }
  }
}
