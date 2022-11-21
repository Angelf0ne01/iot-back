import { TypeId } from "@context/iot/type/domain/type-id";
import { UserId } from "@context/iot/users/domain/UserId";
import { Device } from "../../domain/device";
import { DeviceRepository } from "../../domain/device-repository";
import { DeviceId } from "../../domain/devices-id";
import { DeviceName } from "../../domain/devices-name";
import { DeviceNumberSerial } from "../../domain/devices-number-serial";

export class CreateDevice {
  private constructor(private readonly deviceRepository: DeviceRepository) { }

  async run(
    id: DeviceId,
    deviceName: DeviceName,
    numberSerial: DeviceNumberSerial,
    idType: TypeId,
    userId: UserId,

  ): Promise<void> {
    const device = Device.create(id, deviceName, numberSerial, userId, idType);
    this.deviceRepository.save(device);
  }
}