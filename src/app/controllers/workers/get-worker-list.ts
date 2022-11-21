import { Request, Response } from "express";
import httpStatus from "http-status";
import { BaseController } from "@app/controllers/BaseController";
import { WorkerFinderAll } from "@context/iot/workflow/application/search-by-user";



export class WorkersListGetController implements BaseController {
  async run(req: Request, res: Response) {
    const workers = new WorkerFinderAll()
    res.status(httpStatus.OK).send();
  }
}
