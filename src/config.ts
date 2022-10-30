import * as dotenv from "dotenv";
dotenv.config({
  path: "./../.env",
});

export const config = {
  SERVER: {
    JWT: {
      SECRET: process.env.JWT_SECRET || "secret",
    },
    API: {
      PORT: process.env.API_PORT || "3000",
    },
  },
};
