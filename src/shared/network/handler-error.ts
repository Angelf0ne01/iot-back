import { NextFunction, Request, Response } from "express";
import response from "./response";

const enum MongoCodeError {
  INSERT_DUPLIKATE_KEY = 11000,
}
export interface ErrorMessage extends Error {
  statusCode?: number;
  code?: number;
  keyPattern?: {};
}

export const HandlerErrors = (
  err: ErrorMessage,
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  let message = err.message || "Error Internal";
  let status = err.statusCode || 500;

  if (err?.code === MongoCodeError.INSERT_DUPLIKATE_KEY) {
    const keys = Object.keys(err?.keyPattern || {});
    message = "Error duplicate keys: " + keys?.join(",");
    status = 409;
  }
  response.error(req, resp, message, status);
};
