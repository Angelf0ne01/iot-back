import { IotBackendApp } from "./iot-backend-app";

try {
  new IotBackendApp().start();
} catch (e) {
  console.log(e);
  process.exit(1);
}

process.on("uncaughtException", (err) => {
  console.log("uncaughtException", err);
  process.exit(1);
});
