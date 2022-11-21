import { Device } from "./Device";
import { DeviceUserId } from "./DeviceUserId";
import { DeviceId } from "./DeviceId";
import { DeviceName } from "./DeviceName";
import { DeviceIdType } from "./DeviceIdType";

export interface DeviceRepository {
  delete: (DeviceId: DeviceId) => void;
  save: (Device: Device) => Device;
  update: (Device: Device) => Device;
  findAll: () => Device[];
  findById: (
    id: DeviceId,
  ) => Device | null;
}
