import { Device } from "./device";
import { DeviceId } from "./devices-id";

export interface DeviceRepository {
  delete: (DeviceId: DeviceId) => void;
  save: (Device: Device) => Device;
  update: (Device: Device) => Device;
  findAll: () => Device[];
  findById: (
    id: DeviceId,
  ) => Device | null;
}
