import { BaseRouter } from "../Router";
import { Request, Response } from "express";
import { UserController } from "../controllers/UserController";

export class UserRouter extends BaseRouter<UserController> {
  constructor() {
    super(UserController);
  }

  public routes() {
    this.router.get("/users/all", (req: Request, res: Response) =>
      this.controller.getUsers(req, res)
    );
  }
}
