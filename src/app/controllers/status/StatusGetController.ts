import { Request, Response } from "express";
import httpStatus from "http-status";
import { BaseController } from "@app/controllers/BaseController";

export class StatusGetController implements BaseController {
  async run(req: Request, res: Response) {
    res.status(httpStatus.OK).send();
  }
}
