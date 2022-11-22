import { Request, Response } from "express";
import httpStatus from "http-status";
import { BaseController } from "../../../app/controllers/BaseController";
import { CreateUser } from "../../../context/iot/users/application/create/CreateUser";
import { UserEmail } from "../../../context/iot/users/domain/UserEmail";
import { UserId } from "../../../context/iot/users/domain/UserId";
import { UserName } from "../../../context/iot/users/domain/UserName";
import { UserPassword } from "../../../context/iot/users/domain/UserPassword";
import { Uuid } from "../../../context/shared/domain/value-object/Uuid";
import container from "../../dependency-injection";

type CreateUserRequest = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export class UserPostController implements BaseController {
  async run(req: Request, res: Response) {
    const createrUser: CreateUser = container.get(
      "Iot.users.application.CreateUser"
    );

    createrUser.run(
      new UserId(Uuid.random().toString()),
      new UserName("test"),
      new UserEmail("test email"),
      new UserPassword("password")
    );
    res.status(httpStatus.OK).send();
  }
}
