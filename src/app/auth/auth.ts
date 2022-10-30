import { Request, Response } from "express";
import jwt, { JsonWebTokenError, VerifyErrors } from "jsonwebtoken";
import { config } from "@config";
import error from "./../../utils/error";
const SECRET = config.SERVER.JWT.SECRET;

const generateTokenExpire = (data: any, days: number) =>
  jwt.sign(data, SECRET, { expiresIn: `${days}d` });

const tokenExpireVerify = (token: string) => {
  try {
    return jwt.verify(token, SECRET, (err: any, decoded: any) => {
      //si el token expiro err returna true
      if (err) {
        //@ts-ignore
        throw new Error(err);
      }
      return decoded;
    });
  } catch (err) {
    return null;
  }
};

const signIn = (data: any) => jwt.sign(data, SECRET);

const verify = (token: string) => {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    throw error("Error Auth", 401);
  }
};

const getToken = (auth: string) => {
  if (!auth || auth.indexOf("Bearer ") === -1)
    throw error("Token Invalid", 401);
  return auth.replace("Bearer ", "");
};

export const decodeHeader = (req: Request) => {
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  const decoded = verify(token);
  //@ts-ignore
  req.user = decoded;
  return decoded;
};

const isOwner = (req: Request, _id: any) => {
  const user = isLogged(req);
  //@ts-ignore
  if (user._id !== _id) throw error("No tiene permisos", 401);
};

const isLogged = (req: Request) => {
  const user = decodeHeader(req);
  //@ts-ignore
  if (!user.enabled) throw error("No esta habilitado", 401);
  return user;
};

export default {
  tokenExpireVerify,
  generateTokenExpire,
  signIn,
  isLogged,
  isOwner,
};
