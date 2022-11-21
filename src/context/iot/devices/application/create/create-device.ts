
import { DeviceId } from "context/iot/devices/domain/DeviceId";
import { DeviceName } from "context/iot/devices/domain/DeviceName";
import { DeviceUserId } from "context/iot/devices/domain/DeviceUserId";
import { Device } from "../../domain/Device";
import { DeviceIdType } from "../../domain/DeviceIdType";
import { DeviceRepository } from "../../domain/DeviceRepository";


export class CreateDevice {
    private constructor(private readonly deviceRepository: DeviceRepository) {}
  
    async run(
      id: DeviceId,
      deviceName: DeviceName,
      idType : DeviceIdType,
      userId : DeviceUserId,

      ): Promise<void> {
      const device = Device.create(id, deviceName, userId, idType);
      this.deviceRepository.save(device);
    }
  }