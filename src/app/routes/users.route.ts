

import { UserPostController } from "../controllers/users/UserPostController";
import { Router, Request, Response } from "express";
import container from "../dependency-injection";

export const register = (router: Router) => {
  router.get("/users", (req: Request, res: Response) => {

    const controller: UserPostController = container.get("Apps.iot.controllers.UserPostController")
    controller.run(req, res);
  });
};
