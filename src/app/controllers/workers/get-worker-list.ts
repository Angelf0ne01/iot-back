import { Request, Response } from "express";
import httpStatus from "http-status";
import { BaseController } from "../BaseController";




export class WorkersListGetController implements BaseController {
  async run(req: Request, res: Response) {
    res.status(httpStatus.OK).send();
  }
}
