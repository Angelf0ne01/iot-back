import { config } from "./../config";
import { Server } from "./server";


export class IotBackendApp {
  server?: Server;

  async start() {
    const port = config.SERVER.API.PORT || "3000";
    this.server = new Server(port);
    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }
}
